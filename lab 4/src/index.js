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
            let recipelink = name.strYoutube;
            console.log(recipelink);

            let storage = {
                "temperature": temp,
                "title": title,
                "photo": src,
                "recipelink": recipelink,
                "timestamp": Date.now()
            };
    
            console.log(storage);
    
            this.toStorage(storage, temp, title, src, recipelink); 
            console.log(JSON.stringify(storage) + " hello?");
        });
        
    }

    toStorage(storage, temp, title, src, recipelink){
        localStorage.getItem("dinner");
        console.log(localStorage.getItem("dinner"));

        if(localStorage.getItem("dinner") === null){ 
            localStorage.setItem("dinner", JSON.stringify(storage));
          }
        else{
        let d = Date.now();
        console.log(d + " d");

        let rn = localStorage.getItem("dinner");
        let rnvs = JSON.parse(rn);
        console.log(rnvs);
        let sp = rnvs.timestamp;
        console.log(sp);
        let t = rnvs.temperature;
        console.log(t);

        if(d - sp > 6000){ 
            localStorage.setItem("dinner", JSON.stringify(storage));
          }
        else{
            temp = rnvs.temperature;
            title = rnvs.title;
            src = rnvs.photo;
            recipelink = rnvs.recipelink;
            // let storearr = JSON.parse(localStorage.getItem("dinner"));
            // storearr.push(storage);
            // localStorage.setItem("dinner", JSON.stringify(storage));
          }
        }
          console.log("🤩"); 
          this.ad(temp, title, src, recipelink);
    }

    ad(temp, title, src, recipelink){
        document.querySelector(".recipe").innerHTML = `It is ${temp} degrees today`;
        document.querySelector(".title").innerHTML = `Let's make some ${title}`;
        document.querySelector(".ad").style.backgroundImage = `url(${src})`;
        document.querySelector(".recipelink").setAttribute("href", `${recipelink}`);    
    }   
    }
    
    let recipe = new Recipe();