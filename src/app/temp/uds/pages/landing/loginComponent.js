/**
 * Created by U160964 on 5/16/2017.
 */
(function() {
    "use strict";

    angular.module('app.uds').component('loginSplash', {
        templateUrl: 'uds/views/loginAdminView.html',
        controller: 'LoginController'

    });
    angular.module('app.uds').controller('LoginController', ['$scope', '$location', 'Alerts', 'LoginService',

          function($scope, $location, alerts, loginService) {

              $scope.formSubmit = function() {
                  if(loginService.login($scope.username, $scope.password)) {
                      $scope.error = '';
                      $scope.username = '';
                      $scope.password = '';
                      $location.url('/sourceTypes');
                  } else {
                      $scope.error = "Incorrect username/password !";
                  }
              };
        }]);

})();
