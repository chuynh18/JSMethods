"use strict";

// trim - given an input string, removes leading and trailing whitespaces, then returns a new string

const string = "        whitespace a a a a a         123        ";

const trim = function(input) {
    let indices = [];
    let endLeadingWhitespace = false;
    let output = "";

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== " " && !endLeadingWhitespace) {
            endLeadingWhitespace = true;
            indices[0] = i;
        }
        else if (input[i] !== " ") {
            indices[1] = i;
        };
    };

    for (let i = indices[0]; i <= indices[1]; i++) {
        output += input[i];
    };

    return output;
};

// ================================================

console.log(trim(string) === string.trim());
console.log(trim("          ") === "          ".trim());