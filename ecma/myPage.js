var myPage = angular.module('myPage', []);

myPage.controller('mainController', ['$scope', '$log', function($scope, $log) {

	$scope.greeting = "Hello World!";

}]);