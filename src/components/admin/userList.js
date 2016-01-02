"use strict";

var React = require('react');

var UserList = React.createClass({
	propTypes: {
		users: React.PropTypes.array.isRequired
	},

	render: function() {
		var createUserRow = function(user) {
			return (
				<tr key={user.id}>
					<td><a href={"/#users/" + user.id}>{user.id}</a></td>
					<td>{user.name}</td>
					<td>{user.email}</td>                    
				</tr>
			);
		};

		return (
			<div>
				<table className="table">
					<thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
					</thead>
					<tbody>
						{this.props.users.map(createUserRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = UserList;