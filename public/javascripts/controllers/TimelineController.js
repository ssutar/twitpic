twitPicApp.controller('TimelineController', function($scope, $rootScope, $location) {
    var auth = $rootScope.twitter;
    
    if (auth && auth.get) {
        auth.get('/1.1/search/tweets.json?q=year&result_type=mixed&count=100&include_entities=true')
            .done(function(data) {
                $scope.results = data.statuses;
                $scope.$apply();
            });
    }
    else {
        $location.path('/auth');
    }
});