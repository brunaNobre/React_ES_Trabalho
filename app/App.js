import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, HashRouter} from 'react-router-dom';


import Home from './Home';
import Movie from './Movie';



var App =  React.createClass ({
    render: function () {
        return (
            <HashRouter>
                <div className="App">
                    <div className="App-header">
                        <Link to="/home" className="App-logo">MOVIX</Link>
                        <div className="App-navbar">
                            <ul>
                                <li><a href="#">FOR YOU</a></li>
                                <li><a href="#">TOP</a></li>
                                <li><a href="#">ACTION</a></li>
                                <li><a href="#">COMEDY</a></li>
                            </ul>
                        </div>




                    </div>
                    <div className="container">
                        <Route path="/home" component={Home} />

                        <Route path="/movies/:movieId" component={Movie} />



                    </div>
                </div>
            </HashRouter>
        );
    }


});



ReactDOM.render(
    <App />,
    document.getElementById('app')

);