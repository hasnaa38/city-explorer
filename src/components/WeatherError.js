import React, { Component } from 'react';
import { Card, Badge } from 'react-bootstrap';

class WeatherError extends Component {
    render() {
        return (
            <>
                <Card>
                    <Card.Body>
                        <Card.Title>No {this.props.api_name} Info</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Something went wrong</Card.Subtitle>
                        <Card.Text>
                            It looks like we don't have {this.props.api_name} info for your search.<br/>
                            Error: {this.props.api_response_error_msg_data} <br/><br/>
                            Code: <Badge pill bg="secondary">{this.props.api_response_error_status}</Badge>
                        </Card.Text>
                  </Card.Body>
                </Card>
            </>
        )
    }
}

export default WeatherError
