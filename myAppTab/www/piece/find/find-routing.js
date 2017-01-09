angular.module('find.routing', ['ionic', 'find.controllers','find.services'])

.config(function($stateProvider) {

  $stateProvider
  
  .state('tab.find', {
      url: '/find',
      views: {
        'tab-find': {
          templateUrl: 'piece/find/tab-find.html',
          controller: 'ChatsCtrl'
        }
      }
    })
  .state('tab.find-detail', {
    url: '/find/:chatId',
    views: {
      'tab-find': {
        templateUrl: 'piece/find/find-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  })
  
});