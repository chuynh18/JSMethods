"use strict";

// concat - joins two or more arrays and returns the result as a new array

const array1 = ["a", "b", "c"];
const array2 = ["1", "2", "3"];
const array3 = ["α", "β", "γ"];
const array4 = ["一", "二", "三"];

const concat = function() {
    let output = [];

    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            output[output.length] = arguments[i][j];
        };
    };

    return output;
};

// ================================================

console.log(concat(array1, array2, array3, array4));