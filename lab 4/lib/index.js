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

      var url = "https://api.weatherapi.com/v1/current.json?key=3a06dcc047484792aa6102031211703&q=Belgium&aqi=no".concat(lat, ",").concat(_long2);
      console.log(url);
      console.log("ok 1");
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        console.log("ok 2");
        console.log(json);
        var js = json.current;
        console.log(js + "ok");
        var temp = js.temp_c;
        console.log(temp); // let js = json.dataseries[0];
        // console.log(js);
        // let celsius = js.temp2m;
        // console.log(celsius);
        // let temp = celsius.max;
        // console.log(temp);

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
        console.log("ok 3");
        return response.json();
      }).then(function (json) {
        console.log("ok 4");
        console.log(json);
        var name = json.meals[0];
        console.log(name);
        var title = name.strMeal;
        console.log(title);
        var src = name.strMealThumb;
        console.log(src);
        var recipelink = name.strYoutube;
        console.log(recipelink);
        var storage = {
          "temperature": temp,
          "title": title,
          "photo": src,
          "recipelink": recipelink,
          "timestamp": Date.now()
        };
        console.log(storage);

        _this3.toStorage(storage, temp, title, src, recipelink);

        console.log(JSON.stringify(storage) + " new storage ok");
      });
    }
  }, {
    key: "toStorage",
    value: function toStorage(storage, temp, title, src, recipelink) {
      localStorage.getItem("dinner");
      console.log(localStorage.getItem("dinner"));

      if (localStorage.getItem("dinner") === null) {
        localStorage.setItem("dinner", JSON.stringify(storage));
      } else {
        var d = Date.now();
        console.log(d + " new date");
        var rn = localStorage.getItem("dinner");
        var rnvs = JSON.parse(rn);
        console.log(rnvs);
        var sp = rnvs.timestamp;
        console.log(sp);
        var t = rnvs.temperature;
        console.log(t);
        var time = d - sp;
        console.log(time + "time ok");
        var hour = 60 * 60 * 1000;
        console.log(hour + "hour ok");

        if (time > hour) {
          localStorage.setItem("dinner", JSON.stringify(storage));
        } else {
          temp = rnvs.temperature;
          title = rnvs.title;
          src = rnvs.photo;
          recipelink = rnvs.recipelink;
        }
      }

      console.log(localStorage.getItem("dinner") + "🤩");
      this.ad(temp, title, src, recipelink);
    }
  }, {
    key: "ad",
    value: function ad(temp, title, src, recipelink) {
      document.querySelector(".recipe").innerHTML = "It is ".concat(temp, " degrees today");
      document.querySelector(".title").innerHTML = "Let's make some ".concat(title);
      document.querySelector(".ad").style.backgroundImage = "url(".concat(src, ")");
      document.querySelector(".recipelink").setAttribute("href", "".concat(recipelink));
    }
  }]);

  return Recipe;
}();

var recipe = new Recipe();