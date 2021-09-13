import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';

class Weather extends Component {
    render() {
        return (
            <>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{this.props.date} weather</Accordion.Header>
                        <Accordion.Body>{this.props.description}</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </>
        )
    }
}

export default Weather
