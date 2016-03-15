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
    };
    return new GmapsService();
  };

  angular.module('snwMap').factory('gmapsService', gmapsService);
})();

