// Create a new module
var workshop = angular.module("workshop", []);

workshop.controller("HelloCtrl", function($scope) {
  $scope.helloMessage = "Hello world";
});
