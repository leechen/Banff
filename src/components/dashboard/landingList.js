"use strict";

var React = require('react');

var LandingList = React.createClass({
	propTypes: {
		landings: React.PropTypes.array.isRequired
	},

	render: function() {
		var createLandingRow = function(landing) {
			return (
				<tr key={landing.id}>
					<td><a href={"/#landings/" + landing.id}>{landing.id}</a></td>
					<td>{landing.title}</td>
				</tr>
			);
		};

		return (
			<div>
				<table className="table">
					<thead>
						<th>Id</th>
						<th>Title</th>
					</thead>
					<tbody>
						{this.props.landings.map(createLandingRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = LandingList;