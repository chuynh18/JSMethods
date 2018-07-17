"use strict";

// indexOf - Returns the position inside a string of the last occurence of a specified substring.  Returns -1 if the string doesn't contain the specified substring.

const string = "This is an example string.  It is very interesting.";

const lastIndexOf = function(input, substring) {
    for (let i = input.length - substring.length; i >= 0; i--) {
        let match = true;
        for (let j = 0; j < substring.length; j++) {
            if (input[i+j] !== substring[j]) {
                match = false;
                break;
            };
        };
        if (match) {
            return i;
        };
    };
    return -1;
};

// ================================================

console.log(lastIndexOf(string, "is"));
console.log(lastIndexOf(string, "ing"));
console.log(lastIndexOf(string, "string"));
console.log(lastIndexOf(string, "Nikon D500"));