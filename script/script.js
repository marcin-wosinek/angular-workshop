// Create a new module
var workshop = angular.module("workshop", []);

// Create routes
workshop.config(function($routeProvider) {
  $routeProvider
    // TODO define path like this one, but use ListCtrl
    // don't forget about creating new views file
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

// TODO define ListCtrl, with few elements on list
workshop.controller("MenuCtrl", function($scope) {
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
