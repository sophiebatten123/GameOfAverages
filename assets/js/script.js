function mean(a, b, c) {
    return ((a+b+c)/2);
}

function mode(a, b, c) {
    let array = [];
    array.push(a, b, c);
    console.log(array);
    return;
}

function median(a, b, c) {
    return;
}

document.getElementById("meanButton").onclick = function() {
    var a = parseFloat(document.getElementById("userInput1").value);
    var b = parseFloat(document.getElementById("userInput2").value);
    var c = parseFloat(document.getElementById("userInput3").value);
    alert(mean(a, b, c));
}

document.getElementById("modeButton").onclick = function() {
    var a = parseFloat(document.getElementById("userInput1").value);
    var b = parseFloat(document.getElementById("userInput2").value);
    var c = parseFloat(document.getElementById("userInput3").value);
    alert(mode(a, b, c));
}

document.getElementById("medianButton").onclick = function() {
    var a = parseFloat(document.getElementById("userInput1").value);
    var b = parseFloat(document.getElementById("userInput2").value);
    var c = parseFloat(document.getElementById("userInput3").value);
    alert(median(a, b, c));
}