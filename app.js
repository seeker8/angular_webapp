angular.module('flapperNews', [])
.controller('MainCtrl', [
    '$scope',
    function($scope){
        $scope.test = 'Hello world';
        $scope.posts = [
            {title: 'post1', upvotes: 5},
             {title: 'post2', upvotes: 4},
             {title: 'post3', upvotes: 1},
             {title: 'post4', upvotes: 3}
        ]
    }]);