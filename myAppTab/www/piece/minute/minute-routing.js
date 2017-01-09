angular.module('minute.routing', ['ionic', 'minute.controller'])

.config(function($stateProvider) {

  $stateProvider
  
  .state('tab.minute', {
    url: '/minute',
    views: {
      'tab-minute': {
        templateUrl: 'piece/minute/tab-minute.html',
        controller: 'DashCtrl'
      }
    }
  })
  
});