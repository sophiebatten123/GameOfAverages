function mean(a, b, c, d, e) {
    let array = []; 
    array.push(a, b, c, d, e);
    return ((a + b + c +d + e)/array.length);
}

function mode(a, b, c, d, e) {
    let array = [];
    array.push(a, b, c, d, e); // Creates an array of numbers to allow for iteration to take place
    let frequency = [];
    let modes = [] // Created to account for multiple mean values within a set of numbers
    var max = 0; // Acts as a counter
    
    for(let i=0; i < array.length; i++) {
        let number = array[i];
        frequency[number] = (frequency[number] || 0) + 1; // Tracks the frequency of the numbers within the array

        if (frequency[number] > max) {
            max = frequency[number]; // Updates the max value is required
        }
    }

    for (let j=0; j < frequency.length; j++) {
        if (frequency[j] == max) {
            modes.push(j); // Isolates all numbers that have the same max frequency and pushes them into a seperate array
        }
    }

    if (max == 1) {
        return "No Mode";
    } else {
        return modes;
    }
}

function median(a, b, c, d, e) {
    let array = [];
    array.push(a, b, c, d, e);
    let sorted = array.sort(function(a ,b) {
        return a-b
    }) // Returns the sorted array
    console.log(sorted);
    if (array.length % 2 == 0) {
        var middle = (array.length + 1) / 2;
        var upper = Math.floor(middle)
        var lower = upper - 1;
        var median = (sorted[lower] + sorted[upper])/2;
    } else {
        var middle = array.length / 2;
        var lower = Math.floor(middle);
        var median = sorted[lower]
    }
    return median;
}

document.getElementById("meanButton").onclick = function() {
    var a = parseFloat(document.getElementById("userInput1").value);
    var b = parseFloat(document.getElementById("userInput2").value);
    var c = parseFloat(document.getElementById("userInput3").value);
    var d = parseFloat(document.getElementById("userInput4").value);
    var e = parseFloat(document.getElementById("userInput5").value);
    alert(mean(a, b, c, d, e));
}

document.getElementById("modeButton").onclick = function() {
    var a = parseFloat(document.getElementById("userInput1").value);
    var b = parseFloat(document.getElementById("userInput2").value);
    var c = parseFloat(document.getElementById("userInput3").value);
    var d = parseFloat(document.getElementById("userInput4").value);
    var e = parseFloat(document.getElementById("userInput5").value);
    alert(mode(a, b, c, d, e));
}

document.getElementById("medianButton").onclick = function() {
    var a = parseFloat(document.getElementById("userInput1").value);
    var b = parseFloat(document.getElementById("userInput2").value);
    var c = parseFloat(document.getElementById("userInput3").value);
    var d = parseFloat(document.getElementById("userInput4").value);
    var e = parseFloat(document.getElementById("userInput5").value);
    alert(median(a, b, c, d, e));
}