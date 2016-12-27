'use strict';

// Test directive is used to demo lazy loading external directive in the test project
angular.module('sgFormDatepicker', [])
      .controller('sgFormDatepicker', function ($scope) {
          $(function () {
              $('#dpkContainer1').datetimepicker({
                  allowInputToggle: true,
                  format: 'MM/DD/YYYY'
              });
          });
      })
      .directive('sgFormDatepicker', function () {
          return {
              replace: true,
              templateUrl: 'views/formDatePicker.html'
          };
      });

