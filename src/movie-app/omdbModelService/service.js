angular.module('omdb', [])
    .factory('omdbApi', function ($http, $q) {
        var service = {};
        var baseUrl = 'http://www.omdbapi.com/?apikey=b40f6316&';

        // service.search = function (query) {
        //     var newUrl =  baseUrl + 's=' + encodeURIComponent(query);
        //     console.log(newUrl);
        //     var deferred = $q.defer();
        //     $http.get(newUrl)
        //         .success(function (result) {
        //             // console.log(result);
        //             deferred.resolve(result);
        //         })
        //         .error(function () {
        //             deferred.reject();
        //         });
        //     return deferred.promise();
        // }

        function httpPromise(url) {
            var deferred = $q.defer();
            $http.get(url)
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function () {
                    deferred.reject();
                });
            return deferred.promise;
        }

        service.search = function (query) {
            return httpPromise(baseUrl + 's=' + encodeURIComponent(query));
        }

        service.find = function (id) {
            return httpPromise(baseUrl + 'i=' + id);
        }

        return service;
    });