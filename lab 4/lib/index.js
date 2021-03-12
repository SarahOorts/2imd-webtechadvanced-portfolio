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
      var _this2 = this;

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
        console.log(temp);

        _this2.ad(temp);

        _this2.food(temp);
      });
    }
  }, {
    key: "food",
    value: function food(temp) {
      var _this3 = this;

      var dish;

      if (temp < 10) {
        dish = "Irish stew";
      } else if (temp > 10 && temp < 20) {
        dish = "Arrabiata";
      } else if (temp > 20 && temp < 30) {
        dish = "Chicken Quinoa Greek Salad";
      } else if (temp > 30) {
        dish = "New York cheesecake";
      }

      var link = "https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(dish);
      console.log(link);
      fetch(link).then(function (response) {
        console.log("hello");
        return response.json();
      }).then(function (json) {
        console.log(":D");
        console.log(json);
        var name = json.meals[0];
        console.log(name);
        var title = name.strMeal;
        console.log(title);
        var src = name.strMealThumb;
        console.log(src);

        _this3.ad(temp, title, src);
      });
    }
  }, {
    key: "ad",
    value: function ad(temp, title, src) {
      document.querySelector(".recipe").innerHTML = "It is ".concat(temp, " degrees today");
      document.querySelector(".title").innerHTML = "Let's make some ".concat(title);
      document.querySelector(".ad").style.backgroundImage = "url(".concat(src, ")");
    }
  }]);

  return Recipe;
}();

var recipe = new Recipe();