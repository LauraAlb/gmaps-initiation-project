(function() {
  'use strict';
  var ddo = function() {
    function link(scope) {
      var placeDetailsName = 'international_phone_number',
        placeOpeningName = 'opening_hours',
        placeOpenNowName = 'open_now',
        placeWeekTextName = 'weekday_text';

      function _getId() {
        var placeId = 'place_id';
        return scope.placeDetails[placeId];
      }

      function _getWebSite() {
        return scope.placeDetails.website ? scope.placeDetails.website : null;
      }

      function _getTitle() {
        return scope.placeDetails.name ? scope.placeDetails.name : null;
      }

      function _getImgUrl() {
        if (scope.placeDetails.photos) {
          scope.imgDefault = false;
          return scope.placeDetails.photos[0].getUrl({
            'maxWidth': 220,
            'maxHeight': 150
          });
        }
        return 'images/panelResults/no-image.png';
      }

      function _getPhone() {
        var phone = null;
        if (scope.placeDetails[placeDetailsName]) {
          phone = scope.placeDetails[placeDetailsName];
        }
        return phone;
      }

      function _getGmapLink() {
        var gmapLink = null,
          lat, lng;
        if (scope.placeDetails.geometry) {
          lat = scope.placeDetails.geometry.location.lat();
          lng = scope.placeDetails.geometry.location.lng();
          gmapLink = 'https://www.google.es/maps/dir//' + lat + ',' + lng + '/';
        }
        return gmapLink;
      }

      function _getOpeningStatus() {
        if (scope.placeDetails[placeOpeningName]) {
          return scope.placeDetails[placeOpeningName][placeOpenNowName] ? 'Abierto' : 'Cerrado';
        }
        return null;
      }

      function _getOpeningToday() {
        var day = new Date().getDay();
        if (day !== 0) {
          day = day - 1;
        } else {
          day = 7;
        }
        if (scope.placeDetails[placeOpeningName] && scope.placeDetails[placeOpeningName][placeWeekTextName]) {
          return scope.placeDetails[placeOpeningName][placeWeekTextName][day];
        }
        return null;
      }

      function _getAddress() {
        var address = null;
        if (scope.placeDetails.vicinity) {
          address = scope.placeDetails.vicinity;
        }
        return address;
      }

      function init() {
        scope.id = _getId();
        scope.title = _getTitle();
        scope.phone = _getPhone();
        scope.imgUrl = _getImgUrl();
        scope.openingStatus = _getOpeningStatus();
        scope.openingToday = _getOpeningToday();
        scope.address = _getAddress();
        scope.website = _getWebSite();
        scope.gmapLink = _getGmapLink();
      }

      angular.extend(scope, {
        id: null,
        title: null,
        imgUrl: null,
        imgDefault: true,
        phone: null,
        openingStatus: null,
        openingToday: null,
        address: null,
        website: null,
        gmapLink: null
      });

      init();
    }

    return {
      templateUrl: '/app/components/snwMap/elements/panelResults/panelResults.html',
      replace: true,
      scope: {
        placeDetails: '=',
        selectedMarker: '='
      },
      link: link
    };
  };

  angular.module('snwMap.panelResults')
    .directive('panelResults', ddo);
})();
