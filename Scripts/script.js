angular.module('newsModule', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'Templates/home.html',
        controller: 'homeController'
      })
      .when('/news', {
        templateUrl: 'Templates/news.html',
        controller: 'newsController'
      })
      .when('/about', {
        templateUrl: 'Templates/about.html',
        controller: 'aboutController'
      })
  }])
  .controller('homeController', ['$scope', function($scope) {

  }])
  .controller('newsController', ['$scope', '$http', function($scope, $http) {
    
  }])
  .controller('aboutController', ['$scope', function($scope) {

  }]);