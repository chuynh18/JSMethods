"use strict";

// charAt - Returns the character at the specified index

const string = "This is an example string.  It is very interesting.";

const charAt = function(input, index) {
    return input[index];
};

// ================================================

// proof that it works

console.log(charAt(string, 0)); // console.logs "T", which is the first letter in string

// ================================================

// let's do something silly

let reconstructedString = "";

for (let i = 0; i < string.length; i++) {
    reconstructedString += charAt(string, i);
};

console.log(reconstructedString); // console.logs string by reconstructing it character-by-character via charAt()