var app = angular.module('tinoWIT', ['ui.router']);

app.controller('MainCtrl', [
'$scope',
function($scope){
	
}]);

app.controller('AboutUsCtrl', [
'$scope',
function($scope){
	$scope.officers = [
	                   {name: "Sam Pal", position: "Co-President", image: "public/images/sam-pal.jpg", bio: "Hey fellow WIT!!! I'll be your co-president in charge of outreach this year and will do my way to reach out (heh) to provide you with rewarding and empowering experiences in tech. I've been involved in WIT for 2 years, and plan to continue for many more. Admittedly, I'm an avid binge watcher, food enthusiast, and insomniac. Nevertheless, I'm looking forward to a great year and ultimate progress in breaking the glass ceiling and bringing the gender gap in tech!"},
	                   {name: "Anika Bagga", position: "Co-President", image: "public/images/anika-bagga.jpg", bio: ""},
	                   {name: "Pallavi Narayanan", position: "Outreach Director", image: "public/images/pallavi-narayanan.jpg", bio: ""},
	                   {name: "Vicky Min", position: "Outreach Director", image: "public/images/vicky-min.jpg", bio: ""},
	                   {name: "Rucha Patki", position: "Secretary/Treasurer", image: "public/images/rucha-patki.jpg", bio: "Hi, I'm Rucha and I'll be WIT's Secretary and Treasurer this year! I'll be managing the clubs activities and expenses. I've been with this club since its first year, and I love how it encourages more women to be involved in the field of computer science! Outside of this club, my hobbies include springboard and platform diving, robotics, and drawing."},
	                   {name: "Julia Liu", position: "Public Relations", image: "public/images/julia-liu.JPG", bio: "Hullo! My name is Julia Liu and I am a junior this year. As Public Relations, I am responsible for creating designs and promotional material as well as coding this website for Tino WIT. I had a great, refreshing experience being in the club last year and I hope to continue motivating and inspiring club members in computer science for the next two years at Tino. In the rare cases where I have freedom and free time, I like to immerse myself in music, dramas, or a good book. Don't be afraid to approach me and ask me any questions! <strong>(I don't byte.)</strong>"},
	                   {name: "Christina Shao", position: "Student Mentor", image: "public/images/christina-shao.jpg", bio: "I’m a sophomore at Tino and Student Mentor of the Women in Tech club. During club meetings, I help and support members of our club. Motivated by my passion for computer science and love for programming, I hope to spark an interest for computer science in girls and close the gender gap. Outside of school, I enjoy playing basketball and badminton, hiking, volunteering, sketching animals, and reading novels. But most of all, I love having fun, spending time with my friends and family, and helping others."},
	                   {name: "Nithya Attaluri", position: "Student Mentor", image: "public/images/nithya-attaluri.JPG", bio: "Hey! My name is Nithya Attaluri, and I will be one of your Student Mentors for 2016-2017 academic year! With my friend and co-officer Christina Shao, I will be designing the lesson plans for our Introduction to Programming track. If you have any interesting activity ideas, or are just curious about learning a specific topic in computer science, feel free to talk to me! I’d love your input! I love to code, whether the language is Swift, Java, or Python. When I’m not coding, however, I can be seen rereading the Harry Potter novels, listening (read: loudly singing along) to music on Pandora, or eating Trader Joe’s cookie butter out of the jar. Typically, though, I will be doing all three at once. I am also a brown belt in Taekwondo, a form of Korean martial arts.  I’m extremely excited to begin my sophomore year and my Student Mentor position this August! I’m looking forward to meeting all of the new WIT members this year, and I hope you all are able to have as much fun in WIT as I did!"}
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

app.controller('LoginCtrl', [
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
	})
	.state('login', {
		url: '/login',
		templateUrl: '/login.html',
		controller: 'LoginCtrl'
	});

	$urlRouterProvider.otherwise('home');
}]);