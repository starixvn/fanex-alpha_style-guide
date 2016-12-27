'use strict';

// Test directive is used to demo lazy loading external directive in the test project
angular.module('sgDemoNexDatePicker', [])
      .controller('sgDemoNexDatePicker', function ($scope) {
          $(function () {
              $("#daterange-picker").nexDatePicker({
                  datePickerFormat: {
                      dateFormat: "MM/DD/YYYY"
                  },
                  selectedItem: 0,
                  minDate: new Date("09/25/2016"),
                  maxDate: new Date("11/25/2017"),
                  currentDate: new Date("2/25/2017")
              });
          });

      })
      .directive('sgDemoNexDatePicker', function () {
          return {
              replace: true,
              templateUrl: 'views/demoNexDatePicker.html'
          };
      });
