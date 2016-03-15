(function() {
  'use strict';
  var exerciseOneCtrl = function() {
    function init() {
      window.console.log('hello!');
    }
    init();
  };

  angular.module('snwMap.exerciseOne').controller('exerciseOneCtrl', exerciseOneCtrl);
})();
