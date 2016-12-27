'use strict';

// Test directive is used to demo lazy loading external directive in the test project
angular.module('sgPagination2', [])
      .controller('sgPagination2', function ($scope) {
          $(function () {              
              $('#paging2').pagination({
                  showPageList: false,
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
      .directive('sgPagination2', function () {
          return {
              replace: true,
              templateUrl: 'views/customizePagination2.html'
          };
      });
