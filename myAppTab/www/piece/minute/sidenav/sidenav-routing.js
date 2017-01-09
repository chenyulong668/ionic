angular.module('sidenav.routing', ['ionic', 'sidenav.controller','sidenav.services'])

.config(function($stateProvider) {

  $stateProvider
  .state('sidenav',{
    url: '/sidenav/:id',
    // abstract: true,
    templateUrl: 'piece/minute/sidenav/sidenav.html',
    controller: 'SidenavCtrl'
  });
  
});