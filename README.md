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
`charAt` - returns the character at the specified index<br>
`charCodeAt` - returns the Unicode of the character at the specified index in a string<br>
`concat` - joins two or more strings<br>
`endsWith` - returns whether string ending matches input character(s)<br>