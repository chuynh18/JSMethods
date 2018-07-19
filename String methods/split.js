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

const testCases = ["", " ", "is", ".", "mple st", "ng.  It i", "Not found."];

testCases.forEach((index) => {
    const builtIn = string.split(index);
    const myOwn = split(string, index);
    let testPass = true;

    for (let i = 0; i < builtIn.length; i++) {
        if (builtIn[i] !== myOwn[i]) {
            testPass = false;
        };
    };

    console.log(`Did the native method agree with my reimplementation on "${index}"? `, testPass);
});