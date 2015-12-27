'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
var IndexLink = ReactRouter.IndexLink;

var Header = React.createClass({
	render: function() {
		return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <a href="/" className="navbar-brand">
                <img src="images/logos/viaRvLogo.svg" />
              </a>
              <ul className="nav navbar-nav">
                <li><IndexLink to="/">Home</IndexLink></li>
                <li><Link to="trip">Trip</Link></li>
              </ul>
          </div>
        </nav>
		);
	}
});

module.exports = Header;

