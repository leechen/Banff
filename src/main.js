$ = jQuery = require('jquery');
// var ReactDOM = require('react-dom');
var React = require('react');
var Home = require('./components/homePage');
var Trip = require('./components/dashboard/tripPage');
var Header = require('./components/common/header');

(function(win) {
	"use strict";
	var App = React.createClass({
		render: function() {
			var Child;

			switch(this.props.route) {
				case 'trip': Child = Trip; break;
				default: Child = Home;
			}

			return (
				<div>
					<Header/>
					<Child/>
				</div>
			);

		}
	});

	function render() {
		var route = window.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app'));
	}

	window.addEventListener('hashchange', render);
	render();
})(window);


