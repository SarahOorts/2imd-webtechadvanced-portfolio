"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Recipe = /*#__PURE__*/function () {
  function Recipe() {
    _classCallCheck(this, Recipe);

    this.ready();
  }

  _createClass(Recipe, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var _long = position.coords.longitude;

        _this.getWeather(lat, _long);
      });
    }
  }]);

  return Recipe;
}();

var recipe = new Recipe();