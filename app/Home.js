import React from 'react';
import movies from './movies.json';
import FeaturedMovie from './FeatureMovie';
import ModalMovieDetail from './ModalMovieDetail';



var Home = React.createClass({

    getInitialState: function () {
        return {
            movieID : 1,
            fade: "modal fade"

        }
    },

    changeId: function (id) {
        this.setState({
            movieID: id
        });
    },

    handleClick: function () {
        this.setState({
            fade: "modal fade esconde"

        });
    },

    render: function () {

        const topFour = movies.slice(0, 8);

        return (
            <div className="home-container">




                <div className="row">
                    {topFour.map((movie, i) => (

                        <FeaturedMovie
                            movie={movie}
                            key={i}
                            onClick={this.changeId}

                        />
                    ))}
                </div>

                <ModalMovieDetail movieID={this.state.movieID} onClick={this.handleClick} fade={this.state.fade}/>
            </div>
        )
    }

});



export default Home;