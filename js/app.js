var app = angular.module("myApp", []);

app.controller('firstCtrl', function($scope, $http) {
	$scope.myName = 'Jet';
//take in user input and feed to my api call
	$scope.searchApi= function(search) {
	
		//ny times api
		$http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + search + '&api-key=c2bf515d46f3478ab0c62810e26b19ce').then(function(success){

		//console.log(success.data.response.docs);
		//store array of objects in my scope variable
		$scope.articles = success.data.response.docs

		});
	};
});



//$scope.searchApi= function(x) {
//console.log(x);
//}

//change name function
	// $scope.logChanges= function(x) {
	// 	console.log(x);
	// };

	// $scope.nameArr = ['brian', 'nick', 'sam', 'matt'];


	// 	var brian = {
	// 		location: "SF",
	// 		age: 2
	// 	}
	// 	var nick = {
	// 		location: "Oakland",
	// 		age: 1
	// 	}
	// 	var sam = {
	// 		location: "SF",
	// 		age: 3
	// 	}
	// 	var matt = {
	// 		location: "bay",
	// 		age:5
	// 	}

	// $scope.objArr = [brian, nick, sam, matt];

	
	