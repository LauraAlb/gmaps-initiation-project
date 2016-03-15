(function() {
  'use strict';
  var ddo = function() {
    return {
      controller: 'exerciseTwoCtrl',
      templateUrl: '/app/components/snwMap/elements/exerciseTwo/exerciseTwo.html'
    };
  };
  angular.module('snwMap.exerciseTwo')
    .directive('exerciseTwo', ddo);
})();

