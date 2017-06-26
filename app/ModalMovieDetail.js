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
                            <h4 className="modal-title">{movie.name}</h4>
                            <p>{movie.director}</p>
                            <p>{movie.released}</p>
                            <Link to={`/movies/${this.props.movieID}`} onClick={this.handleClick}>
                                <span className="fa fa-plus-square"></span>
                            </Link>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="modal-close" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

});





export default ModalMovieDetail;