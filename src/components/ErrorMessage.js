import React, { Component } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';

class ErrorMessage extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Alert variant="danger">
                                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                                <p>
                                    Error: {this.props.error_msg_data} <br/>
                                    Status Code: {this.props.error_status} <br/>
                                    Try Again!
                                </p>
                            </Alert>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ErrorMessage