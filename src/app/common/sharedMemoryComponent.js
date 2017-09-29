/**
 * Created by U160964 on 5/16/2017.
 */
(function() {
    "use strict";

    angular.module('app.uds').component('sharedMemory', {
        templateUrl: 'uds/views/sharedMemoryView.html',
        controller: 'SharedMemoryController'

    });
    angular.module('app.uds').controller('SharedMemoryController', ['$scope', '$location', 'Alerts', 'CommonHttpRequestService', 'ModalService',

          function($scope, $location, alerts, loginService, requestService) {


              debugger;

        }]);

})();
