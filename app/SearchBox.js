import React from 'react';



var SearchBox = React.createClass({
    
    handleChange: function (e) {
        e.target.select();
    },
    
    render: function () {
        return (
            <div className="input-group search">

                <input type="text" className="form-control" placeholder="Search Movie Title..." id="q" onClick={this.handleChange}/>
            </div>
        );
    }
});

export default SearchBox;