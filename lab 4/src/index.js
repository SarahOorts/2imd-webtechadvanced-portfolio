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
        });
    }
    }
    
    let recipe = new Recipe();