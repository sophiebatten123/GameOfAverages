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
    const obj = {};
    let max = 0;
    let maxNumber = -Infinity;
    let modes = []

    array.forEach(element => {
        if (!obj[element]) {
            obj[element] = 1;
        } else {
            obj[element] += 1;
        }
    });

    // {'-2': 2, '-3': 2, '4': 1}

    for (let key in obj) {
        const value = obj[key]; //-2
        if (value >= max) {
            max = value;
        }
    }

    for (let key in obj) {
        const value = obj[key];
        if (value >= max) {
            maxNumber = key;
            modes.push(maxNumber);
        }
    }

    if (max == 1) {
        document.getElementById('no-mode').style.display = "block";
        document.getElementById('pop-up').style.display = "none";
    } else {
        document.getElementById('pop-up').style.display = "block";
        document.getElementById('average').innerHTML = "mode";
        document.getElementById('no-mode').style.display = "none";
        document.getElementById('answer').innerHTML = modes;
    }
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
        if (isNaN(number)) {
            document.getElementById('alternative-pop-up').style.display = "block";
        } else {
            mode(array);
        }
    }
}

document.getElementById("medianButton").onclick = function() {
    var inputs = document.getElementsByClassName('input');
    let array = [];
    for (i=0; i < inputs.length; i++){
        let number = parseFloat(inputs[i].value);
        array.push(number);
        if (isNaN(number)) {
            document.getElementById('alternative-pop-up').style.display = "block";
        } else {
            median(array);
        }
    }
}

document.getElementById('exit').onclick = function() {
    document.getElementById('alternative-pop-up').style.display = "none"
}

document.getElementById('exit-notification').onclick = function() {
    document.getElementById('pop-up').style.display = "none"
}

document.getElementById('exit-mode').onclick = function() {
    document.getElementById('no-mode').style.display = "none"
}