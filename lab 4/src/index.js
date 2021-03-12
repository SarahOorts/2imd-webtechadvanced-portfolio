class Recipe {
    constructor(){
        this.ready();
    }
    
    ready(){
        navigator.geolocation.getCurrentPosition((position) =>{
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            this.getWeather(lat, long);
        });
    }

    getWeather(lat, long) {
        let url = `http://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civillight&output=json`;
        console.log(url);
        console.log("hello");
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(":D");
            console.log(json);
            let js = json.dataseries[0];
            console.log(js);
            let celsius = js.temp2m;
            console.log(celsius);
            let temp = celsius.max;
            console.log(temp);

            this.ad(temp);
            this.food(temp);
        });
    }

    food(temp){
        let dish;
        if(temp < 10){
            dish = "Irish stew";
        }
        else if(temp >10 && temp < 20){
            dish = "Arrabiata";
        }
        else if (temp> 20 && temp < 30){
            dish = "Chicken Quinoa Greek Salad";
        }
        else if(temp > 30){
            dish = "New York cheesecake";
        } 

        let link = `https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`;
        console.log(link);
        fetch(link)
        .then((response) => {
            console.log("hello");
            return response.json();           
        })
        .then((json) => {
            console.log(":D");
            console.log(json);
            let name = json.meals[0];
            console.log(name);
            let title = name.strMeal;
            console.log(title);
            let src = name.strMealThumb;
            console.log(src);

            this.ad(temp, title, src);
        });
        
    }


    ad(temp, title, src){
        document.querySelector(".recipe").innerHTML = `It is ${temp} degrees today`;
        document.querySelector(".title").innerHTML = `Let's make some ${title}`;
        document.querySelector(".ad").style.backgroundImage = `url(${src})`;
    }
    }
    
    let recipe = new Recipe();