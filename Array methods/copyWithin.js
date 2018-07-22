"use strict";

// copyWithin - 

const array = [0, 1, 2, 3, 4, 5];

const copyWithin = function(input, target, start, end) {
    let output = [];

    if (end > input.length || end === undefined) {
        end = input.length;
    };

    [target, start, end] = [Math.floor(target), Math.floor(start), Math.floor(end)];

    if (isNaN(target) || isNaN(start) || isNaN(end) || start >= input.length) {
        return input;
    };

    for (let i = 0; i < input.length; i++) {
        output[i] = input[i];
    };

    for (let i = 0; i < end - start; i++) {
        if (target + i === input.length) {
            break;
        };
        output[target + i] = input[start + i];
    };

    return output;
};

// ================================================

console.log(copyWithin(array, 2, 0));
// console.log(array.copyWithin(2, 0));
console.log("--------------------");

console.log(copyWithin(array, 1, 2, 3));
// console.log(array.copyWithin(1, 2, 3));