'use strict';

// Test directive is used to demo lazy loading external directive in the test project
angular.module('sgMonthpicker', [])
      .controller('sgMonthpicker', function ($scope) {
          $(function () {
              var ddlMonth = $('#ddlMonth');
              ddlMonth.monPickr({
                  maxDate: '12/20/2016',
                  minDate: '09/20/2014',
                  month: new Date('12/01/2016'),

                  fromDay: 1,
                  toDay: 20,

                  showDateRange: true,
                  monthFormat: 'MMM yyyy',
                  fromDayId: 'ddl-fromday',
                  toDayId: 'ddl-today',
                  fromDayLabel: 'From',
                  toDayLabel: 'To',
                  sortDesc: true,
                  log: function (msg) {
                      console.warn(msg);
                  }
              });
          });

      })
      .directive('sgMonthpicker', function () {
          return {
              replace: true,
              templateUrl: 'views/customizeMonthPicker.html'
          };
      });
