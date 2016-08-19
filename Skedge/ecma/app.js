var app = angular.module('devmtnApp', []);

app.controller('devCont', function ($scope, fourSquareAPI) {
  
  $scope.test = function (value) {
    console.log(value);
    if (value === 'true') {
    $scope.boolval = true;
    }
    else {$scope.boolval = false;}
    console.log(typeof $scope.value)
  };
  
  
//  *****GeoLocation*****
  $scope.getLocation = function () {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $scope.latitude = position.coords.latitude;
      $scope.longitutde = position.coords.longitude;
      $scope.location = "&ll=" + $scope.latitude + "," + $scope.longitutde;
      console.log($scope.location);
    });
  }
  else {alert('geolcoation not available')}
}
  
//  *****Require Element*****
  $scope.requiring = function () {
    $scope.required = 'required';
  };
  
//  *****Gets data from FourSquare*****
  $scope.queryFourSquare = function () {
    fourSquareAPI.explore($scope.location, $scope.distance, $scope.price)
    .then(function(response){
      $scope.establishments = response; //this is an array of data
//      var randomNumber = ;
      $scope.randomEstablishment = $scope.establishments[Math.floor(Math.random() * ($scope.establishments.length))];
    })
    
    if ($scope.value) {
      fourSquareAPI.activity($scope.location, $scope.distance, $scope.activity)
      .then(function(response){
      $scope.activities = response; //this is an array of data
      $scope.randomActivity = $scope.activities[Math.floor(Math.random() * ($scope.activities.length))];
      console.log($scope.randomActivity.name)
      })
    }
  }
  
});

/*
 * Youtube video auto-resizer script
 * Created by Skipser.com
*/
 
$(document).ready(function() {
  if(typeof YOUTUBE_VIDEO_MARGIN == 'undefined') {
    YOUTUBE_VIDEO_MARGIN=5;
  }
  $('iframe').each(function(index,item) {
    if($(item).attr('src').match(/(https?:)?\/\/www\.youtube\.com/)) {
      var w=$(item).attr('width');
      var h=$(item).attr('height');
      var ar = h/w*100;
      ar=ar.toFixed(2);
      //Style iframe    
      $(item).css('position','absolute');
      $(item).css('top','0');
      $(item).css('left','0');    
      $(item).css('width','100%');
      $(item).css('height','100%');
      $(item).css('max-width',w+'px');
      $(item).css('max-height', h+'px');        
      $(item).wrap('<div style="max-width:'+w+'px;margin:0 auto; padding:'+YOUTUBE_VIDEO_MARGIN+'px;" />');
      $(item).wrap('<div style="position: relative;padding-bottom: '+ar+'%; height: 0; overflow: hidden;" />');
    }
  });
});