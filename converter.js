class Converter {
    constructor() {
        // Add this code inside the constructor
        this.conversionHistory;
        this.historyShown = false; // At first, it's set to false
    }

    static FtoC(f) {
        return (f - 32) * 5 / 9;
    }
    static CtoF(c) {
        return c * 9 / 5 + 32;
    }
    static KtoC(k) {
        return k - 273.15;
    }
    static CtoK(c) {
        return Number(c) + 273.15;
    }
    static KtoF(k) {
        return (k - 273.15) * 9 / 5 + 32;
    }
    static FtoK(f) {
        return 273.15 + (f - 32) * 5 / 9;
    }
	
	
    static convert() {
        var value = document.getElementById("temperature").value;
        if (value == "") // In case value is empty, the function should finish.
            return;
        var from = document.getElementById("fromXdegrees").value;
        var to = document.getElementById("toYdegrees").value;
        var result;
        switch (from + "/" + to) {
            case "fahrenheit/celsius":
                result = this.FtoC(value);
                break;
            case "celsius/fahrenheit":
                result = this.CtoF(value);
                break;
            case "kelvin/celsius":
                result = this.KtoC(value);
                break;
            case "celsius/kelvin":
                result = this.CtoK(value);
                break;
            case "fahrenheit/kelvin":
                result = this.FtoK(value);
                break;
            case "kelvin/fahrenheit":
                result = this.KtoF(value);
                break;
            default:
                document.getElementById("result").textContent = "You can't convert to the same temperature scale!";
                return;
        }
        result = value + " " + from + " is equivalent to " + result + " " + to;
        document.getElementById("result").textContent = result;
    }

    static addToHistory(result) {
        if (this.conversionHistory == undefined) {
            this.conversionHistory = [result]; // An array containing one element: result
        }
        else {
            this.conversionHistory[this.conversionHistory.length] = result;
        }
    }
	
}

var buttonConvert = document.getElementById("convert");
	buttonConvert.onclick = function () {
	Converter.convert();
}
	
