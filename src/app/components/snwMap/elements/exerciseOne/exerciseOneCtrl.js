(function() {
  'use strict';
  var exerciseOneCtrl = function($scope, gmapsService) {
    function init() {
      var geocoder, infowindow, formatAdress;
      formatAdress = 'formatted_address';
      geocoder = new google.maps.Geocoder();
      infowindow = new google.maps.InfoWindow();
      $scope.marker = gmapsService.createMarker($scope.map, $scope.map.getCenter());
      $scope.eventClick = google.maps.event.addListener($scope.map, 'click', function(event) {
        geocoder.geocode({
          'latLng': event.latLng
        }, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            var contentString = 'No formatted address';
            //set the map center to the latlng where the user clicked on map
            $scope.map.setCenter(event.latLng);
            //place the marker the latlng where the user clicked on map
            $scope.marker.setPosition(event.latLng);

            //display formatted address in info window when marker is clicked
            if (results.length && results[0][formatAdress]) {
              contentString = results[0][formatAdress];
            }
            gmapsService.updateInfoWindow($scope.map, $scope.marker, infowindow, contentString);
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });
      });
    }

    init();
    $scope.$on('$destroy', function() {
      google.maps.event.removeListener($scope.eventClick);
    });
  };

  angular.module('snwMap.exerciseOne').controller('exerciseOneCtrl', exerciseOneCtrl);
})();
