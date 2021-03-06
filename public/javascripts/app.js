var app = angular.module("my_world", ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
   $routeProvider 
    .when("/", {
        controller: 'HomeCtrl',
        templateUrl: '/templates/home.html'
    })
    .when("/things", {
        controller: 'ThingsCtrl',
        templateUrl: '/templates/things.html'
    })
    .when("/things/new", {
        controller: 'ThingsNewCtrl',
        templateUrl: '/templates/things_new.html'
    })
    .when('/things/:id', {
        controller: 'ThingsCtrl',
        templateUrl: '/templates/thing.html'
    })
    
    .when("/things/delete", {
    controller: 'ThingsRemoveCtrl',
    templateUrl: '/templates/things_remove.html'
    })
    .when("/people", {
        controller: 'PeopleCtrl',
        templateUrl: '/templates/people.html'
    })
    .when("/people/new", {
        controller: 'PeopleNewCtrl',
        templateUrl: '/templates/people_new.html'
    });
    $locationProvider.html5Mode(true);
});