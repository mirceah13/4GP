(function(){
	'use strict';

	angular.module('4GPApp',['ngMaterial'])
		.config(function($mdThemingProvider, $mdIconProvider) {
  		$mdThemingProvider.theme('default')
    	.primaryPalette('red')
    	.accentPalette('orange');
    	$mdIconProvider
      	.icon('share-arrow', 'img/icons/share-arrow.svg', 24);})
      	.controller('MainController', ['$scope', '$http', function($scope, $http, $mdBottomSheet){
			$scope.showGridBottomSheet = function($event) {
		    $scope.alert = '';
		    $mdBottomSheet.show({
		      templateUrl: 'bottom-sheet-grid-template.html',
		      controller: 'GridBottomSheetCtrl',
		      targetEvent: $event
		    }).then(function(clickedItem) {
		      $scope.alert = clickedItem.name + ' clicked!';
		    });
		  };
			
		}])
})();