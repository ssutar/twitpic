twitPicApp.controller('TimelineController', function($scope, $rootScope) {
    $rootScope.twitter.get('/1.1/search/tweets.json?q=year&result_type=mixed&count=100&include_entities=true')
        .done(function(data) {
            $scope.tw_timeline = data.statuses;
            $scope.$apply();
        });
});