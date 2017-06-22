import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, HashRouter} from 'react-router-dom';


import Home from './Home';
import Movie from './Movie';
import List from './List';


var App =  React.createClass ({
    render: function () {
        return (
            <HashRouter>
                <div className="App">
                    <div className="App-header">
                        <h2>Flix</h2>
                        <Link to="/">Home</Link>
                        <Link to="list">Movies</Link>

                    </div>
                    <div className="container">
                        <Route path="/home" component={Home} />
                        <Route path="/movies/:movieId" component={Movie} />
                        <Route path="/list" component={List} />


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