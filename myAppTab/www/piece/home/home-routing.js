angular.module('home.routing', ['ionic', 'home.controller'])

.config(function($stateProvider) {

  $stateProvider
  
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'piece/home/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  
});