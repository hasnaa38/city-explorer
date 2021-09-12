import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

class SearchForm extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>City Name</Form.Label>
                        <Form.Control type="text" placeholder="City Name" onChange={this.props.handleLocation} />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Explore!
                    </Button>
                    <Button variant="dark" type="submit" onClick={this.props.handleClear}>
                        Clear
                    </Button>
                </Form>
            </div>
        )
    }
}

export default SearchForm
