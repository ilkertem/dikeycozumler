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
		}).when('/hizmetler/yasam-hatti', {
			templateUrl: 'views/yasam-hatti.html'
		}).when('/hizmetler/ruzgar-enerjisi', {
			templateUrl: 'views/ruzgar-enerjisi.html'
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
			$scope.slide='slide1';

			$scope.changeSlide=function(act){
				console.log(act);
				switch(act){
					case 'next':
						if($scope.slide=='slide1') $scope.slide='slide2'; $scope.slideTextPosition='-100%';
						if($scope.slide=='slide2') $scope.slide='slide3'; $scope.slideTextPosition='-200%';
						break;
					case 'prev':
						if($scope.slide=='slide2') $scope.slide='slide1'; $scope.slideTextPosition='0px';
						if($scope.slide=='slide3') $scope.slide='slide2'; $scope.slideTextPosition='-100%';
						break;
					default:
						$scope.slide=act;
				}
			}
		}
	]);