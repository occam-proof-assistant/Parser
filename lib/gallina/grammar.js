'use strict';

var grammar = '\n\n  var expr                   ::= term operatorThenTerm*\n  \n  operatorThenTerm           ::= operator term\n  \n  operator                   ::= + | - | * | /\n  \n  term                       ::= naturalNumber\n  \n                               | parenthesizedExpr\n  \n  naturalNumber              ::= /d+/\n  \n  parenthesizedExpr          ::= ( expr )\n  \n';

module.exports = grammar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2dyYW1tYXIuanMiXSwibmFtZXMiOlsiZ3JhbW1hciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQUlBLDJYQUFKOztBQWtCQUMsT0FBT0MsT0FBUCxHQUFpQkYsT0FBakIiLCJmaWxlIjoiZ3JhbW1hci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGdyYW1tYXIgPSBgXG5cbiAgdmFyIGV4cHIgICAgICAgICAgICAgICAgICAgOjo9IHRlcm0gb3BlcmF0b3JUaGVuVGVybSpcbiAgXG4gIG9wZXJhdG9yVGhlblRlcm0gICAgICAgICAgIDo6PSBvcGVyYXRvciB0ZXJtXG4gIFxuICBvcGVyYXRvciAgICAgICAgICAgICAgICAgICA6Oj0gKyB8IC0gfCAqIHwgL1xuICBcbiAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgOjo9IG5hdHVyYWxOdW1iZXJcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwYXJlbnRoZXNpemVkRXhwclxuICBcbiAgbmF0dXJhbE51bWJlciAgICAgICAgICAgICAgOjo9IC9cXGQrL1xuICBcbiAgcGFyZW50aGVzaXplZEV4cHIgICAgICAgICAgOjo9ICggZXhwciApXG4gIFxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSBncmFtbWFyO1xuIl19