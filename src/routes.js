"use strict";

var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = require('./components/app');
var LandingPage = require('./components/dashboard/landingPage')
var TripPage = require('./components/dashboard/tripPage')
var NotFoundPage = require('./components/notFoundPage')

var Routes =  (
    <Route path="/" component={App}>
        <IndexRoute component={LandingPage}/>
        <Route path="trip" component={TripPage}/>
    </Route>
);

module.exports = Routes;