angular.module("my_world")
    .controller("ThingsCtrl", function($scope, ThingsSvc, $location){
        console.log("ThingsCtrl");
        // NavSvc.setTab("Things");
        
        ThingsSvc.getThings()
            .then( function(things){
                $scope.things = things;
            }),
            
        // ThingsSvc.getOneThing()
        //     .then(function(thing){
        //         $scope.thing = thing;
        //     }),
            
        $scope.edit = function(thing){
    $location.path("/things/" + thing._id);
        };
       
        $scope.delete = function(thing){
            ThingsSvc.deleteThing(thing).then(
            function(){
            $scope.error = null;
            $scope.success = "Thing has been deleted";
        },
            function(error){
            $scope.error = error;
        }
        );
    };

 });