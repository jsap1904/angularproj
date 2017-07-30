var app = angular.module("myApp", []);

app.controller('firstCtrl', function($scope) {
	$scope.myName = 'Jet';

	console.log($scope.myName);

//change name function
	$scope.logChanges= function(x) {
		console.log(x);
	};

	$scope.nameArr = ['brian', 'nick', 'sam', 'matt'];
	
	$scope.dogs = ['frenchie', 'corgie', 'rot', 'pit'];

});