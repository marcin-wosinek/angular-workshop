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
      templateUrl: 'views/main.html'
    })
    .otherwise({
      redirectTo: '/main'
    });
});

workshop.controller("HelloCtrl", function($scope) {
  $scope.helloMessage = "Hello world";
});

workshop.controller("ListCtrl", function($scope) {
  // TODO set up default value of orderKey
  // checkout http://www.json-generator.com/
  $scope.list = [
        {
            "firstName": "Serenity",
            "lastName": "Oldridge",
            "picture": "http://placehold.it/70x70/632955",
            "age": 25,
            "gender": "female"
        },
        {
            "firstName": "Zoe",
            "lastName": "White",
            "picture": "http://placehold.it/70x70/897900",
            "age": 24,
            "gender": "male"
        },
        {
            "firstName": "Samantha",
            "lastName": "Clapton",
            "picture": "http://placehold.it/70x70/270817",
            "age": 33,
            "gender": "male"
        },
        {
            "firstName": "Nevaeh",
            "lastName": "Goldman",
            "picture": "http://placehold.it/70x70/447622",
            "age": 44,
            "gender": "male"
        },
        {
            "firstName": "Kaylee",
            "lastName": "Calhoun",
            "picture": "http://placehold.it/70x70/812371",
            "age": 28,
            "gender": "male"
        },
        {
            "firstName": "Zoey",
            "lastName": "Crossman",
            "picture": "http://placehold.it/70x70/952397",
            "age": 51,
            "gender": "male"
        },
        {
            "firstName": "Caroline",
            "lastName": "Adamson",
            "picture": "http://placehold.it/70x70/259736",
            "age": 18,
            "gender": "female"
        },
        {
            "firstName": "Ava",
            "lastName": "Waller",
            "picture": "http://placehold.it/70x70/594799",
            "age": 21,
            "gender": "female"
        },
        {
            "firstName": "Emily",
            "lastName": "Webster",
            "picture": "http://placehold.it/70x70/155609",
            "age": 18,
            "gender": "female"
        },
        {
            "firstName": "Ariana",
            "lastName": "Gilmore",
            "picture": "http://placehold.it/70x70/648788",
            "age": 55,
            "gender": "female"
        },
        {
            "firstName": "Layla",
            "lastName": "Charlson",
            "picture": "http://placehold.it/70x70/471531",
            "age": 25,
            "gender": "male"
        },
        {
            "firstName": "Katherine",
            "lastName": "Fisher",
            "picture": "http://placehold.it/70x70/231807",
            "age": 22,
            "gender": "male"
        },
        {
            "firstName": "Melanie",
            "lastName": "Timmons",
            "picture": "http://placehold.it/70x70/110096",
            "age": 45,
            "gender": "female"
        },
        {
            "firstName": "Alexandra",
            "lastName": "Higgins",
            "picture": "http://placehold.it/70x70/760624",
            "age": 23,
            "gender": "female"
        },
        {
            "firstName": "Elizabeth",
            "lastName": "Fulton",
            "picture": "http://placehold.it/70x70/165711",
            "age": 24,
            "gender": "female"
        },
        {
            "firstName": "Riley",
            "lastName": "Brooks",
            "picture": "http://placehold.it/70x70/268024",
            "age": 36,
            "gender": "female"
        },
        {
            "firstName": "Mya",
            "lastName": "Thomson",
            "picture": "http://placehold.it/70x70/730700",
            "age": 50,
            "gender": "male"
        },
        {
            "firstName": "Leah",
            "lastName": "Timmons",
            "picture": "http://placehold.it/70x70/679909",
            "age": 44,
            "gender": "male"
        },
        {
            "firstName": "Kylie",
            "lastName": "Wainwright",
            "picture": "http://placehold.it/70x70/845271",
            "age": 34,
            "gender": "female"
        },
        {
            "firstName": "Gabriella",
            "lastName": "Hancock",
            "picture": "http://placehold.it/70x70/218164",
            "age": 22,
            "gender": "female"
        },
        {
            "firstName": "Gabriella",
            "lastName": "Cook",
            "picture": "http://placehold.it/70x70/603116",
            "age": 44,
            "gender": "female"
        },
        {
            "firstName": "Khloe",
            "lastName": "Brickman",
            "picture": "http://placehold.it/70x70/371542",
            "age": 47,
            "gender": "female"
        },
        {
            "firstName": "Avery",
            "lastName": "Carrington",
            "picture": "http://placehold.it/70x70/307145",
            "age": 39,
            "gender": "female"
        },
        {
            "firstName": "Peyton",
            "lastName": "Webster",
            "picture": "http://placehold.it/70x70/224252",
            "age": 35,
            "gender": "female"
        },
        {
            "firstName": "Destiny",
            "lastName": "Warren",
            "picture": "http://placehold.it/70x70/796232",
            "age": 44,
            "gender": "female"
        }
    ];
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
