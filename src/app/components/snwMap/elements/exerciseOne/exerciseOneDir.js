(function() {
  'use strict';
  var ddo = function() {
    return {
      controller: 'exerciseOneCtrl',
      templateUrl: '/app/components/snwMap/elements/exerciseOne/exerciseOne.html'
    };
  };
  angular.module('snwMap.exerciseOne')
    .directive('exerciseOne', ddo);
})();

