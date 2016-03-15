(function() {
  'use strict';
  var exerciseTwoCtrl = function($scope) {
    function onClickTab(tabName) {
      if ($scope.tabActive === tabName) {
        $scope.tabActive = null;
      } else {
        $scope.tabActive = tabName;
      }
    }

    function init() {
      //create directionsService object here
      $scope.directionsService = new google.maps.DirectionsService();
      //setup directionsDisplay object here
      $scope.directionsDisplay = new google.maps.DirectionsRenderer();
      $scope.directionsDisplay.setMap($scope.map);
      $scope.directionsDisplay.setPanel(document.getElementById('directions-panel'));
    }

    //write function to calculate route and display it on map and panel
    var showDirectionsFn = function() {
      var request = {
        origin: document.getElementById('origin').value,
        destination: document.getElementById('destination').value,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
      };
      $scope.directionsService.route(request, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          $scope.directionsDisplay.setDirections(response);
        }
      });
    };
    init();
    angular.extend($scope, {
      panelVisible: false,
      tabActive: null,
      disabledToggle: {},
      onClickTab: onClickTab,
      directionsService: null,
      directionsDisplay: null,
      showDirections: showDirectionsFn
    });
  };

  angular.module('snwMap.exerciseTwo').controller('exerciseTwoCtrl', exerciseTwoCtrl);
})();
