import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';

class SearchForm extends Component {
    render() {
        return (
            <>
                <Form onSubmit={this.props.handleSubmit}>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="City Name" onChange={this.props.handleLocation} />
                        </Form.Group>
                    </Row>
                            <Button className="exploreButton" variant="dark" type="submit">
                                Explore!
                            </Button>{' '}
                            <Button variant="danger" className="clearButton" type="submit" onClick={this.props.handleClear}>
                                Clear
                            </Button>
                </Form>
            </>
        )
    }
}

export default SearchForm
