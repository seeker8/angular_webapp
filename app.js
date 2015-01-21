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
        ];
        $scope.addPost = function(){
            if(!$scope.title || $scope.title === ''){
                return;
            }
            $scope.posts.push({title: $scope.title, upvotes: 0});
            $scope.title = '';
        };
    }]);