angular.module('myApp', [])
  .controller('MovieController', function($scope, $http){
    $scope.$watch('search', function(){
      fetch();
    });

    $scope.search = "Hot Rod"

    function fetch(){
      $http.get("http://omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
      .then(function(response){
        $scope.details = response.data;
      });

      $http.get("http://omdbapi.com/?s=" + $scope.search)
      .then(function(response){
        $scope.related = response.data;
      });

      reAnimate();
    }

    function reAnimate(){
      $("#movie-poster").removeClass("animated flip")
      setTimeout(function(){
        $("#movie-poster").addClass("animated flip");
      }, 100);
    }

    $scope.update = function(movie){
      $scope.search = movie.Title;
    }

  })