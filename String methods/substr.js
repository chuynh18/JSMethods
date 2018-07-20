"use strict";

// substr - extracts a substring from a string and returns it

const string = "This is an example string.  It is very interesting.";

const substr = function(input, startingIndex, length) {
    let output = "";

    if (startingIndex >= input.length) {
        return output;
    }
    else if (-startingIndex >= input.length) {
        startingIndex = 0;
    };

    if (!length) {
        length = input.length;
    };

    startingIndex = Math.floor(startingIndex);

    if (startingIndex >= 0) {
        for (let i = startingIndex; i < length + startingIndex; i++) {
            if (input[i]) {
                output += input[i];
            }
            else {
                break;
            };
        };
    }
    else {
        for (let i = input.length + startingIndex; i < input.length + startingIndex + length; i++) {
            if (input[i]) {
                output += input[i];
            }
            else {
                break;
            };
        };
    };

    return output;
};

// ================================================

console.log(substr("", 0) === "".substr(0));
console.log(substr(string, 0) === string.substr(0));
console.log(substr(string, -5, 5) === string.substr(-5, 5));
console.log(substr(string, -123) === string.substr(-123));
console.log(substr(string, 0, 420) === string.substr(0, 420));
console.log(substr(string, 420) === string.substr(420));