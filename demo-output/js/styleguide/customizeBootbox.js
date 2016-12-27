'use strict';

// Test directive is used to demo lazy loading external directive in the test project
angular.module('sgPopupConfirm', [])
      .controller('sgPopupConfirm', function ($scope) {
          $(function () {             

              var demos = {
                  alert: function () {
                      bootbox.alert("Hello world!");
                  },
                  confirm: function () {
                      bootbox.confirm("Are you sure?", function (result) {
                          Example.show("Confirm result: " + result);
                      });
                  }
              };

              $(document).on("click", "button[data-bb]", function (e) {
                  e.preventDefault();
                  var type = $(this).data("bb");

                  if (typeof demos[type] === 'function') {
                      demos[type]();
                  }

                  var dialog = $(".modal-dialog");
                  dialog.css({
                      left: $(window).width() / 2 - 100,
                      top: 100
                  });
              });
              
              var Example = (function () {
                  "use strict";
                  var that = {
                      elem: null,
                      closeTimeOut: null,
                      init: function (options) {
                          that.elem = $(options.selector);
                      },
                      show: function (text) {
                          clearTimeout(that.closeTimeOut);

                          that.elem.find("span").html(text);
                          that.elem.fadeIn();

                          that.closeTimeOut = setTimeout(function () {
                              that.hide();
                          }, 4000);
                      },
                      hide: function () {
                          that.elem.fadeOut();
                      }
                  };

                  return that;
              }());

              Example.init({
                  "selector": ".bb-alert"
              });

          });

          
      })
      .directive('sgPopupConfirm', function () {
          return {
              replace: true,
              templateUrl: 'views/customizeBootbox.html'
          };
      });
