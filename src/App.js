import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import SearchForm from './components/SearchForm.js';
import Location from './components/Location.js';
import ErrorMessage from './components/ErrorMessage'

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
      });
    }).catch(error => {
      this.setState({
        error_status: error.response.status,
        error_msg_data: error.response.data.error,
        show_alert_flag: true,
        show_results_flag: false,
      });
      console.log(error.response.data);
      console.log(this.state.error_status);
      console.log(this.state.error_msg_data);
    });
  }

  handleClear = (e) => {
    e.preventDefault();
    this.setState({
      display_place: '',
      address_country: '',
      lat: '',
      lon: '',
      show_results_flag: false,
    });
  }

  render() {
    return (
      <div>
        <Container className='headerContainer'>
          <Row>
            <Col xs={12}>
              <h1>City Explorer</h1>
            </Col>
          </Row>
        </Container>
        <Container className='searchFormContainer'>
          <Row>
            <Col xs={12}>
              <SearchForm handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} handleClear={this.handleClear} />
            </Col>
          </Row>
        </Container>
        <Container className='locationContainer'>
          <Row>
            <Col xs={12}>
              {this.state.show_results_flag && <Location display_place={this.state.display_place}
                address_country={this.state.address_country} lat={this.state.lat} lon={this.state.lon} />}
                {this.state.show_alert_flag && <ErrorMessage error_status={this.state.error_status} error_msg_data={this.state.error_msg_data}/>}
            </Col>
          </Row>
        </Container>


      </div>
    )
  }
}

export default App

