'use strict';

var grammar = '\n\n    expression               ::=  term & (operator<NO_WHITESPACE>term)* <END_OF_LINE>\n    \n    operator                 ::=  "+" | "-" | "*" | "/"\n    \n    term                     ::=  naturalNumber | parenthesizedExpression\n    \n    naturalNumber            ::=  /d+/\n    \n    parenthesizedExpression  ::=  "(" expression ")"\n                            \n';

module.exports = grammar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9ncmFtbWFyLmpzIl0sIm5hbWVzIjpbImdyYW1tYXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSwrWEFBTjs7QUFjQUMsT0FBT0MsT0FBUCxHQUFpQkYsT0FBakIiLCJmaWxlIjoiZ3JhbW1hci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZ3JhbW1hciA9IGBcblxuICAgIGV4cHJlc3Npb24gICAgICAgICAgICAgICA6Oj0gIHRlcm0gJiAob3BlcmF0b3I8Tk9fV0hJVEVTUEFDRT50ZXJtKSogPEVORF9PRl9MSU5FPlxuICAgIFxuICAgIG9wZXJhdG9yICAgICAgICAgICAgICAgICA6Oj0gIFwiK1wiIHwgXCItXCIgfCBcIipcIiB8IFwiL1wiXG4gICAgXG4gICAgdGVybSAgICAgICAgICAgICAgICAgICAgIDo6PSAgbmF0dXJhbE51bWJlciB8IHBhcmVudGhlc2l6ZWRFeHByZXNzaW9uXG4gICAgXG4gICAgbmF0dXJhbE51bWJlciAgICAgICAgICAgIDo6PSAgL1xcZCsvXG4gICAgXG4gICAgcGFyZW50aGVzaXplZEV4cHJlc3Npb24gIDo6PSAgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSBncmFtbWFyO1xuIl19