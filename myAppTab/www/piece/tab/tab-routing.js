angular.module('tab.routing', ['ionic', 'tab.controller'])

.config(function($stateProvider) {

  $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'piece/tab/tabs.html'
  });
  
});