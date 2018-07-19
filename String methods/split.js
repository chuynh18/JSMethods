"use strict";

// split - returns an array of substrings from a given string

const string = "This is an example string.  It is very interesting.";

/* Maybe there's a better way, but I'll explain the basic approach I took.

First, I build an array that holds the indices of all matches.  This array also contains the
additive inverse of the length of the search term as the first element, and the length of the
input array as the last element.

This is because each consecutive pair of indices in this array is used to build out each
substring that will go into the output array.

I need the additive inverse of the length of the search term as the first element, because I
will be adding the length of the search term back in as I build out each substring.  This is
to ensure that the search term does not appear in any substring.

Remember that the array of indices generally holds the first index of each match.  When we
add the length of the search term back in, we're now pointing to the index immediately after
the matching text.

There is some extra conditional logic to handle special cases.

First, we check to see if the input is an empty string.  In the event that it is, we want to
return an empty array.

In the event that the search term is an empty string, we want our array of indices to start
out empty.  This is because an empty search term will match at every index, so we'll have an
extraneous element in our array of indices (specifically, an extra 0). */

const split = function(input, search) {

    // =================== FIRST HALF ===================
    // This part of the function searches through the input string for matches and builds an
    // array storing the indices of all the match locations.  We'll use that array to build
    // the substrings in the second half.

    // if input is an empty string, return an empty array so we match JS's split behavior.
    if (input === "") {
        return [];
    }

    // indices holds the array we'll build to help us split the string
    let indices = [-search.length];
    // output is the array we'll eventually return
    let output = [];

    // if the search term is an empty string, we want to start with an empty array
    // otherwise we'll have a duplicate entry (duplicate 0)
    if (search === "") {
        indices = [];
    };

    // the outer loop handles looping through the entire input string
    for (let i = 0; i < input.length; i++) {
        // start by assuming we have a match (I believe the logic is more succinct this way)
        let match = true;

        // check input string against search string.
        for (let j = 0; j < search.length; j++) {
            // the moment we have a mismatch...
            if (input[i+j] !== search[j]) {
                // set match to false and break out of this loop
                match = false;
                break;
            };
        };

        // if we ended the inner loop without a mismatch, match is still true
        if (match) {
            // this is equivalent to pushing the value of i into our indices array
            // perhaps a better name would have been "matches"?
            indices[indices.length] = i;
        };
    };

    // the last element in the indices array is the length of the input string
    // if we don't have this, we'll end up missing the last substring
    indices[indices.length] = input.length;

    // =================== SECOND HALF ===================
    // now we loop through the indices array to build out the array of substrings

    for (let k = 0; k < indices.length - 1; k++) {
        // temporary variable to hold the substring as we build it
        let splitArrayElement = "";

        // We look at elements in the indices array two at a time, "sweeping" from the first
        // to the next.  Our start index in this loop has search.length added to it.
        // This is so that the search term does not appear in our array of substrings
        for (let l = indices[k] + search.length; l < indices[k+1]; l++) {
            splitArrayElement += input[l];
        };

        // Now we actually insert the substring into the array of substrings.
        output[k] = splitArrayElement;

    };
    return output;
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
    
    console.log(`Did the built-in method agree with my reimplementation on "${index}"? `, testPass);
});

// and for empty input...
const builtIn = "".split("");
const myOwn = split("", "");
console.log("Did the built-in method agree with my reimplementation on empty string input? ", builtIn[0] === myOwn[0]);