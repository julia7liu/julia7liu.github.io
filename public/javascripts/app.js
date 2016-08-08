var app = angular.module('tinoWIT', ['ui.router']);

app.controller('MainCtrl', [
'$scope',
function($scope){
	
}]);

app.controller('AboutUsCtrl', [
'$scope',
function($scope){
	$scope.officers = [
	                   {name: "Sam Par", position: "Co-President", image: "", bio: ""},
	                   {name: "Anika Bagga", position: "Co-President", image: "", bio: ""},
	                   {name: "Pallavi Narayanan", position: "Outreach Director", image: "", bio: ""},
	                   {name: "Vicky Min", position: "Outreach Director", image: "", bio: ""},
	                   {name: "Rucha Patki", position: "Secretary/Treasurer", image: "", bio: ""},
	                   {name: "Julia Liu", position: "Public Relations", image: "", bio: ""},
	                   {name: "Christina Shao", position: "Student Mentor", image: "", bio: ""},
	                   {name: "Nithya Attaluri", position: "Student Mentor", image: "", bio: ""}
	                   ];
}]);

app.controller('TracksCtrl', [
'$scope',
function($scope){
	$scope.template = "/tracks/intro.html";
	$scope.changeView = function(view) {
		if(view == "Intro") {
			$scope.template = "/tracks/intro.html";
		}
		if(view == "Web") {
			$scope.template = "/tracks/web.html";
		}
		if(view == "Mobile") {
			$scope.template = "/tracks/mobile.html";
		}
	}
	$scope.posts = [
	                {name: ""},
	                {name: ""},
	                {name: ""},
	                ];
}]);

app.controller('BlogCtrl', [
'$scope',
function($scope){
	$scope.posts = [
	                ];
}]);

app.controller('ResourcesCtrl', [
'$scope',
function($scope){

}]);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: '/home.html',
		controller: 'MainCtrl'
	})
	.state('aboutus', {
		url: '/aboutus',
		templateUrl: '/aboutus.html',
		controller: 'AboutUsCtrl'
	})
	.state('tracks', {
		url: '/tracks',
		templateUrl: '/tracks.html',
		controller: 'TracksCtrl'
	})
	.state('blog', {
		url: '/blog',
		templateUrl: '/blog.html',
		controller: 'BlogCtrl'
	})
	.state('resources', {
		url: '/resources',
		templateUrl: '/resources.html',
		controller: 'ResourcesCtrl'
	});

	$urlRouterProvider.otherwise('home');
}]);