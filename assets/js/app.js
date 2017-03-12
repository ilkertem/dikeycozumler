angular.module('dikeycozumler',[
	'ngRoute'
	]).config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {

        $locationProvider.html5Mode(true).hashPrefix('!');

  		$routeProvider.when('/', {
			templateUrl: 'views/anasayfa.html?v20170312'
		}).when('/hakkimizda', {
			templateUrl: 'views/hakkimizda.html?v20170312'
		}).when('/hizmetler', {
			templateUrl: 'views/hizmetler.html?v20170312'
		}).when('/hizmetler/egitim', {
			templateUrl: 'views/egitim.html?v20170312'
		}).when('/hizmetler/danismanlik', {
			templateUrl: 'views/danismanlik.html?v20170312'
		}).when('/hizmetler/montaj', {
			templateUrl: 'views/montaj.html?v20170312'
		}).when('/hizmetler/endustriyel-temizlik', {
			templateUrl: 'views/endustriyel-temizlik.html?v20170312'
		}).when('/hizmetler/yasam-hatti', {
			templateUrl: 'views/yasam-hatti.html?v20170312'
		}).when('/hizmetler/ruzgar-enerjisi', {
			templateUrl: 'views/ruzgar-enerjisi.html?v20170312'
		}).when('/iletisim', {
			templateUrl: 'views/iletisim.html?v20170312'
		}).when('/404', {
			templateUrl: 'views/404.html?v20170312'
		}).otherwise({redirectTo: '/404'});
	}])
	.controller('bodyController',[
		'$scope',
		'$location',
		function($scope,$location){
			console.log('bodyController');
			$scope.slide='slide1';

			$scope.openPage=function(url){
				$location.url(url);
			}

			$scope.changeSlide=function(act){
				console.log(act);
				switch(act){
					case 'next':
						if($scope.slide=='slide1'){
							$scope.slide='slide2'; 
							$scope.slideTextPosition='-95%';
						}else if($scope.slide=='slide2'){
							$scope.slide='slide3'; 
							$scope.slideTextPosition='-190%';
						}else if($scope.slide=='slide3'){
							$scope.slide='slide4'; 
							$scope.slideTextPosition='-285%';
						}else if($scope.slide=='slide4'){
							$scope.slide='slide5'; 
							$scope.slideTextPosition='-380%';
						}
						break;
					case 'prev':
						if($scope.slide=='slide2'){
							$scope.slide='slide1'; 
							$scope.slideTextPosition='0px';
						}else if($scope.slide=='slide3'){
							$scope.slide='slide2'; 
							$scope.slideTextPosition='-95%';
						}else if($scope.slide=='slide4'){
							$scope.slide='slide3'; 
							$scope.slideTextPosition='-190%';
						}else if($scope.slide=='slide5'){
							$scope.slide='slide4'; 
							$scope.slideTextPosition='-285%';
						}
						break;
					default:
						$scope.slide=act;
				}
			}
		}
	]);