angular.module("my_world")
    .controller("PeopleCtrl", function($http, $scope){
        $http.get("/api/people/")
            .then(function(response){
                $scope.people = response.data;
        });
});