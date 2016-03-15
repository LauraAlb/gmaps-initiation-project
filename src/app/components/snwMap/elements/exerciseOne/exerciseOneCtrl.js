(function() {
  'use strict';
  var exerciseOneCtrl = function($scope) {
    function onClickTab(tabName) {
      if ($scope.tabActive === tabName) {
        $scope.tabActive = null;
      } else {
        $scope.tabActive = tabName;
      }
    }

    angular.extend($scope, {
      panelVisible: false,
      tabActive: null,
      disabledToggle: {},
      onClickTab: onClickTab
    });
  };

  angular.module('snwMap.exerciseOne').controller('exerciseOneCtrl', exerciseOneCtrl);
})();
