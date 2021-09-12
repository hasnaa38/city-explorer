import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

class Location extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h3 style={{fontSize:"24px"}}>City: {this.props.display_place}</h3>
                            <h3 style={{fontSize:"24px"}}>Country: {this.props.address_country}</h3>
                            <h3 style={{fontSize:"24px"}}>Latitude: {this.props.lat}</h3>
                            <h3 style={{fontSize:"24px"}}>Longitude: {this.props.lon}</h3>
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
