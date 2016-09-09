var myPage = angular.module('myPage', ['ngRoute']);

myPage.controller('coverController', ['$scope', '$log', function($scope, $log) {

	//tested to make sure everything is working properly.
	$scope.greeting = "Hello World!";

}]);

myPage.controller('aboutController', ['$scope', '$log', function($scope, $log) {

	//tested to make sure everything is working properly.
	$scope.greeting = "About Me";

}]);

myPage.controller('aboutMeController', ['$scope', '$log', function($scope, $log) {

	//tested to make sure everythign is working properly.
	$scope.greeting = "Welcome to the new me!";
}])