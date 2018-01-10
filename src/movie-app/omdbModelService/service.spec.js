describe('omdb service', function () {

    var omdbApi = {};
    var movieData = {};
    var movieDataById = {};
    var $httpBackend;

    beforeEach(module('omdb'));

    beforeEach(inject(function (_omdbApi_, _$httpBackend_) {
        omdbApi = _omdbApi_;
        $httpBackend = _$httpBackend_;
    }));

    it('should return search movie data', inject(function (omdbApi) {
        var response;

        var expectedUrl = 'http://www.omdbapi.com/?apikey=b40f6316&s=star%20wars';
        // var expectedUrl = function(url) {
        // 	return url.indexOf('http://www.omdbapi.com') !== -1;
        // }
        // var expectedUrl = /http:\/\/www.omdbapi.com\/\?v=1&s=star%20wars/;

        $httpBackend.when('GET', expectedUrl)
            .respond(200, movieData);

        omdbApi.search('star wars')
            .then(function (data) {
                response = data;
            });

        $httpBackend.flush();

        expect(response).toEqual(movieData);
    }));

    it('should return movie data by id', function () {
        var response;
        $httpBackend.expect('GET', 'http://www.omdbapi.com/?apikey=b40f6316&i=tt0076759')
            .respond(200, movieDataById);
        omdbApi.find('tt0076759')
            .then(function (data) {
                response = data;
            });
        $httpBackend.flush();

        expect(response).toEqual(movieDataById);
    });
});