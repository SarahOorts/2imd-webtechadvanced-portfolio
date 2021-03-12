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
  }, {
    key: "getWeather",
    value: function getWeather(lat, _long2) {
      var url = "http://www.7timer.info/bin/api.pl?lon=".concat(_long2, "&lat=").concat(lat, "&product=civillight&output=json");
      console.log(url);
      console.log("hello");
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        console.log(":D");
        console.log(json);
        var js = json.dataseries[0];
        console.log(js);
        var celsius = js.temp2m;
        console.log(celsius);
        var temp = celsius.max;
        console.log(temp); // let temperature = json.dataseries.splice(0, 1);
        // console.log(temperature);
        // let temp = JSON.stringify(temperature);
        // console.log(temp);
        // let t = temp.splice(2,1);
        // console.log(t);
      });
    }
  }]);

  return Recipe;
}();

var recipe = new Recipe();