"use strict";

// substring - extracts a substring between two specified indices and returns it

const string = "This is an example string.  It is very interesting.";

const substring = function(input, startIndex, endIndex) {
    let output = "";

    // negative startIndex means startIndex is 0
    if (startIndex < 0) {
        startIndex = 0;
    };

    // no endIndex means endIndex is the length of the input
    if (endIndex === 0) {}
    else if (!endIndex) {
        endIndex = input.length;
    };

    // floor our numerical inputs to match JavaScript substr behavior
    [startIndex, endIndex] = [Math.floor(startIndex), Math.floor(endIndex)];
    
    // if startIndex is greater than endIndex, swap them
    if (startIndex > endIndex) {
        [startIndex, endIndex] = [endIndex, startIndex];
    };

    for (let i = startIndex; i < endIndex; i++) {
        // this guards against going "out of bounds" i.e. the loop "looking" past the string's length
        if (input[i]) {
            output += input[i];
        }
        else {
            break;
        } 
    };

    return output;
};

// ================================================

console.log(substring(string, 0) === string.substring(0));
console.log(substring(string, 0, 0) === string.substring(0, 0));
console.log(substring(string, 0, 420) === string.substring(0, 420));
console.log(substring(string, 10, 5) === string.substring(10, 5));
console.log(substring(string, 420) === string.substring(420));
console.log(substring(string, 420, 5) === string.substring(420, 5));
console.log(substring(string, -420) === string.substring(-420));
console.log(substring(string, -420, 5) === string.substring(-420, 5));