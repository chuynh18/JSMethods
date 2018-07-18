"use strict";

// replace - searches a string for a specified value and returns a new string where the specified values have been replaced with an input string.
// no regex support!

const string = "This is an example string.  It is very interesting.";

const replace = function(input, search, replacement) {
    let output = "";
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        let match = true;
        for (let j = 0; j < search.length; j++) {
            if (input[i+j] !== search[j]) {
                match = false;
                break;
            };
        };
        if (match) {
            output += replacement;
            counter = search.length - 1;
        }
        else if (counter > 0) {
            counter -= 1;
        }
        else {
            output += input[i];
        };
    };
    return output;
};

// ================================================

console.log("Original: ", string);
console.log("Swapped:  ", replace(string, "interesting", "dull"));