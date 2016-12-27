'use strict';

// Test directive is used to demo lazy loading external directive in the test project
angular.module('sgLoginPage', [])
      .controller('sgLoginPage', function ($scope) {
          $(function () {
              $.material.init();
          })
      })
      .directive('sgLoginPage', function () {
          return {
              replace: true,
              templateUrl: 'views/login.html'
          };
      });

