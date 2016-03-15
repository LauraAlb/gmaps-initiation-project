(function() {
  'use strict';
  angular.module('snwMap')
    .controller('snwMapCtrl',
      function($scope, GoogleMapApi) {
        var libs;
        angular.extend($scope, {
          libsReady: false,
          mapReady: false,
          options: {
            center: {
              lat: 37.385990,
              lng: -5.984243
            },
            zoom: 13
          }
        });

        libs = [].concat();
        GoogleMapApi.then(function() {
          $scope.libsReady = true;
        });
      });
})();

