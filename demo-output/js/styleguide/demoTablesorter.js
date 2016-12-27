'use strict';

// Test directive is used to demo lazy loading external directive in the test project
angular.module('sgTablesorter', [])
      .controller('sgTablesorter', function ($scope) {
          $(function () {
              $("#myTable").tablesorter();
          });
      })
      .directive('sgTablesorter', function () {
          return {
              replace: true,
              templateUrl: 'views/demoTablesorter.html'
          };
      });

