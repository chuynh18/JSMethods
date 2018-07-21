"use strict";

// substr - extracts a substring from a string and returns it

const string = "This is an example string.  It is very interesting.";

const substr = function(input, startingIndex, length) {
    let output = "";

    // if startingIndex is equal to or greater than the length of the input, return empty string
    if (startingIndex >= input.length) {
        return output;
    }
    // if -startingIndex is greater than or equal to the length of the input, set startingIndex equal to 0
    else if (-startingIndex >= input.length) {
        startingIndex = 0;
    };

    // if no length was provided, we want to go all the way to the end of the input string
    if (!length) {
        length = input.length;
    };

    // floor our numerical inputs to match JavaScript substr behavior
    [startingIndex, length] = [Math.floor(startingIndex), Math.floor(length)];

    // handles non-negative values for startingIndex
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
    // negative startingIndex
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
console.log(substr(string, -5, 3.1) === string.substr(-5, 3.1));
console.log(substr(string, "-5a", "3.1b") === string.substr("-5a", "3.1b"));
console.log(substr(string, -13) === string.substr(-13));
console.log(substr(string, -123) === string.substr(-123));
console.log(substr(string, 0, 420) === string.substr(0, 420));
console.log(substr(string, 420) === string.substr(420));