'use strict';

var React = require('react');
var TripApi = require('../../api/tripApi');
var TripList = require('./tripList.jsx');

var TripPage = React.createClass({
	getInitialState: function() {
		return {
			trips: []
		};
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			this.setState({ trips: TripApi.getAllTrips() });
		}
	},

	render: function() {
		return (
			<div>
				<h1>Hot Trips</h1>
				<TripList trips={this.state.trips} />
			</div>
		);
	}
});

module.exports = TripPage;
