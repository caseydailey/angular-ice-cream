"use strict";

console.log("FlavorCtrl");

app.controller("FlavorCtrl", function($scope, FlavorFactory){

    let s = $scope;

    FlavorFactory.getFlavors()
    .then((itemCollection)=>{
        s.flavors = itemCollection;
    });

});