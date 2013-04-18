// Create a new module
var workshop = angular.module("workshop", []);

// Create routes
workshop.config(function($routeProvider) {
  $routeProvider
    .when("/hello", {
      templateUrl: "views/hello.html",
      controller: "HelloCtrl"
    })
    .when('/main', {
      templateUrl: 'views/main.html'
    })
    .otherwise({
      redirectTo: '/main'
    });
});

workshop.controller("HelloCtrl", function($scope) {
  $scope.helloMessage = "Hello world";
});

workshop.controller("MenuCtrl", function($scope) {
  // TODO add a list of object with menu possition data
  $scope.links = [
    {
      url: '#/main',
      text: 'Main'
    },
    {
      url: '#/hello',
      text: 'Hello'
    }
  ];
});
