reimplementing built-in JS methods
==================================

tl;dr
-----

I'm reimplementing some of JavaScript's built in methods for fun.  Since these are functions, they won't be invoked with the same exact syntax, but their functionality should be very comparable.

Execution
---------

These .js files can be run inside Node.js.  (No reason they shouldn't work in a browser context if you embed them into an HTML file and check out the console.)

Caveats
-------

Note that not all functionality is being reimplemented.  For example, my `charCodeAt` only recognizes some of the Basic Latin characters in the Unicode standard.  This is a tiny, tiny subset of Unicode.  My goal was more to make sure I understand the logic behind each method; including the entire Unicode standard would just mean searching through a larger dictionary.

String methods
--------------
_\* denotes partial implementation_<br>
`charAt` - returns the character at the specified index<br>
`charCodeAt`* - returns the Unicode value of the character at the specified index in a string.  Inverse of `fromCharCode`.<br>
`concat` - joins two or more strings<br>
`endsWith` - returns whether string ending matches input character(s)<br>
`fromCharCode`* - returns the character corresponding to a given Unicode value.  Inverse of `charCodeAt`.<br>
`includes` - returns whether a string contains a specified substring<br>
`indexOf` - returns the position inside a string of the first occurence of a specified substring.  Returns -1 if the string doesn't contain the specified substring.<br>
`lastIndexOf` - returns the position inside a string of the last occurence of a specified substring.  Returns -1 if the string doesn't contain the specified substring.<br>
`repeat` - returns a string that consists of a specified number of copies of the input string<br>
`replace`* - searches a string for a specified value and returns a new string where the specified values have been replaced with an input string.  _No support for regular expressions._<br>
`slice` - returns the selected part of the input string as a new string<br>
`split` - returns an array of substrings from a given string<br>
`startsWith` - returns whether string beginning matches input character(s)<br>
`substr` - extracts a substring from a string and returns it<br>
`substring` - extracts a substring between two specified indices and returns it<br>
`toLowerCase`* - converts a string to lowercase letters.  Only handling letters of the English alphabet.<br>
`toUpperCase`* - converts a string to uppercase letters.  Only handling letters of the English alphabet.<br>
`trim` - given an input string, removes leading and trailing whitespaces, then returns a new string<br>

String methods I am not implementing
------------------------------------
`localeCompare` - _skipping for now_<br>
`match` - _skipping for now..._  I may tackle this at some point in the future.  I've been reading up on Thompson's construction and automata theory, then I might try writing a basic regex parser, though I doubt it will be complete.<br>
`search` - like `indexOf`, except it supports regex.  However, I am not writing a regex parser yet.<br>
`toLocaleLowerCase` - skipping, see toLowerCase<br>
`toLocaleUpperCase` - skipping, see toUpperCase<br>
`toString` - don't think this adds any value in terms of learning<br>
`valueOf` - don't think this adds any value in terms of learning<br>