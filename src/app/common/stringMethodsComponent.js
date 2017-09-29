/**
 * Created by U160964 on 5/16/2017.
 */
(function() {
    "use strict";

    angular.module('app.uds').component('stringMethods', {
        templateUrl: 'uds/views/stringMethodsView.html',
        controller: 'StringMethodsController'

    });
    angular.module('app.uds').controller('StringMethodsController', ['$scope', '$location', 'Alerts', 'CommonHttpRequestService', 'ModalService',

          function($scope, $location, alerts, loginService, requestService) {


              debugger;

        }]);

})();
