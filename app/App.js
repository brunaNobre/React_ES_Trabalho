import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, HashRouter} from 'react-router-dom';


import Home from './Home';
import Movie from './Movie';
import Welcome from './Welcome';



var App =  React.createClass ({
    render: function () {
        return (
            <HashRouter>
                <div className="App">
                    <div className="App-header">
                        <Link to="/" className="App-logo">MOVIX</Link>
                        <div className="App-navbar">
                            <ul>
                                <li><Link to="/home">FOR YOU</Link></li>
                                <li><a href="#">TOP</a></li>
                                <li><a href="#">ACTION</a></li>
                                <li><a href="#">COMEDY</a></li>
                            </ul>
                        </div>




                    </div>
                    <div className="container">
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/home" component={Home} />

                        <Route exact path="/movies/:movieId" component={Movie} />



                    </div>
                   {/* <footer className="App-footer">
                        <span className="fa fa-arrow-down"></span>
                        <div className="App-navbar">
                        <ul>
                            <li><a href="#"><span className="fa fa-film"></span><p>MOVIES</p></a></li>
                            <li><a href="#"><span className="fa fa-television"></span><p>TV SHOW</p></a></li>
                            <li><a href="#"><span className="fa fa-heart-o"></span><p>WATCHLIST</p></a></li>
                            <li><a href="#"><span className="fa fa-user-o"></span><p>PROFIL</p></a></li>
                        </ul>
                        </div>
                    </footer>*/}
                </div>
            </HashRouter>
        );
    }


});



ReactDOM.render(
    <App />,
    document.getElementById('app')

);