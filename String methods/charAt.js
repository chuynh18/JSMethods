"use strict";

// charAt - Returns the character at the specified index

const string = "This is an example string.  It is very interesting.";

// charAt - for a given string, returns the character at the specified index

const charAt = function(input, index) {
    // you might be asking, what the heck is with this
    // this if statement is here because that's how JavaScript charAt actually behaves!
    if (typeof index !== "number") {
        index = 0;
    }

    index = parseInt(index);

    return input[index];
};

// ================================================

// proof that it works

console.log(charAt(string, 0)); // "T"

console.log(charAt(string, 0) === string.charAt(0));
console.log(charAt(string, 4.2) === string.charAt(4.2));
console.log(charAt(string, 4.9) === string.charAt(4.9));
console.log(charAt(string, "6a") === string.charAt("6a"));