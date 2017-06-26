/**
 * Created by brualmei1 on 22/06/2017.
 */
import React, { PropTypes } from 'react';
import { Link} from 'react-router-dom';
import movies from './movies.json';





var ModalMovieDetail = React.createClass({


    
    
    handleClick: function () {

       this.props.onClick();
       var modalBackDrop = document.querySelector('.modal-backdrop');
       var body = document.querySelector('body');
        modalBackDrop.parentNode.removeChild( modalBackDrop );
        body.setAttribute('class', "");
        body.setAttribute('style', "");
    },

    render: function () {

        var movie = movies.find(
            movie => movie.id === parseInt(this.props.movieID, 10)
        );

        return (
            <div className={this.props.fade} id="myModal" role="dialog">
                <div className="modal-dialog">


                    <div className="modal-content">

                        <div className="modal-body">
                            <Link to={`/movies/${this.props.movieID}`} onClick={this.handleClick}>
                            <img className="modal-img" src={movie.image} alt={movie.name}/>
                            </Link>
                            <h4 className="modal-title">{movie.name}</h4>
                            <p className="modal-desc">{movie.director}</p>
                            <p className="modal-desc">{movie.released}</p>

                            <p className="rating">
                                <span className="rate-container">
                                <span className="modal-rate">{movie.rate}</span>
                                <span className="rate-detail">/10</span>
                                </span>
                            </p>

                            <div className="modal-card clear-fix">
                                <ul>
                                    <li><a href="#"><span className="fa fa-heart-o"></span><p>ADD TO WATCHLIST</p></a></li>
                                    <li><a href="#"><span className="fa fa-play-circle-o"></span><p>PLAY LAST TRAILER</p></a></li>
                                    <li><Link to={`/movies/${this.props.movieID}`} onClick={this.handleClick}>
                                        <span className="fa fa-info"></span><p>SHOW ALL DETAILS</p></Link></li>
                                </ul>
                            </div>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="modal-close clear-fix" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

});





export default ModalMovieDetail;