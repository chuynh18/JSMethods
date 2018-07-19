"use strict";

// split - returns an array of substrings from a given string

const string = "This is an example string.  It is very interesting.";

/*
Maybe there's a better way, but I'll explain the basic approach I took.

First, I build an array that holds the indices of all matches.  This
array also contains the additive inverse of the length of the search
term as the first element, and the length of the input array as the
last element.

This is because each consecutive pair of indices in this array is used
to build out each substring that will go into the output array.

I need the additive inverse of the length of the search term as the
first element, because I will be adding the length of the search term
back in as I build out each substring.  This is to ensure that the
search term does not appear in any substring.

Remember that the array of indices generally holds the first index of
each match.  When we add the length of the search term back in, we're
now pointing to the index immediately after the matching text.

There is some extra conditional logic to handle special cases.

First, in the event that the search term is an empty string, we want
our array of indices to start out empty.  This is because an empty
search term will match at every index, so we'll have an extraneous
element in our array of indices (specifically, an extra 0).

Next, we check to see if our array of indices is greater than 2.  This
is because it being 2 implies that no matches were found against our
search term, in which case, we want to return the input string inside
an array.

Lastly, we check to see if the input is an empty string.  In the event
that it is, we want to return an empty array.
*/

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
    else if (input === "") {
        return [];
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
    
    console.log(`Did the built-in method agree with my reimplementation on "${index}"? `, testPass);
});