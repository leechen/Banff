'use strict';

var React = require('react');

var Trip = React.createClass({
	render: function () {
		return (
			<div>
				<h1>Trips</h1>
				<p>
					Hot trips:
					<ul>
						<li>US West Coast</li>
						<li>Grand Canyon</li>
						<li>Florida</li>
					</ul>
				</p>
			</div>
		);
	}
});

module.exports = Trip;
