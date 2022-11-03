function mean(a, b, c, d, e) {
    let array = []; 
    array.push(a, b, c, d, e);
    var mean = (a + b + c + d + e)/array.length;
    if (isNaN(mean)) {
        document.getElementById('alternative-pop-up').style.display = "block";
    } else {
        document.getElementById('pop-up').style.display = "block";
        document.getElementById('no-mode').style.display = "none";
        document.getElementById('average').innerHTML = "mean";
        document.getElementById('answer').innerHTML = mean;
    }
    return;
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

    if (isNaN(a || b || c || d || e)) {
        document.getElementById('alternative-pop-up').style.display = "block";
    } else if (max == 1) {
        document.getElementById('no-mode').style.display = "block";
        document.getElementById('pop-up').style.display = "none";
    } else {
        document.getElementById('pop-up').style.display = "block";
        document.getElementById('no-mode').style.display = "none";
        document.getElementById('average').innerHTML = "mode";
        document.getElementById('answer').innerHTML = modes;
    }
    return;
}

function median(a, b, c, d, e) {
    let array = [];
    array.push(a, b, c, d, e);
    let sorted = array.sort(function(a ,b) {
        return a-b
    }) // Returns the sorted array
    if (array.length % 2 == 0) {
        var middle = (array.length + 1) / 2;
        var upper = Math.floor(middle)
        var lower = upper - 1;
        var median = (sorted[lower] + sorted[upper])/2;
        if (isNaN(median)) {
            document.getElementById('alternative-pop-up').style.display = "block";
        } else {
            document.getElementById('pop-up').style.display = "block";
            document.getElementById('no-mode').style.display = "none";
            document.getElementById('average').innerHTML = "median";
            document.getElementById('answer').innerHTML = median;
        }
    } else {
        var middle = array.length / 2;
        var lower = Math.floor(middle);
        var median = sorted[lower]
        if (isNaN(median)) {
            document.getElementById('alternative-pop-up').style.display = "block";
        } else {
            document.getElementById('pop-up').style.display = "block";
            document.getElementById('no-mode').style.display = "none";
            document.getElementById('average').innerHTML = "median";
            document.getElementById('answer').innerHTML = median;
        }
    }
    return;
}

document.getElementById("meanButton").onclick = function() {
    var a = parseFloat(document.getElementById("userInput1").value);
    var b = parseFloat(document.getElementById("userInput2").value);
    var c = parseFloat(document.getElementById("userInput3").value);
    var d = parseFloat(document.getElementById("userInput4").value);
    var e = parseFloat(document.getElementById("userInput5").value);
    mean(a, b, c, d, e);
}

document.getElementById("modeButton").onclick = function() {
    var a = parseFloat(document.getElementById("userInput1").value);
    var b = parseFloat(document.getElementById("userInput2").value);
    var c = parseFloat(document.getElementById("userInput3").value);
    var d = parseFloat(document.getElementById("userInput4").value);
    var e = parseFloat(document.getElementById("userInput5").value);
    mode(a, b, c, d, e);
}

document.getElementById("medianButton").onclick = function() {
    var a = parseFloat(document.getElementById("userInput1").value);
    var b = parseFloat(document.getElementById("userInput2").value);
    var c = parseFloat(document.getElementById("userInput3").value);
    var d = parseFloat(document.getElementById("userInput4").value);
    var e = parseFloat(document.getElementById("userInput5").value);
    median(a, b, c, d, e);
}

document.getElementById('exit').onclick = function() {
    document.getElementById('alternative-pop-up').style.display = "none"
}