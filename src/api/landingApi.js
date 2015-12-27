"use strict";

//This file is mocking a web API by hitting hard coded data.
var landings = require('./landingData').landings;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(landing) {
	return landing.id;
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var LandingApi = {
	getAllLandings: function() {
		return _clone(landings); 
	},

	getLandingById: function(id) {
		var landing = _.find(landings, {id: id});
		return _clone(landing);
	}
};

module.exports = LandingApi;