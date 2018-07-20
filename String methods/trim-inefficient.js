"use strict";

// trim - given an input string, removes leading and trailing whitespaces, then returns a new string
// this was the first solution I wrote.  Then I improved it 5 minutes later (see trim.js)
// WOW THIS IS SO BAD AND INEFFICIENT

const string = "        whitespace a a a a a         123        ";

const trim = function(input) {
    let leftTrim = "";
    let reversedOutput = "";
    let output = "";
    let whitespaceFlag = false;

    for (let i = 0; i < input.length; i++) {
        if (!whitespaceFlag && input[i] === " ") {}
        else {
            whitespaceFlag = true;
            leftTrim += input[i];
        };
    };
    
    whitespaceFlag = false;

    for (let i = leftTrim.length-1; i >= 0; i--) {
        if (!whitespaceFlag && leftTrim[i] === " ") {}
        else {
            whitespaceFlag = true;
            reversedOutput += leftTrim[i];
        };
    };

    for (let i = reversedOutput.length-1; i >= 0; i--) {
        output += reversedOutput[i];
    };

    return output;
};

let output = "";// ================================================

console.log(trim(string) === string.trim());
console.log(trim("          ") === "          ".trim());