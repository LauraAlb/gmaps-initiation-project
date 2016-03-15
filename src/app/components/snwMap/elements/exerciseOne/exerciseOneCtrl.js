(function() {
  'use strict';
  var exerciseOneCtrl = function($scope) {
    function ejercicio1() {
      window.console.log('INICIO EJERCICIO 1');
      var geocoder, infowindow, marker, formatAdress;
      formatAdress = 'formatted_address';
      geocoder = new google.maps.Geocoder();
      infowindow = new google.maps.InfoWindow();
      marker = new google.maps.Marker({
        map: $scope.map,
        position: new google.maps.LatLng(37.3565079, -5.9839408)
      });
      $scope.eventClick = google.maps.event.addListener($scope.map, 'click', function(event) {
        geocoder.geocode({
          'latLng': event.latLng
        }, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            var contentString = 'No formatted address';

            //set the map center to the latlng where the user clicked on map
            $scope.map.setCenter(event.latLng);
            //place the marker the latlng where the user clicked on map
            marker.setPosition(event.latLng);

            //display formatted address in info window when marker is clicked
            if (results.length && results[0][formatAdress]) {
              contentString = results[0][formatAdress];
            }
            infowindow.setContent(contentString);
            infowindow.open($scope.map, marker);
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });
      });
    }

    function onClickTab(tabName) {
      if ($scope.tabActive === tabName) {
        $scope.tabActive = null;
      } else {
        $scope.tabActive = tabName;
      }
    }

    function init() {
      ejercicio1();
    }

    angular.extend($scope, {
      panelVisible: false,
      tabActive: null,
      disabledToggle: {},
      onClickTab: onClickTab
    });

    init();
  };

  angular.module('snwMap.exerciseOne').controller('exerciseOneCtrl', exerciseOneCtrl);
})();
