angular.module('catApp')
	.factory('apiService', ['$http', function($http){
	return {
		getPets: function(){
			var url = 'http://agl-developer-test.azurewebsites.net/people.json';
			return $http.get(url);
		}
	}
}])