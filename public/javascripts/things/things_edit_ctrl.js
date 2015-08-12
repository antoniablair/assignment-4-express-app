angular.module("my_world")
    .controller("ThingEditCtrl", function($scope, $http, $location, ThingsSvc){
        $scope.thing = {
        };
        $scope.edit = function(thing){
    $location.path("/things/" + thing._id);
  };
});