"use strict";

// includes - returns whether a string contains a specified substring

const string = "This is an example string.  It is very interesting.";

const includes = function(input, substring) {
    for (let i = 0; i < input.length; i++) {
        let match = true;
        for (let j = 0; j < substring.length; j++) {
            if (input[i+j] !== substring[j]) {
                match = false;
                break;
            };
        };
        if (match) {
            return true;
        };
    };
    return false;
};

// ================================================

console.log("checking whether \"This is an example string.  It is very interesting.\" contains \"string\": ", includes(string, "string"));
console.log("checking whether \"This is an example string.  It is very interesting.\" contains \".  It is ve\": ", includes(string, ".  It is ve"));
console.log("checking whether \"This is an example string.  It is very interesting.\" contains \"tacos\": ", includes(string, "tacos"));