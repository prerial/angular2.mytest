/**
 * Created by U160964 on 5/16/2017.
 */
(function() {
    "use strict";

    angular.module('app.uds').component('asyncFunctions', {
        templateUrl: 'uds/views/asyncFunctionsView.html',
        controller: 'AsyncFunctionsController'

    });
    angular.module('app.uds').controller('AsyncFunctionsController', ['$scope', '$location', 'Alerts', 'CommonHttpRequestService', 'ModalService',

          function($scope, $location, alerts, loginService, requestService) {

              function fetchJson(url) {
                  return fetch(url)
                        .then(request => request.text())
                        .then(text => {
                              return JSON.parse(text);
                        }).catch(error => {
                              console.log(`ERROR: ${error.stack}`);
                        })
              }
//authentications
//http://example.com/some_file.json
              async function fetchJson(url) {
                  try {
                      let request = await fetch(url);
                      return await request.json();

//                      let text = await request.text();
//                      return JSON.parse(text);
                  }
                  catch (error) {
                      console.log(`ERROR: ${error.stack}`);
                  }
              }
              fetchJson('data/authentications.json')
                  .then(obj => console.log(obj));

              debugger;

        }]);

})();
