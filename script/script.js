// Create a new module
var workshop = angular.module("workshop", []);

workshop.controller("HelloCtrl", function($scope) {
  $scope.helloMessage = "Hello world";
});

// TODO-1 add MenuCtrl, and define data necessary to create a link
