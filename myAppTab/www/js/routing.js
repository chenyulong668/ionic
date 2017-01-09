angular.module('routing', ['home.routing','minute.routing','sidenav.routing','detail.routing','find.routing','shopping.routing','tab.routing','landing.routing'])

.config(function($urlRouterProvider) {
	
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');
  
});