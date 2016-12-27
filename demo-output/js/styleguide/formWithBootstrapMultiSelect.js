'use strict';

// Test directive is used to demo lazy loading external directive in the test project
angular.module('sgDemoBootstrapMultiselect', [])
      .controller('sgDemoBootstrapMultiselect', function ($scope) {
          $(function () {
              $('#eventList').multiselect({
                  maxHeight: 300,
                  enableFiltering: true,
                  numberDisplayed: 1,
                  enableCaseInsensitiveFiltering: true,
                  includeSelectAllOption: true
              });

              $('#leagueList').multiselect({
                  maxHeight: 300,
                  enableFiltering: true,
                  numberDisplayed: 1,
                  enableCaseInsensitiveFiltering: true
              });
          });
      })
      .directive('sgDemoBootstrapMultiselect', function () {
          return {
              replace: true,
              templateUrl: 'views/formWithBootstrapMultiSelect.html'
          };
      });

