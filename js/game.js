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
    }

    // Private function init
    const privateInit = function () {
    }

    // Waarde/object geretourneerd aan de outer scope
    return {
        init: privateInit
    }
})()

Game.Model = (function() {
    console.log('model');

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