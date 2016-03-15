(function() {
  'use strict';
  angular.module('snwMap')
    .controller('snwMapCtrl',
      function($scope, GoogleMapApi) {
        var libs, updateTabActive;
        updateTabActive = function(tabName) {
          $scope.tabActive = ($scope.tabActive === tabName) ? null : tabName;
        };
        angular.extend($scope, {
          libsReady: false,
          mapReady: false,
          options: {
            center: {
              lat: 37.385990,
              lng: -5.984243
            },
            zoom: 13
          },
          tabActive: 'exerciseOne',
          onClickTab: updateTabActive
        });

        libs = [].concat();
        GoogleMapApi.then(function() {
          $scope.libsReady = true;
        });
      });
})();

