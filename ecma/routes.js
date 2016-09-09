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
	//**********INFO ABOUT ME**********
	.when('/aboutMe', {
		templateUrl: 'pages/aboutMe.html',
		controller: 'aboutMeController'
	})
});