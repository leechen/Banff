"use strict";

//This file is mocking a web API by hitting hard coded data.
var trips = require('./tripData').trips;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(trip) {
	return trip.name.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var TripApi = {
	getAllTrips: function() {
		return _clone(trips); 
	},

	getTripById: function(id) {
		var trip = _.find(trips, {id: id});
		return _clone(trip);
	},
};

module.exports = TripApi;