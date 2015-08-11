angular.module("my_world")
    .controller("ThingsRemoveCtrl", function($scope, $http, $location, ThingsSvc){
        $scope.thing = {
        };
        $scope.deleteThing = function(){
            ThingsSvc.deleteThing($scope.thing)
                .then( function(thing){
                    $location.path("/things");
                })
                .catch(function(error){
                    $scope.error = error; 
                });
        }
        
        ThingsSvc.getThings()
            .then( function(things){
                $scope.things = things;
            });
    });
    
    
    