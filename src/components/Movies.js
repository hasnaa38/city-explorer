import React, { Component } from 'react';
import MovieCard from './MovieCard';

class Movies extends Component {
    render() {
        return (
            <>
                {this.props.moviesData.map(movie => {
                    return <MovieCard title={movie.title} overview={movie.overview} average_votes={movie.average_votes}
                        total_votes={movie.total_votes} image_url={movie.image_url} popularity={movie.popularity}
                        released_on={movie.released_on} />
                })}

            </>
        )
    }
}
export default Movies
