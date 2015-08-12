angular.module("my_world")
    .controller("ThingsRemoveCtrl", function($scope, $http, ThingsSvc){
        $scope.thing = {
        };
        $scope.deleteThing = function(thing){
            ThingsSvc.deleteThing($scope.thing)
                .then(function(thing){
                    $scope.error = 'Success!';
                })
                .catch(function(error){
                    $scope.error = error; 
                });
        }
    });


    // vm.deleteThing = function (_id) {
    //   $http.delete('/api/things/' + _id)
    //     .success(function () {
    //       vm.getThings();
    //       socket.emit('submit');
    //     });
    // };
