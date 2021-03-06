angular.module('fireblog-admin', [
  'firebase',
  'ngRoute',
  'btford.markdown',
  'fireblog.services', 
  'fireblog.controllers',
  'fireblog.directives'
]).

config(function($routeProvider) {
  $routeProvider.
  when('/', {
    authRequired: true,
    controller: 'WriteController',
    templateUrl: '/lib/partials/write.html'
  }).
  when('/login', {
    controller: 'LoginController',
    templateUrl: '/lib/partials/login.html'
  }).
  otherwise({
    redirectTo: '/'
  });
});


