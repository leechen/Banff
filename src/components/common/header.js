'use strict';

var React = require('react');

var Header = React.createClass({
	render: function() {
		return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <a href="/" className="navbar-brand">
                <img src="images/logos/viaRvLogo.svg" />
              </a>
              <ul className="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/#trip">Trip</a></li>
                <li><a href="/#landing">Landing</a></li>
              </ul>
          </div>
        </nav>
		);
	}
});

module.exports = Header;

