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
    }
    
    let recipe = new Recipe();