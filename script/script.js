// Create a new module
var workshop = angular.module("workshop", []);

// Create routes
workshop.config(function($routeProvider) {
  $routeProvider
    .when("/hello", {
      templateUrl: "views/hello.html",
      controller: "HelloCtrl"
    })
    .when("/list", {
      templateUrl: "views/list.html",
      controller: "ListCtrl"
    })
    .when('/main', {
      templateUrl: 'views/main.html',
      controller: "MainCtrl"
    })
    .otherwise({
      redirectTo: '/main'
    });
});

workshop.controller("HelloCtrl", function($scope) {
  $scope.helloMessage = "Hello world";
});

workshop.controller("MainCtrl", function($scope) {
  $scope.firstName = 'Jan';
  $scope.lastName = 'Kowalski';

  $scope.name = function () {
    return $scope.firstName + " " + $scope.lastName;
  }

  $scope.counter = 0;
  $scope.valueUpdated = function () {
    $scope.counter++;
  };
});

workshop.factory("People", function(){
  // checkout http://www.json-generator.com/
  return [
      {
          "firstName": "Serenity",
          "lastName": "Oldridge",
          "picture": "http://placehold.it/70x70/632955",
          "age": 25,
          "gender": "female"
      }
];
});

workshop.controller("ListCtrl", function($scope, People) {
  $scope.orderBy = 'lastName';

  $scope.add = function () {
    $scope.list.push($scope.newPerson);
    $scope.newPerson = {};
  }

  $scope.list = People;
});

// Create serices
workshop.factory("SharedData", function(){
    return {
      value: "Example value"
    };
});

workshop.controller("InputCtrl", function ($scope, SharedData) {
  $scope.sharedData = SharedData;
});

workshop.controller("MenuCtrl", function($scope) {
  $scope.links = [
    {
      url: '#/main',
      text: 'Main'
    },
    {
      url: '#/hello',
      text: 'Hello'
    },
    {
      url: '#/list',
      text: 'List'
    }
  ];
});
