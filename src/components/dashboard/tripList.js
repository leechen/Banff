"use strict";

var React = require('react');

var TripList = React.createClass({
	propTypes: {
		trips: React.PropTypes.array.isRequired
	},

	render: function() {
		var createTripRow = function(trip) {
			return (
				<tr key={trip.id}>
					<td><a href={"/#trips/" + trip.id}>{trip.id}</a></td>
					<td>{trip.name}</td>
					<td>{trip.length}</td>                    
				</tr>
			);
		};

		return (
			<div>
				<table className="table">
					<thead>
						<th>Id</th>
						<th>Name</th>
						<th>Length</th>
					</thead>
					<tbody>
						{this.props.trips.map(createTripRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = TripList;