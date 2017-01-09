angular.module('shopping.routing', ['ionic', 'shopping.controllers'])

.config(function($stateProvider) {

  $stateProvider
  
  .state('tab.shopping', {
    url: '/shopping',
    views: {
      'tab-shopping': {
        templateUrl: 'piece/shopping/tab-shopping.html',
        controller: 'AccountCtrl'
      }
    }
  });
});