const myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngAria', 'ngMessages', 'ngAnimate']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: '/views/templates/home.html',
    controller: 'HomeController as vm',
  })
  .when('/new', {
    templateUrl: '/views/templates/new.html',
    controller: 'NewController as vm',
  })
  .otherwise({
    template: '<h1>404</h1>'
  });

}]);