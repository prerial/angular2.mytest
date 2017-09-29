/**
 * Created by U160964 on 5/16/2017.
 */
(function() {
    "use strict";

    angular.module('app.uds').component('objectEntries', {
        templateUrl: 'uds/views/objectEntriesView.html',
        controller: 'ObjectEntriesController'

    });
    angular.module('app.uds').controller('ObjectEntriesController', ['$scope', '$location', 'Alerts', 'CommonHttpRequestService', 'ModalService',

          function($scope, $location, alerts, loginService, requestService) {


              debugger;

        }]);

})();
