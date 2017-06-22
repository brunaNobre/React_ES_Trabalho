/**
 * Created by brualmei1 on 22/06/2017.
 */
import React, { PropTypes } from 'react';
import { Link} from 'react-router-dom';
import movies from './movies.json';





var ModalMovieDetail = React.createClass({
    
    
    handleClick: function (e) {
        e.preventDefault();
       this.props.onClick();
       var modalBackDrop = document.querySelector('.modal-backdrop');
        modalBackDrop.parentNode.removeChild( modalBackDrop );
    },

    render: function () {

        return (
            <div className={this.props.fade} id="myModal" role="dialog">
                <div className="modal-dialog">


                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Modal Header</h4>
                        </div>
                        <div className="modal-body">
                            <Link to={`/movies/${this.props.movieID}`}>
                                <p onClick={this.handleClick}>{this.props.movieID}</p>
                                {/*params={movie.id}*/}
                            </Link>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

});





export default ModalMovieDetail;