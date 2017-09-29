/**
 * Created by U160964 on 5/16/2017.
 */
(function() {
    "use strict";

    angular.module('app.uds').component('trailingCommas', {
        templateUrl: 'uds/views/trailingCommasView.html',
        controller: 'TrailingCommasController'

    });
    angular.module('app.uds').controller('TrailingCommasController', ['$scope', '$location', 'Alerts', 'CommonHttpRequestService', 'ModalService',

          function($scope, $location, alerts, loginService, requestService) {


              debugger;

        }]);

})();
