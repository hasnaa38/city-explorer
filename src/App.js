import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Container, Row, Col, Navbar, Card } from 'react-bootstrap';
import SearchForm from './components/SearchForm.js';
import Location from './components/Location.js';
import ErrorMessage from './components/ErrorMessage';
import Weather from './components/Weather';
import WeatherError from './components/WeatherError.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_place: '',
      address_country: '',
      lat: '',
      lon: '',
      show_results_flag: false,
      error_status: '',
      error_msg_data: '',
      show_alert_flag: false,
      weatherData: [],
      show_weather_alert_flag: false,
      weather_error_status: '',
      weather_error_msg_data: '',
    };
  }

  handleLocation = (e) => {
    let city_name = e.target.value;
    this.setState({
      display_place: city_name,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let config = {
      method: "GET",
      baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.display_place}`,
    };
    axios(config).then(res => {
      let locationData = res.data[0];
      this.setState({
        display_place: locationData.display_place,
        address_country: locationData.display_address,
        lat: locationData.lat,
        lon: locationData.lon,
        show_results_flag: true,
        show_alert_flag: false,
        weatherData: [],
        show_weather_alert_flag: false,
      });
    }).catch(error => {
      console.log(error.response);
      this.setState({
        error_status: error.response.status,
        error_msg_data: error.response.data.error,
        show_alert_flag: true,
        show_results_flag: false,
        weatherData: [],
      });
    }).then(() => {
      axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}&searched_city=${this.state.display_place}`)
        .then(res => {
          console.log(res);
          this.setState(
            {
              weatherData: res.data,
            });
        }).catch(error => {
          console.log(error.response.data.status);
          this.setState({
            weather_error_status: error.response.status,
            weather_error_msg_data: error.response.data.message,
            show_weather_alert_flag: true,
          })
        })
    })
  }

  handleClear = (e) => {
    e.preventDefault();
    this.setState({
      display_place: '',
      address_country: '',
      lat: '',
      lon: '',
      show_results_flag: false,
      error_status: '',
      error_msg_data: '',
      show_alert_flag: false,
      weatherData: [],
      show_weather_alert_flag: false,
    });
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container className='headerContainer'>
            <Navbar.Brand>City Explorer</Navbar.Brand>
          </Container>
        </Navbar>
        <Container className='mainContainer'>
          <Row>
            <Col xs={6} className="searchArea">
              <SearchForm handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} handleClear={this.handleClear} />
            </Col>
            <Col xs={6} className="resultsArea">
              {this.state.show_results_flag && <Location display_place={this.state.display_place}
                address_country={this.state.address_country} lat={this.state.lat} lon={this.state.lon} />}
              {this.state.show_alert_flag && <ErrorMessage error_status={this.state.error_status} error_msg_data={this.state.error_msg_data} />}
            </Col>
            <Col xs={5} className="weatherArea">
              {this.state.weatherData.map(day => {
                return <Weather date={day.date} description={day.description} />
              })}
              {this.state.show_weather_alert_flag && <WeatherError weather_error_status={this.state.weather_error_status} weather_error_msg_data={this.state.weather_error_msg_data}/>}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App

