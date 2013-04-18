// Create a new module
var workshop = angular.module("workshop", []);

workshop.controller("HelloCtrl", function($scope) {
  $scope.helloMessage = "Hello world";
});

workshop.controller("MenuCtrl", function($scope) {
  $scope.href = "http://google.pl";
  $scope.text = "go to google";
});
