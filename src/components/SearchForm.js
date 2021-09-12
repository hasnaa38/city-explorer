import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';

class SearchForm extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.handleSubmit}>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {/* <Form.Label>City Name</Form.Label> */}
                            <Form.Control type="text" placeholder="City Name" onChange={this.props.handleLocation} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Col xs={2}>
                            <Button variant="dark" type="submit">
                                Explore!
                            </Button>
                        </Col>
                        <Col xs={1}>
                            <Button variant="dark" className="clearButton" type="submit" onClick={this.props.handleClear}>
                                Clear
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default SearchForm
