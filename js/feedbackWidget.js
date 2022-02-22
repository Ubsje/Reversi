class FeedbackWidget{
    constructor(elementId) {
        this._elementId = elementId;
    }

    get elementId() { //getter, set keyword voor setter methode
        return this._elementId;
    }

    show(message, type, doLog = true){
        var x = document.getElementById(this._elementId);
        x.innerText = message;

        if (type == "success")
            x.className = "alert alert-success";
        else
            x.className = "alert alert-danger";

        x.style.display = "block";

        if (doLog)
            this.log({
                message: message,
                type: type
            });
    }

    hide(){
        var x = document.getElementById(this._elementId);
        x.style.display = "none";
    }

    log(message){
        let logged = this.getLoggedArray();
        logged.push(message);

        while (logged.length > 10)
            logged.shift();

        localStorage.setItem("feedback_widget", JSON.stringify(logged))
    }

    removeLog(){
        localStorage.removeItem("feedback_widget");
    }

    history(){
        let logged = this.getLoggedArray();
        let string = "";
        for (let i = 0; i < logged.length; i++){
            let current = logged[i];
            string += (current.type == "success" ? "success" : "error") + " - " + current.message + (i < logged.length - 1 ? "\n" : "");
        }

        this.show(string, "success", false);
    }

    getLoggedArray() {
        let loggedString = localStorage.getItem('feedback_widget');

        if (loggedString == null)
            loggedString = "[]";
        else if (loggedString.charAt(0) != "[")
            loggedString = "[" + loggedString + "]";

        return JSON.parse(loggedString);
    }
}