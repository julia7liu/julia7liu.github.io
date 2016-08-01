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
	                {title: "First Day Of School", image: "public/images/back-to-school.jpeg", published: "August 15, 2016", content: "The beginning of summer break seemed like it was just yesterday; students are immediately swept into the incoming workload and stress of the new school year at Cupertino High School. However, back to school means Tino WIT is up and running once again! Stay tuned for more announcements regarding Clubs Day and our first club meeting.", time: ""}
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