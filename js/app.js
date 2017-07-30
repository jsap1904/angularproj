var app = angular.module("myApp", []);

app.controller('firstCtrl', function($scope) {
	$scope.myName = 'Jet';
	console.log($scope.myName);
});