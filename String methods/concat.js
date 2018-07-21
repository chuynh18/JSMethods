"use strict";

// concat - joins two or more strings

const concat = function() {
    let output = "";
    for (let i = 0; i < arguments.length; i++) {
        output += arguments[i];
    };

    return output;
};

// ================================================

console.log(concat("This ", "is ", "a ", "test.")); // console.logs "This is a test."
console.log(concat("Buy ", "me ", 420 , " sandwiches.")); // console.logs "Buy me 420 sandwiches."
console.log(concat("Buy ", "me ", 420 , " sandwiches.") === "Buy ".concat("me ", 420 , " sandwiches."));