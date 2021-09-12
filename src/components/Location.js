import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

class Location extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h4>City: {this.props.display_place}</h4>
                            <h4>Country: {this.props.address_country}</h4>
                            <h4>Latitude: {this.props.lat}</h4>
                            <h4>Longitude: {this.props.lon}</h4>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Image src={`https://maps.locationiq.com/v3/staticmap?
                            key=${process.env.REACT_APP_LOCATION_API_KEY}&size=600x600&zoom=14&
                            markers=${this.props.lat},${this.props.lon}|icon:large-black-cutout&format=png`} rounded />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Location
