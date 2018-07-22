"use strict";

// concat - joins two or more strings and returns the result as a new string

const concat = function() {
    let output = "";
    // trying out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    for (let value of arguments) {
        output += value;
    };

    return output;
};

// // Alternative (the traditional for loop):
// const concat = function() {
//     let output = "";
//     for (let i = 0; i < arguments.length; i++) {
//         output += arguments[i];
//     };

//     return output;
// };

// ================================================

console.log(concat("This ", "is ", "a ", "test.")); // console.logs "This is a test."
console.log(concat("Buy ", "me ", 420 , " sandwiches.")); // console.logs "Buy me 420 sandwiches."
console.log(concat("Buy ", "me ", 420 , " sandwiches.") === "Buy ".concat("me ", 420 , " sandwiches."));