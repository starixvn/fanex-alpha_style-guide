'use strict';

// Test directive is used to demo lazy loading external directive in the test project
angular.module('sgPagination3', [])
      .controller('sgPagination3', function ($scope) {
          $(function () {              
              $('#paging3').pagination({
                  pageList: [10, 50, 100, 500],
                  total: 1000,
                  pageSize: 50,
                  pageNumber: 3,

                  showRefresh: false,
                  onSelectPage: function (pageNumber, pageSize) {
                  },
                  beforePageText: 'Page',
                  afterPageText: 'of {pages}',
                  displayMsg: ""
              });

          });

      })
      .directive('sgPagination3', function () {
          return {
              replace: true,
              templateUrl: 'views/customizePagination3.html'
          };
      });
