'use strict';

// Test directive is used to demo lazy loading external directive in the test project
angular.module('sgFormSelect2', [])
      .controller('sgFormSelect2', function ($scope) {
          $(function () {
              $('#sportList').select2();
              $('#leagueList2').select2();
          });
      })
      .directive('sgFormSelect2', function () {
          return {
              replace: true,
              templateUrl: 'views/formWithSelect2.html'
          };
      });

