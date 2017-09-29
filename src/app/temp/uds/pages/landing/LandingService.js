(function(){ 
	"use strict";
	
	angular.module('app.uds').factory('LandingService', ['$q', '$http', 'Urls', function($q, $http, Urls) {
		
		return {
			addNewEntity: addNewEntity
		};
		function httpPost(url, request){
			var deferred = $q.defer();
			$http.post(url, request)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (msg) {
				deferred.reject(msg);
			});
			return deferred.promise;
		}
		function httpGet(url){
			var deferred = $q.defer();
			$http.get(url)
			.then(function (data) {
				deferred.resolve(data);
			})
			.catch(function (msg) {
				deferred.reject(msg);
			});
			return deferred.promise;
		}
        function addNewEntity(data){
			return httpGet(Urls[data.modalType], data);
//			return httpPost(Urls[data.modalType], data);
        }
	}]);
})();
