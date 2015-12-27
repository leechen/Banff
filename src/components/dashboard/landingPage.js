"use strict";

var React = require('react');
var LandingApi = require('../../api/landingApi');
var LandingList = require('./landingList');

var LandingPage = React.createClass({
	getInitialState: function() {
		return {
			landings: []
		};
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			this.setState({ landings: LandingApi.getAllLandings() });
		}
	},

	render: function() {
		return (
			<div>
				<h1>Explore the Freedom</h1>
				<LandingList landings={this.state.landings} />
			</div>
		);
	}
});

module.exports = LandingPage;