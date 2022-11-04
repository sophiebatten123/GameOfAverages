var counter = 5;

document.getElementById('addNumber').onclick = function() {
    counter++;
    var add = document.createElement("INPUT");
    add.setAttribute("type", "number");
    add.setAttribute("id", counter);
    add.setAttribute("class", "input");
    add.setAttribute("placeholder", `Number ${counter}`);
    document.getElementById('numbers').appendChild(add);
}

document.getElementById('removeNumber').onclick = function() {
    document.getElementById(counter).remove();
    counter--;
}

document.getElementById('refresh').onclick = function() {
    var inputs = document.getElementsByClassName('input');
    for (i=0; i < inputs.length; i++){
        inputs[i].value = "";
    }
    document.getElementById('pop-up').style.display = "none";
    document.getElementById('no-mode').style.display = "none";
    document.getElementById('alternative-pop-up').style.display = "none";
}

function mean(array) {
    var total = 0;
    for (i=0; i < array.length; i++) {
        total += array[i];
    }
    var mean = total/array.length;
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

function mode(array) {
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

    if (modes == "") {
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

function median(array) {
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
    var inputs = document.getElementsByClassName('input');
    let array = [];
    for (i=0; i < inputs.length; i++){
        let number = parseFloat(inputs[i].value);
        console.log(number);
        array.push(number);
    }
    mean(array);
}

document.getElementById("modeButton").onclick = function() {
    var inputs = document.getElementsByClassName('input');
    let array = [];
    for (i=0; i < inputs.length; i++){
        let number = parseFloat(inputs[i].value);
        array.push(number);
    }
    mode(array);
}

document.getElementById("medianButton").onclick = function() {
    var inputs = document.getElementsByClassName('input');
    let array = [];
    for (i=0; i < inputs.length; i++){
        let number = parseFloat(inputs[i].value);
        array.push(number);
    }
    median(array);
}

document.getElementById('exit').onclick = function() {
    document.getElementById('alternative-pop-up').style.display = "none"
}