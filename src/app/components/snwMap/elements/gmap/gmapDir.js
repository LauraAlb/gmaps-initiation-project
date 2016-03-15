(function() {
  'use strict';
  var ddo = function(gmapsService, $window) {
    return {
      link: function(scope, elem) {
        var center, mapOpt = {
          panControl: false,
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          overviewMapControl: false
        };

        function resizeMap() {
          center = scope.map.getCenter();
          google.maps.event.trigger(scope.map, 'resize');
          scope.map.setCenter(center);
        }

        function resizeMapHandler() {
          $window.onresize = resizeMap;
        }

        function init() {
          resizeMapHandler();
        }

        angular.extend(scope, {
          mapReady: true,
          map: gmapsService.createMap(elem[0], scope.options, mapOpt)
        });

        init();
      },
      replace: true,
      template: '<div class="snw-map"></div>'
    };
  };

  angular.module('snwMap.gmap')
    .directive('gmap', ddo);
})();

