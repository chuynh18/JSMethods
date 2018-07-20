"use strict";

// toLowerCase - converts a string to lowercase letters.  Only handling letters of the English alphabet.

const letters = [
    {lower: "a", upper: "A"},
    {lower: "b", upper: "B"},
    {lower: "c", upper: "C"},
    {lower: "d", upper: "D"},
    {lower: "e", upper: "E"},
    {lower: "f", upper: "F"},
    {lower: "g", upper: "G"},
    {lower: "h", upper: "H"},
    {lower: "i", upper: "I"},
    {lower: "j", upper: "J"},
    {lower: "k", upper: "K"},
    {lower: "l", upper: "L"},
    {lower: "m", upper: "M"},
    {lower: "n", upper: "N"},
    {lower: "o", upper: "O"},
    {lower: "p", upper: "P"},
    {lower: "q", upper: "Q"},
    {lower: "r", upper: "R"},
    {lower: "s", upper: "S"},
    {lower: "t", upper: "T"},
    {lower: "u", upper: "U"},
    {lower: "v", upper: "V"},
    {lower: "w", upper: "W"},
    {lower: "x", upper: "X"},
    {lower: "y", upper: "Y"},
    {lower: "z", upper: "Z"}
];

const string = "This is an example string.  It is very interesting.";

const toLowerCase = function(input) {
    let output = "";

    for (let i = 0; i < input.length; i++) {
        let found = false;
        for (let j = 0; j < letters.length; j++) {

            if (input[i] === letters[j].lower || input[i] === letters[j].upper) {
                output += letters[j].lower;
                found = true;
                break;
            };
            
        };

        if (!found) {
            output += input[i];
        };
    };

    return output;
};

// ================================================

console.log(toLowerCase(string));