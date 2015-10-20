(function () {
  'use strict';

	angular.module('demoApp', ['ui.tree', 'ngRoute', 'datePicker'])

	.config(['$routeProvider', function ($routeProvider) {
	  $routeProvider
		.when('/basic', {
		  controller: 'BasicCtrl',
		  templateUrl: 'app/components/basic/basic-view.html'
		})
		.otherwise({
		  redirectTo: '/basic'
		});
	}]);
})();
