import React, { Component } from 'react';
import MovieCard from './MovieCard';
import { Badge } from 'react-bootstrap';

class Movies extends Component {
    render() {
        return (
            <>
                {this.props.moviesData.map(movie => {
                    return <MovieCard title={movie.title} overview={movie.overview} average_votes={movie.average_votes}
                        total_votes={movie.total_votes} image_url={movie.image_url} popularity={movie.popularity}
                        released_on={movie.released_on} />
                })}
                <br/>
                {this.props.showFlag && <h6>
                    Movies data source: <Badge bg="info">{this.props.data_source}</Badge>
                </h6>}
                <br/>
            </>
        )
    }
}
export default Movies
