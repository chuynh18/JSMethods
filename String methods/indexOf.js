"use strict";

// indexOf - Returns the position inside a string of the first occurence of a specified substring.  Returns -1 if the string doesn't contain the specified substring.
// the exact same logic as includes, only with different return values.

const string = "This is an example string.  It is very interesting.";

const indexOf = function(input, substring) {
    for (let i = 0; i < input.length; i++) {
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

console.log(`Checking "This is an example string.  It is very interesting." to see if it contains "string": ${indexOf(string, "string")}`);
console.log(`Checking "This is an example string.  It is very interesting." to see if it contains ".  It is ve": ${indexOf(string, ".  It is ve")}`);
console.log(`Checking "This is an example string.  It is very interesting." to see if it contains "the high ground": ${indexOf(string, "the high ground")}`);