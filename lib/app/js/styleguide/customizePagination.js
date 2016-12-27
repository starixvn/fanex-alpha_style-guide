'use strict';

// Test directive is used to demo lazy loading external directive in the test project
angular.module('sgPagination', [])
      .controller('sgPagination', function ($scope) {
          $(function () {              
              $('#paging').pagination({
                  pageList: [10, 50, 100, 500],
                  total: 1000,
                  pageSize: 50,
                  pageNumber: 3,

                  showRefresh: false,
                  onSelectPage: function (pageNumber, pageSize) {
                  },
                  beforePageText: 'Page',
                  afterPageText: 'of {pages}',
                  displayMsg: "Displaying {from} to {to} of {total} items"
              });

          });

      })
      .directive('sgPagination', function () {
          return {
              replace: true,
              templateUrl: 'views/customizePagination.html'
          };
      });
