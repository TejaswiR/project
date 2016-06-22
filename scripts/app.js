var angularApp = angular.module('Task-App',['ngResource','ngRoute'])

angularApp.config(function($routeProvider) {
$routeProvider

.when ('/',
  {
    templateUrl: 'pages/basic.html',
    controller: 'MainController'
  })

});