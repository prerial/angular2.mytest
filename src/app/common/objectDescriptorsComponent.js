/**
 * Created by U160964 on 5/16/2017.
 */
(function() {
    "use strict";

    angular.module('app.uds').component('objectDescriptors', {
        templateUrl: 'uds/views/objectDescriptorsView.html',
        controller: 'ObjectDescriptorsController'

    });
    angular.module('app.uds').controller('ObjectDescriptorsController', ['$scope', '$location', 'Alerts', 'CommonHttpRequestService', 'ModalService',

          function($scope, $location, alerts, loginService, requestService) {


              debugger;

        }]);

})();
