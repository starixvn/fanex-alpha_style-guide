'use strict';

// Test directive is used to demo lazy loading external directive in the test project
angular.module('sgDemoNexDatePicker', [])
      .controller('sgDemoNexDatePicker', function ($scope) {
          $(function () {
              $("#daterange-picker").nexDatePicker({
                  nexDatePickerType: "quickchoose",
                  datePickerFormat: {
                      changeMonth: true,
                      changeYear: true,
                      showOtherMonths: true,
                      dateFormat: "MM/DD/YYYY"
                  },
                  dropDownList:
                  {
                      Id: "dropdown-daterange",
                      Label: "",
                      LabelCss: "",
                      OptionCss: ""
                  },
                  firstDatePicker: {
                      Id: "picker-fromdate",
                      Label: "From",
                      InitDate: new Date("10/25/2016"),
                      LabelCss: ""
                  },
                  secondDatePicker: {
                      Id: "picker-todate",
                      Label: "To",
                      InitDate: new Date("10/25/2016"),
                      LabelCss: ""
                  },
                  selectedItem: 0,
                  onSelectDatePicker: null,
                  minDate: new Date("09/25/2016"),
                  maxDate: new Date("11/25/2016")
              });
          });

      })
      .directive('sgDemoNexDatePicker', function () {
          return {
              replace: true,
              templateUrl: 'views/demoNexDatePicker.html'
          };
      });
