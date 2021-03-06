"use strict";

// endsWith - returns whether string ending matches input character(s)

const string = "This is an example string.  It is very interesting.";

const endsWith = function(inputString, inputEnding, length) {
    if (!length) {
        length = inputString.length;
    };

    length = Math.floor(length);

    if (isNaN(length)) {
        return false;
    };

    const startingIndex = length - inputEnding.length;

    let match = true;

    for (let i = startingIndex; i < length; i++) {
        if (inputString[i] !== inputEnding[i - startingIndex]) {
            match = false;
            break;
        };
    };

    return match;
};

// ================================================

// works the same as the built-in method...  These all return true.
console.log(endsWith(string, "ry interesting.") === string.endsWith("ry interesting.")); // true === true, returns true
console.log(endsWith(string, "THAT'S NOT TRUE THAT'S IMPOSSIBLE") === string.endsWith("THAT'S NOT TRUE THAT'S IMPOSSIBLE")); // false === false, returns true
console.log(endsWith(string, "exa", 14.6) === string.endsWith("exa", 14.6)); // true === true, returns true
console.log(endsWith(string, "exa", "14.6asdf") === string.endsWith("exa", "14.6asdf")); // false === false, returns true