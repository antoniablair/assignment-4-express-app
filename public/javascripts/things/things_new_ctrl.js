angular.module("my_world")
    .controller("ThingsNewCtrl", function($scope, $http, $location, ThingsSvc){
        $scope.thing = {
        };
        $scope.save = function(){
            ThingsSvc.save($scope.thing)
                .then( function(thing){
                    $location.path("/things");
                })
                .catch(function(error){
                    $scope.error = error; 
                });
        }

    });
    
    
//     $scope.deleteBook = function($index){
//     $scope.number = ($scope.pageSize * ($scope.currentPage - 1)) + $index;
//     $http.delete("http://localhost:8080/book/"+$scope.booklist[$scope.number].bookname).success(function(res){
//         if(res.error == 0){
//             $state.go($state.current, {}, {reload: true});
//         }else{
           
//         }
//     });
// };
    