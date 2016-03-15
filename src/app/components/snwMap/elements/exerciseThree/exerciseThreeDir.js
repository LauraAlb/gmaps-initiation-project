(function() {
  'use strict';
  var ddo = function() {
    return {
      controller: 'exerciseThreeCtrl',
      templateUrl: '/app/components/snwMap/elements/exerciseThree/exerciseThree.html'
    };
  };
  angular.module('snwMap.exerciseThree')
    .directive('exerciseThree', ddo);
})();

