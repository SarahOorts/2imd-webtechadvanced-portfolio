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
        });
    }

    ad(temp){
        document.querySelector(".recipe").innerHTML = `It is ${temp} degrees today`;

        if(temp<10){
            document.querySelector(".ad").getElementsByClassName.backgroundImage = url();
        }
        else if (temp >10 && temp < 20){
            document.querySelector(".ad").getElementsByClassName.backgroundImage = url();
        }
        else if(temp> 20 && temp < 30){
            document.querySelector(".ad").getElementsByClassName.backgroundImage = url();
        }
        else{
            document.querySelector(".ad").getElementsByClassName.backgroundImage = url();
        }
    }
    }
    
    let recipe = new Recipe();