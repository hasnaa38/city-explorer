import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';
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
            </>
        )
    }
}

export default Weather
