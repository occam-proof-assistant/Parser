'use strict';

module.exports = `

      document              ::=  ( rule | error )+ ;

      rule                  ::=  name "::=" definitions ";" ;

      name                  ::=  [name] ;

      definitions           ::=  definition ( "|" definition )* ;

      definition            ::=  part+ ;

      part                  ::=  nonTerminalPart quantifier*

                              |  "<NO_WHITESPACE>"? terminalPart quantifier*

                              ;

      nonTerminalPart       ::=  choiceOfParts

                              |  groupOfParts

                              |  ruleName lookAheadModifier?

                              ;

      terminalPart          ::=  significantTokenType
 
                              |  regularExpression

                              |  terminalSymbol
 
                              |  endOfLine
 
                              |  epsilon
 
                              |  wildcard
 
                              ;

      choiceOfParts         ::=  "(" part ( "|" part )+ ")" ;

      groupOfParts          ::=  "(" part part+ ")" ;

      ruleName              ::=  [name] ;

      significantTokenType  ::=  [type] ;

      regularExpression     ::=  [regular-expression] ;

      terminalSymbol        ::=  [string-literal] ;

      endOfLine             ::=  "<END_OF_LINE>" ;

      epsilon               ::=  "ε" ;

      wildcard              ::=  "." ;

      quantifier            ::=  optionalQuantifier

                              |  oneOrMoreQuantifier
 
                              |  zeroOrMoreQuantifier
 
                              ;

      lookAheadModifier     ::=  <NO_WHITESPACE>"!" ;

      optionalQuantifier    ::=  <NO_WHITESPACE>"?" ;

      oneOrMoreQuantifier   ::=  <NO_WHITESPACE>"+" ;

      zeroOrMoreQuantifier  ::=  <NO_WHITESPACE>"*" ;

      error                 ::=  . ;

`;
