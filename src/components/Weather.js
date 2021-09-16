import React, { Component } from 'react';
import { Accordion, Badge } from 'react-bootstrap';
import WeatherDay from './WeatherDay';

class Weather extends Component {
    render() {
        return (
            <>
                {
                    this.props.weatherData.map((day, index) => {
                        return <WeatherDay date={day.date} description={day.description} index={index + 1} />
                    })
                }
                <br/>
                {this.props.showFlag && <h6>
                    Weather data source: <Badge bg="info">{this.props.data_source}</Badge>
                </h6> }
            </>
        )
    }
}

export default Weather
