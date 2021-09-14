import React, { Component } from 'react';
import { Card, Col } from 'react-bootstrap';

class Movies extends Component {
    render() {
        return (
            <>
                <Col xs={4}>
                    <Card className={"movieCard"}>
                        <Card.Body>
                            <Card.Img variant="top" src={`${this.props.image_url}`} />
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">average votes: {this.props.average_votes}, total votes: {this.props.total_votes}</Card.Subtitle>
                            <Card.Text>{this.props.overview}</Card.Text>
                            <Card.Text>Popularity: {this.props.popularity}</Card.Text>
                            <Card.Text>Released on {this.props.released_on}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
}
export default Movies
