"use strict";

// startsWith - returns whether string ending matches input character(s)

const string = "This is an example string.  It is very interesting.";

const startsWith = function(inputString, inputBeginning, startingIndex) {
    if (inputBeginning === "") {
        return true;
    };

    if (typeof startingIndex !== "number") {
        return false;
    };
    
    if (!startingIndex) {
        startingIndex = 0;
    }
    else {
        startingIndex = Math.floor(startingIndex);
    };

    let match = true;

    for (let i = startingIndex; i < startingIndex + inputBeginning.length; i++) {
        if (inputString[i] !== inputBeginning[i-startingIndex]) {
            match = false;
            break;
        };
    };

    return match;
};

// ================================================

// works the same as the built-in method...  These all return true.
console.log(startsWith(string, "This") === string.startsWith("This")); // true === true
console.log(startsWith(string, "is") === string.startsWith("is")); // false === false
console.log(startsWith(string, "is", 2.5) === string.startsWith("is", 2.5)); // true === true
console.log(startsWith(string, "interesting.", 39) === string.startsWith("interesting", 39)); // true === true
console.log(startsWith(string, "", "a39") === string.startsWith("", "a39")); // true === true
console.log(startsWith(string, "interesting.", "a39") === string.startsWith("interesting.", "a39")); // false === false