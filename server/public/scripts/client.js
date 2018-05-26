var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngAria', 'ngMessages', 'ngAnimate']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: '/views/templates/home.html',
    controller: 'LoginController as vm',
  })
  .when('/add', {
    templateUrl: '/views/templates/add.html',
    controller: 'AddController as vm',
  })
  .otherwise({
    template: '<h1>404</h1>'
  });

}]);