import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import SearchForm from './components/SearchForm.js';
import Location from './components/Location.js';
import ErrorMessage from './components/ErrorMessage';
import Weather from './components/Weather';
import WeatherError from './components/WeatherError.js';
import Movies from './components/Movies.js';

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
      oldWeatherData: [],
      weatherData: [],
      moviesData: [],
      api_name: '',
      show_api_error_alert_flag: false,
      api_response_error_status: '',
      api_response_error_msg_data: '',

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
        oldWeatherData: [],
        weatherData: [],
        moviesData: [],
        show_api_error_alert_flag: false,
      });
    }).catch(error => {
      console.log('city not found');
      this.setState({
        error_status: error.response.status,
        error_msg_data: error.response.data.error,
        show_alert_flag: true,
        show_results_flag: false,
        oldWeatherData: [],
        weatherData: [],
        moviesData: [],
      });
    }).then(() => {
      //only if the city exists
      if (this.state.show_results_flag) {
        this.weatherBitAPI();
        this.moviedbAPI();
        this.oldWeatherAPI(); //Lab 07
      }
    })
  }

  weatherBitAPI = () => {
    // https://city-explorer-api-h3.herokuapp.com
    axios.get(`https://city-explorer-api-h3.herokuapp.com/weather?lat=${this.state.lat}&lon=${this.state.lon}`)
      .then(res => {
        this.setState(
          {
            weatherData: res.data,
          });
      }).catch(error => {
        console.log('weather bit error, status code: ', error.response.data.status);
        this.setState({
          api_name: 'Weather Bit',
          api_response_error_status: error.response.status,
          api_response_error_msg_data: error.response.data.message,
          show_api_error_alert_flag: true,
        })
      })
  }

  moviedbAPI = () => {
    axios.get(`https://city-explorer-api-h3.herokuapp.com/movies?city_name=${this.state.display_place}`)
      .then(res => {
        console.log('===========')
        console.log(res.data);
        this.setState(
          {
            moviesData: res.data,
          }
        );
      }).catch(error => {
        console.log('movies bd error, status code: ', error.response.data.status);
        this.setState({
          api_name: 'Movies',
          api_response_error_status: error.response.status,
          api_response_error_msg_data: error.response.data.message,
          show_api_error_alert_flag: true,
        })
      })
  }

  oldWeatherAPI = () => {
    axios.get(`http://localhost:8000/old_weather?lat=${this.state.lat}&lon=${this.state.lon}&searched_city=${this.state.display_place}`)
      .then(res => {
        this.setState(
          {
            oldWeatherData: res.data,
          }
        );
      }).catch(error => {
        this.setState(
          {
            api_name: 'Old Weather API for Lab07',
            api_response_error_status: error.response.status,
            api_response_error_msg_data: error.response.data.message,
            show_api_error_alert_flag: true,
          }
        );
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
      oldWeatherData: [],
      weatherData: [],
      moviesData: [],
      show_api_error_alert_flag: false,
      api_name: '',
    });
  }
  // 
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
            <Col xs={6}>
              <Row className="searchArea">
                <SearchForm handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} handleClear={this.handleClear} />
              </Row>
              <br /><br />
              <Row className="resultsArea">
                {this.state.show_results_flag && <Location display_place={this.state.display_place}
                  address_country={this.state.address_country} lat={this.state.lat} lon={this.state.lon} />}
                {this.state.show_alert_flag && <ErrorMessage error_status={this.state.error_status} error_msg_data={this.state.error_msg_data} />}
              </Row>
            </Col>
            <Col xs={6} className="weatherArea">
              {this.state.weatherData.map((day, index) => {
                return <Weather date={day.date} description={day.description} index={index + 1} />
              })}
            </Col>
          </Row>
          <br /><br />
          <Row className="moviesArea">
            {this.state.moviesData.map(movie => {
              return <Movies title={movie.title} overview={movie.overview} average_votes={movie.average_votes} total_votes={movie.total_votes} image_url={movie.image_url} popularity={movie.popularity} released_on={movie.released_on} />
            })}
          </Row>
          <Row>
            {this.state.show_api_error_alert_flag && <WeatherError api_name={this.state.api_name} api_response_error_status={this.state.api_response_error_status} api_response_error_msg_data={this.state.api_response_error_msg_data} />}
          </Row>
          <br/><br/><br/><br/>

          <Row>
            {this.state.oldWeatherData.map((day, index) => {
              return <Weather date={day.date} description={day.description} index={index + 1} />
            })}
          </Row>
        </Container>
      </div>
    )
  }
}
export default App

