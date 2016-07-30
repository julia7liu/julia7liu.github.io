var app = angular.module('tinoWIT', ['ui.router']);

app.controller('MainCtrl', [
'$scope',
function($scope){
	$scope.posts = [
	                {title: 'post 1', upvotes: 5},
	                {title: 'post 2', upvotes: 2},
	                {title: 'post 3', upvotes: 15},
	                {title: 'post 4', upvotes: 9},
	                {title: 'post 5', upvotes: 4}
	                ];
}]);

app.controller('AboutUsCtrl', [
'$scope',
function($scope){

}]);

app.controller('EventsCtrl', [
'$scope',
function($scope){

}]);

app.controller('TracksCtrl', [
'$scope',
function($scope){

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
	.state('events', {
		url: '/events',
		templateUrl: '/events.html',
		controller: 'EventsCtrl'
	})
	.state('tracks', {
		url: '/tracks',
		templateUrl: '/tracks.html',
		controller: 'TracksCtrl'
	})
	.state('resources', {
		url: '/resources',
		templateUrl: '/resources.html',
		controller: 'ResourcesCtrl'
	});

	$urlRouterProvider.otherwise('home');
}]);