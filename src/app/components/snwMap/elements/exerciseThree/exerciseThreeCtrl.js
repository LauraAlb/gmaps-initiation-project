(function() {
  'use strict';
  var exerciseThreeCtrl = function($scope, gmapsService) {
    var geocoder,
        bounds = new google.maps.LatLngBounds(),
        markersArray = [],
       service,
       destinationIcon = 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=D|FF0000|000000',
       originIcon = 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=O|FFFF00|000000';

    function init() {
      geocoder = new google.maps.Geocoder();
      //create Distance Matrix object here
      service = new google.maps.DistanceMatrixService();
    }

    init();

    function addMarker(location, isDestination) {
      var marker, icon = (isDestination) ? destinationIcon : originIcon;
      geocoder.geocode({
        'address': location
      }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          bounds.extend(results[0].geometry.location);
          $scope.map.fitBounds(bounds);
          marker = gmapsService.createMarker($scope.map, results[0].geometry.location, icon);
          markersArray.push(marker);
        } else {
          window.console.log('Geocode was not successful for the following reason: ' + status);
        }
      });
    }
    function deleteOverlays() {
      for (var i = 0; i < markersArray.length; i++) {
        markersArray[i].setMap(null);
      }
      markersArray = [];
    }

    function callback(response, status) {
      var i, from, $outputDiv, element, str, k;
      deleteOverlays();
      if (status !== google.maps.DistanceMatrixStatus.OK) {
        window.console.log('Error was: ' + status);
      } else {
        $outputDiv = document.getElementById('outputDiv');
        // for each origin,destination pair, print A to B : X miles in Y hours
        // use outputDiv for printing this result
        for (i = 0; i < response.rows.length; i++) {
          from = response.rows[i];
          addMarker(response.originAddresses[i], false);
          for (k = 0; k < from.elements.length; k++) {
            element = from.elements[k];
            str = 'From ' + response.originAddresses[i] + ' to ' + response.destinationAddresses[k] + ': ';
            str += element.distance.text + ' in ' + element.duration.text;
            $outputDiv.innerHTML = (str + '<br>');
            addMarker(response.destinationAddresses[k], true);
          }
        }
      }
    }
    // // insert distance calculator function here
    function calculateDistances () {
      var origin1 = document.getElementById('originA').value,
          origin2 = document.getElementById('originB').value,
          destinationA = document.getElementById('destinationA').value,
          destinationB = document.getElementById('destinationB').value,
          unitSys = document.getElementById('units').value;
      unitSys = (unitSys === 'mi') ? 'IMPERIAL' : 'METRIC';

      service.getDistanceMatrix({
        origins: [origin1, origin2],
        destinations: [destinationA, destinationB],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem[unitSys],
        avoidHighways: false,
        avoidTolls: false
      }, callback);
    }

    angular.extend($scope, {
      calculateDistances: calculateDistances
    });
    $scope.$on('$destroy', function() {
      deleteOverlays();
    });
  };

  angular.module('snwMap.exerciseThree').controller('exerciseThreeCtrl', exerciseThreeCtrl);
})();
