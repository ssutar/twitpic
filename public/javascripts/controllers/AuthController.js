twitPicApp.controller('AuthController', function ($scope, $rootScope, $location) {
    //Oauth lib key
    OAuth.initialize('biRpKChb7f8exLie86OS2_x7_EM');
    //Twitter Authentication
    $scope.authWithTwitter = function () {
        OAuth.popup('twitter', function(err, res) {
            if (err) {
                return alert(err);
            }
            $.cookie('auth', JSON.stringify(res), { expires: 7, path: '/' });
            $rootScope.twitter = res;
            $location.path('/timeline');
            $scope.$apply();
	    });
    };
});