angular.module('movieApp', ['ui.bootstrap', 'ngRoute', 'omdb'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'movie-app/home/home.html',
                controller: 'HomeController'
            })
            .when('/results', {
                templateUrl: 'movie-app/result/results.html',
                controller: 'ResultsController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });