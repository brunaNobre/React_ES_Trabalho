import React, { PropTypes } from 'react';
import movies from './movies.json';

const Movie = (params) => {

    const movie = movies.find(
        movie => movie.id === parseInt(params.match.params.movieId, 10)
    );

    return (
        <div className="movie-page-container">
        <div className="movie-header">
            <img src={movie.image} alt=""/>
        </div>

            <div className="movie-container">


                <div className="movie-information">
                    <p><b>Director:</b> {movie.director}</p>
                    <p><b>Release Date:</b> {movie.released}</p>
                    <p><b>Description:</b> {movie.description} </p>
                </div>
            </div>

            <div className="movie-reviews">
                <h2>Reviews</h2>



                {movie.reviews.map((review, i) => (
                    <div key={i} className="movie-review">
                        <h3>
                            {review.title} <span className="review-author">by {review.author}</span>
                        </h3>

                        <p>{review.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default Movie;