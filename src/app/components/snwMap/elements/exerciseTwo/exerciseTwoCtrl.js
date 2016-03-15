(function() {
  'use strict';
  var exerciseTwoCtrl = function($scope) {
    function init() {
      var autocompleteOr, autocompleteDest;
      $scope.directionsDisplay.setMap($scope.map);
      $scope.directionsDisplay.setPanel(document.getElementById('directions-panel'));
      autocompleteOr = new google.maps.places.Autocomplete(document.getElementById('origin'));
      autocompleteDest = new google.maps.places.Autocomplete(document.getElementById('destination'));
      autocompleteOr.bindTo('bounds', $scope.map);
      autocompleteDest.bindTo('bounds', $scope.map);
    }

    //write function to calculate route and display it on map and panel
    var showDirectionsFn = function() {
      var request = {
        origin: document.getElementById('origin').value,
        destination: document.getElementById('destination').value,
        travelMode: google.maps.DirectionsTravelMode[document.getElementById('mode').value]
      };
      $scope.directionsService.route(request, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          $scope.directionsDisplay.setDirections(response);
        }
      });
    };
    angular.extend($scope, {
      //create directionsService object here
      directionsService: new google.maps.DirectionsService(),
      //setup directionsDisplay object here
      directionsDisplay: new google.maps.DirectionsRenderer(),
      showDirections: showDirectionsFn
    });
    init();
  };

  angular.module('snwMap.exerciseTwo').controller('exerciseTwoCtrl', exerciseTwoCtrl);
})();
