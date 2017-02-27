angular.module('dikeycozumler',[
	'ngRoute'
	]).config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {

        $locationProvider.html5Mode(true).hashPrefix('!');

  		$routeProvider.when('/', {
			templateUrl: 'views/anasayfa.html'
		}).when('/hakkimizda', {
			templateUrl: 'views/hakkimizda.html'
		}).when('/hizmetler', {
			templateUrl: 'views/hizmetler.html'
		}).when('/hizmetler/egitim', {
			templateUrl: 'views/egitim.html'
		}).when('/hizmetler/danismanlik', {
			templateUrl: 'views/danismanlik.html'
		}).when('/hizmetler/montaj', {
			templateUrl: 'views/montaj.html'
		}).when('/hizmetler/endustriyel-temizlik', {
			templateUrl: 'views/endustriyel-temizlik.html'
		}).when('/hizmetler/rigging', {
			templateUrl: 'views/rigging.html'
		}).when('/hizmetler/ruzgar-enerjisi', {
			templateUrl: 'views/ruzgar-enerjisi.html'
		}).when('/blog', {
			templateUrl: 'views/blog.html'
		}).when('/iletisim', {
			templateUrl: 'views/iletisim.html'
		}).when('/404', {
			templateUrl: 'views/404.html'
		}).otherwise({redirectTo: '/404'});
	}])
	.controller('bodyController',[
		'$scope',
		function($scope){
			console.log('bodyController');
		}
	]);