"use strict";

// split - returns an array of substrings from a given string

const string = "This is an example string.  It is very interesting.";

const split = function(input, search) {
    let indices = [-search.length];
    let output = [];

    if (search === "") {
        indices = [];
    };

    for (let i = 0; i < input.length; i++) {
        let match = true;

        for (let j = 0; j < search.length; j++) {
            if (input[i+j] !== search[j]) {
                match = false;
                break;
            };
        };

        if (match) {
            indices[indices.length] = i;
        };
    };

    indices[indices.length] = input.length;

    if (indices.length > 2) {
        for (let k = 0; k < indices.length - 1; k++) {
            let splitArrayElement = "";

            for (let l = indices[k] + search.length; l < indices[k+1]; l++) {
                splitArrayElement += input[l];
            };

            if (splitArrayElement === search) {
                output[k] = "";
            }
            else {
                output[k] = splitArrayElement;
            };
        };
        return output;
    }
    else {
        return [input];
    };
};

// ================================================

let testPass = true;
const builtIn0 = string.split(" ");
const myOwn0 = split(string, " ");
for (let i = 0; i < builtIn0.length; i++) {
    if (builtIn0[i] !== myOwn0[i]) {
        testPass = false;
    };
};
console.log(`Did the native method agree with my reimplementation on " "? `, testPass);

testPass = true;
const builtIn1 = string.split("");
const myOwn1 = split(string, "");
for (let i = 0; i < builtIn1.length; i++) {
    if (builtIn1[i] !== myOwn1[i]) {
        testPass = false;
    };
};
console.log(`Did the native method agree with my reimplementation on ""? `, testPass);

testPass = true;
const builtIn2 = string.split("is");
const myOwn2 = split(string, "is");
for (let i = 0; i < builtIn2.length; i++) {
    if (builtIn2[i] !== myOwn2[i]) {
        testPass = false;
    };
};
console.log(`Did the native method agree with my reimplementation on "is"? `, testPass);

testPass = true;
const builtIn3 = string.split("This isn't gonna find anything at all!");
const myOwn3 = split(string, "This isn't gonna find anything at all!");
for (let i = 0; i < builtIn3.length; i++) {
    if (builtIn3[i] !== myOwn3[i]) {
        testPass = false;
    };
};
console.log(`Did the native method agree with my reimplementation on "This isn't gonna find anything at all!"? `, testPass);