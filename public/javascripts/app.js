var twitPicApp = angular.module('twitPicApp', ['ngRoute']);

twitPicApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
        when('/auth', {
            templateUrl: '/partials/auth.html',
            controller: 'AuthController'
        }).
        otherwise({
            redirectTo: '/auth'
        });
});