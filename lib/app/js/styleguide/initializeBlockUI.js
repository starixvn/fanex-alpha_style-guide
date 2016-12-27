'use strict';

// Test directive is used to demo lazy loading external directive in the test project
angular.module('sgDemoblockui', [])
      .controller('sgDemoblockui', function ($scope) {
          $('#runBlockUI').click(function () {
              $.blockUI();
              setTimeout($.unblockUI, 2000);
          });
      })
      .directive('sgCustomizeBlockui', function () {
          return {
              replace: true,
              templateUrl: 'views/demoBlockUI.html'
          };
      });

