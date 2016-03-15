(function() {
  'use strict';
  var gmapsService = function() {
    var GmapsService;
    GmapsService = function() {
      this.createMap = function(elem, options, opt) {
        var map;
        window.map = map = new google.maps.Map(elem, {
          center: options.center,
          zoom: options.zoom
        });

        if (opt) {
          map.setOptions(opt);
        }
        return map;
      };

      // Create a createMarker function in service
      this.createMarker = function(map, location) {
        var marker = new google.maps.Marker({
          map: map,
          position: location
        });
        return marker;
      };

      this.updateInfoWindow = function(map, marker, infoW, content) {
        infoW.setContent(content);
        infoW.open(map, marker);
      };
    };
    return new GmapsService();
  };

  angular.module('snwMap').factory('gmapsService', gmapsService);
})();
