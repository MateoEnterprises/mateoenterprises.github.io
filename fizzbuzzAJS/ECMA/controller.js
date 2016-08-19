var app = angular.module("fizzBuzz");

app.controller("Fizzer", function ($scope) {
  
  $scope.test = "testing"
  $scope.runFizz = function () {
    $scope.fizzbuzz = []
    for (var i = $scope.start; i <= $scope.end; i++) {
      if (i % 3 === 0 ) {
        if (i % 5 === 0) {
           $scope.fizzbuzz.push("fizzbuzz");
         } 
        else {$scope.fizzbuzz.push("fizz");}
      }
      else if(i % 5 === 0) {
        $scope.fizzbuzz.push("buzz");
      } 
      else { $scope.fizzbuzz.push(i);}
    }
    //alert($scope.fizzbuzz);
    $scope.start = "";
    $scope.end = "";
    $scope.stringedFizz = $scope.fizzbuzz.join(' ')
  }  
})