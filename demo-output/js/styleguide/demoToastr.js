'use strict';

// Test directive is used to demo lazy loading external directive in the test project
angular.module('sgDemoToastr', [])
      .controller('sgDemoToastr', function ($scope) {
          $(function () {
              $("#show-success-msg").on("click", function () {
                  toastr.options.positionClass = 'toast-bottom-left';
                  toastr.options.timeOut = 200000;
                  toastr.success('Success Message');
              });

              $("#show-info-msg").on("click", function () {
                  toastr.options.positionClass = 'toast-bottom-left';
                  toastr.options.timeOut = 200000;
                  toastr.info('Info Message');
              });

              $("#show-warning-msg").on("click", function () {
                  toastr.options.positionClass = 'toast-bottom-left';
                  toastr.options.timeOut = 200000;
                  toastr.warning('Warning Message');
              });

              $("#show-error-msg").on("click", function () {
                  toastr.options.positionClass = 'toast-bottom-left';
                  toastr.options.timeOut = 200000;
                  toastr.error('Error Message');
              });

          });

      })
      .directive('sgDemoToastr', function () {
          return {
              replace: true,
              templateUrl: 'views/demoToastr.html'
          };
      });
