import React, { PropTypes } from 'react';
import { Link} from 'react-router-dom';


const FeaturedMovie = ({ movie }) => (

    <div className="featured-movie col-sm-3">
        <div className="featured-movie__image">
            {/*<Link to={`/movies/${movie.id}`} params={movie.id}>*/}
            <img alt={movie.name} src={movie.image} data-toggle="modal" data-target="#myModal"/>
            {/*</Link>*/}
        </div>


    </div>



);



FeaturedMovie.propTypes = {
    movie: PropTypes.shape({
        director: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        released: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default FeaturedMovie;