(function(){
    "use strict";

    angular.module('app.uds').factory('LoginService', function() {
        var admin = 'admin';
        var pass = 'pass';
        var isAuthenticated = false;

        return {
            login : function(username, password) {
                isAuthenticated = username === admin && password === pass;
                return isAuthenticated;
            },
            isAuthenticated : function() {
                return isAuthenticated;
            }
        };

    });

})();
