"use strict";

// slice - returns the selected part of the input string as a new string

const string = "This is an example string.  It is very interesting.";

const slice = function(input, start, end) {
    let output = "";

    if (!end) {
        end = input.length;
    };

    start = Math.floor(start);
    end = Math.floor(end);

    for (let i = start; i < end; i++) {
        output += input[i];
    };

    return output;
};

// ================================================

console.log(slice(string, 39, 50) === string.slice(39, 50));
console.log(slice(string, 39.5, 50.5) === string.slice(39.5, 50.5));