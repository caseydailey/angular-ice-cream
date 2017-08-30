"use strict";

console.log("FlavorFactory.js");

app.factory("FlavorFactory", function($q, $http){

    let getFlavors = () => {
        let items = [];
        return $q((resolve,reject)=>{
            $http.get('./data/flavors.json')
                .then((itemObject)=>{
                    let itemCollection = itemObject.data;
                    resolve(itemCollection.flavors);
                })
                .catch((error)=>reject(error));
        });
    };

    let getOneFlavor = () => {
        console.log("getOneFlavor");
    };

    return {getFlavors};

});