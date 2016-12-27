'use strict';

// Test directive is used to demo lazy loading external directive in the test project
angular.module('sgCheckboxRadio', [])
      .controller('sgCheckboxRadio', function ($scope) {
          $(function () {
              $.material.init();
          })
      })
      .directive('sgCheckboxRadio', function () {
          return {
              replace: true,
              templateUrl: 'views/checkboxradio.html'
          };
      });

