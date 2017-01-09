angular.module('detail.routing', ['ionic', 'detail.controller','detail.services'])

.config(function($stateProvider) {

  $stateProvider
  .state('detail',{
    url: '/detail/:id',
    // abstract: true,
    templateUrl: 'piece/minute/sidenav/sidenav-detail/sidenav-detail.html',
    controller: 'detailCtrl'
  });
  
});