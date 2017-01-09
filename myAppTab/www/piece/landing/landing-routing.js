angular.module('landing.routing', ['ionic', 'landing.controllers'])

.config(function($stateProvider) {

  $stateProvider
  
  .state('tab.landing', {
    url: '/landing',
    views: {
      'tab-landing': {
        templateUrl: 'piece/landing/tab-landing.html',
        controller: 'landingCtrl'
      }
    }
  });
});