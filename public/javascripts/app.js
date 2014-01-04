var twitPicApp = angular.module('twitPicApp', ['ngRoute']);

twitPicApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
        when('/auth', {
            templateUrl: '/partials/auth.html',
            controller: 'AuthController'
        }).
        when('/timeline', {
            templateUrl: '/partials/timeline.html',
            controller: 'TimelineController'
        }).
        otherwise({
            redirectTo: '/auth'
        });
});