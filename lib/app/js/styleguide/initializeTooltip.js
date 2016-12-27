'use strict';

// Test directive is used to demo lazy loading external directive in the test project
angular.module('sgTooltip', [])
      .controller('sgTooltip', function ($scope) {
          $(function () {
              $('[data-toggle="tooltip"]').tooltip()
          })
      })
      .directive('sgTooltip', function () {
          return {
              replace: true,
              templateUrl: 'views/tooltip.html'
          };
      });

