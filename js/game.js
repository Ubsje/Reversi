const Game = (function(url){
    console.log(url);

    //Configuratie en state waarden
    let configMap = {
        apiUrl: url
    }

    // Private function init
    const privateInit = function(afterInit){
        afterInit();
    }

    // Waarde/object geretourneerd aan de outer scope
    return {
        init: privateInit
    }
})('/api/url')

Game.Reversi = (function() {
    console.log('reversi');

    //Configuratie en state waarden
    let configMap = {
    }

    // Private function init
    const privateInit = function () {
    }

    // Waarde/object geretourneerd aan de outer scope
    return {
        init: privateInit
    }
})()

Game.Data = (function() {
    console.log('data');

    //Configuratie en state waarden
    let configMap = {
        apiKey: "7789eac46df7cfaa368fadc59aff45c3",
        mock: [
            {
                url: "api/Spel/Beurt",
                data: 0
            }
        ]
    }

    let stateMap = {
        environment : 'development'
    }

    const get = function(url){
        if (stateMap.environment == "development") {
            return getMockData(url);
        }

        return $.get(url + configMap.apiKey)
            .then(r => {
                return r
            })
            .catch(e => {
                console.log(e.message);
            });
    }

    const getMockData = function(url){

        //filter mock data, configMap.mock ... oei oei, moeilijk moeilijk :-)
        const mockData = configMap.mock.filter(o => o.url == url)[0];

        if (mockData == null)
            return "Invalid URL";

        return new Promise((resolve, reject) => {
            resolve(mockData.data)
        });

    }

    // Private function init
    const privateInit = function (environment) {
        if (!(environment == "production" || environment == "development")) {
            throw new Error("environment moet production of development zijn");
        }

        stateMap.environment = environment;


    }

    // Waarde/object geretourneerd aan de outer scope
    return {
        init: privateInit,
        get: get
    }
})()

Game.Model = (function() {
    console.log('model');

    //Configuratie en state waarden
    let configMap = {
    }

    const getWeather = function(){
        Game.Data.get("http://api.openweathermap.org/data/2.5/weather?q=zwolle&apikey=")
            .then(r => {
                if (r.main.temp == null)
                    throw new Error('Geen temperatuur aanwezig!');
                console.log(r);
            })
            .catch(e => {
                console.log(e.message);
            });
    }

    // Private function init
    const privateInit = function () {
    }

    // Waarde/object geretourneerd aan de outer scope
    return {
        init: privateInit,
        getWeather: getWeather
    }
})()