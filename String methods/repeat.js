"use strict";

// repeat - repeats an input string the specified number of times
// I've matched the behavior of the built in repeat method (empty string for repetitions < 1 and flooring non-integer number of repetitions)

const repeat = function(input, repetitions) {
    let output = "";

    if (input < 1) {
        return "";
    }
    else {
        for (let i = 0; i < Math.floor(repetitions); i++) {
            output += input;
        };

        return output;
    };
};

// ================================================

console.log(repeat("I love to hear myself talk. ", 5));
console.log(repeat("Non-integer repetitions are okay. ", 2.4));
console.log(repeat("This won't get printed at all.", 0.4));