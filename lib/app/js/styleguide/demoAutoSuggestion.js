'use strict';

// Test directive is used to demo lazy loading external directive in the test project
angular.module('sgAutosuggestion', [])
      .controller('sgAutosuggestion', function ($scope) {
          $(function () {
              var username = $('#txtUsername')[0];
              initAutoComplete(username, '');
          });
      })
      .directive('sgAutosuggestion', function () {
          return {
              replace: true,
              templateUrl: 'views/demoAutosuggestion.html'
          };
      });

