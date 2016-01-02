"use strict";

//This file is mocking a web API by hitting hard coded data.
var Helper = require('../helpers/restHelper');
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(user) {
	return user.email.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var UserApi = {
	getAllUsers: function() {
        return Helper.get("api/users"); 
	},

	getUserById: function(id) {
		var user = _.find(users, {id: id});
		return _clone(user);
	},
};

module.exports = UserApi;