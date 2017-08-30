"use strict";

// declaring the app as module. we can now put this on the body with 'ng-app'
var app = angular.module("IceCreamApp", ['ngRoute']);

app.config(function($routeProvider){

   $routeProvider
        .when('/', {
            templateUrl: 'app/partials/greetings.html'
        })
        .when('/showall', {
            templateUrl: 'app/partials/flavor-list.html',
            controller: "FlavorCtrl"
        })
        .otherwise('/');
});