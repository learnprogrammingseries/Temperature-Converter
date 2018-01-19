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
    	
    	this.addToHistory(result);
	    
    	if (this.historyShown)
            this.showHistory();
    }

    static addToHistory(result) {
        if (this.conversionHistory == undefined) {
            this.conversionHistory = [result]; // An array containing one element: result
        }
        else {
            this.conversionHistory[this.conversionHistory.length] = result;
        }
    }
	
    static showHistory() {
        this.historyShown = true;

        // That condition checks to see if there already exists a ul element
        if (document.getElementsByTagName("ul").length == 0) {
            var divHistory = document.getElementById("history"); // Getting the div element (of id "history")

            // Every document.createElement() method returns the object it creates, so we store them in a variable
            var heading = document.createElement("h2"); // Creating an h2 DOM element (object of the DOM)
            heading.textContent = "History"; // Setting the textContent property of the h2 element
            divHistory.appendChild(heading); // Appending the heading (h2) object inside the div we just got

            var ul = document.createElement("ul"); // Creating the ul element - stands for Unordered List
            // The setAttribute() method receives two arguments, one's the attribute and the other's the value
            ul.setAttribute("id", "items-list"); // We'll use this id to target the element later
            divHistory.appendChild(ul); // Adding this element to the ul DOM element

            // It will iterate for each element of the this.conversion property
            for (let i = 0; i < this.conversionHistory.length; i++) {
                var item = document.createElement("li"); // It creates a li (list item) DOM element
                item.textContent = this.conversionHistory[i]; // Setting the text content for the list item
                ul.appendChild(item); // Adding this element to the ul DOM element
            }
        }
        else {
            var ul = document.getElementById("items-list");

            // This assumes there is already a ul element, and possibly some li elements inside it
            var numberOfItems = document.getElementsByTagName("li").length; // Counting how many li elements there are
            var item = document.createElement("li"); // Creating the li DOM element
            // Setting the text for the textContent property
            item.textContent = this.conversionHistory[numberOfItems]; // The numberOfItems' value is exactly the index we want 
            ul.appendChild(item); // Appending the item to the unordered list
        }
    }
	
}

var buttonConvert = document.getElementById("convert");
	buttonConvert.onclick = function () {
	Converter.convert();
}

var buttonShowHistory = document.getElementById("show-history");
	buttonShowHistory.onclick = function () {
    	Converter.showHistory();
}
