var myPage = angular.module('myPage', ['ngRoute']);

myPage.config(function ($routeProvider) {

	$routeProvider

	//**********COVER/LANDING**********
	.when('/', {
		templateUrl: 'pages/cover.html',
		controller: 'coverController'
	})

	//**********ABOUT ME**********
	.when('/about', {
		templateUrl: 'pages/about.html',
		controller: 'aboutController'
	})

});

myPage.controller('coverController', ['$scope', '$log', function($scope, $log) {

	//tested to make sure everything is working properly.
	$scope.greeting = "Hello World!";

}]);

myPage.controller('aboutController', ['$scope', '$log', function($scope, $log) {

	//tested to make sure everything is working properly.
	$scope.greeting = "About Me";

}]);