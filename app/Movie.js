import React, { PropTypes } from 'react';
import movies from './movies.json';

const Movie = (params) => {

    const movie = movies.find(
        movie => movie.id === parseInt(params.match.params.movieId, 10)
    );

    var release = movie.released;
    var stringSplit = release.split(' ');
    var year = stringSplit[2];

    return (
        <div className="movie-page-container">
        <div className="movie-header">
            <img src={movie.image} alt=""/>
        </div>

            <div className="movie-container">

                <p className="subtitle">MOVIE <span>{year}</span></p>
                <div className="movie-information">
                   <p className="movie-title">{movie.name}</p>
                    <p className="movie-more-info underline">{movie.director} - {movie.released}</p>

                    <p className="social-info"><span className="fa fa-heart-o"></span>3.251 likes</p>
                    <p className="social-info"><span className="fa fa-comment-o"></span>+200 comments</p>

                    <p className="rating">
                                <span className="rate-container">
                                <span className="modal-rate">{movie.rate}</span>
                                <span className="rate-detail">/10</span>
                                </span>
                    </p>
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