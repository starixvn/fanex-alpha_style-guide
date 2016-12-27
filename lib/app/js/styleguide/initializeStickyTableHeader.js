'use strict';

// Test directive is used to demo lazy loading external directive in the test project
angular.module('sgStickytableheader', [])
      .controller('sgStickytableheader', function ($scope) {
          $(function () {
              $('#message-data').stickyTableHeaders({ fixedOffset: $('#tabs-message') });
          })
          
      })
      .directive('sgStickytableheader', function () {
          return {
              replace: true,
              templateUrl: 'views/demoStickyTableHeader.html'
          };
      });

