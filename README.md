reimplementing built-in JS methods
==================================

tl;dr
-----

I'm reimplementing some of JavaScript's built in methods for fun.  Since these are functions, they won't be invoked with the same exact syntax, but their functionality should be very comparable.

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
