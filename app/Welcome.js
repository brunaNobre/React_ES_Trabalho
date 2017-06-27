import React from 'react';



var Welcome = React.createClass({
    render: function () {
        return (
            <div className="container">
            <div className="welcome">
                <div className="layer"></div>

                    <h1>Without movies, life would be a mistake.</h1>


                <img src="./welcome-bg.jpg" alt=""/>


            </div>
            </div>
        );
    }
});


export default Welcome;