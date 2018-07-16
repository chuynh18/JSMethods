"use strict";

const concat = function() {
    let output = "";
    for (let i = 0; i < arguments.length; i++) {
        output += arguments[i];
    };

    return output;
}

// ================================================

console.log(concat("This ", "is ", "a ", "test.")); // console.logs "This is a test."