'use strict';

const grammar = `

  productions              ::=  verticalSpace? production+
  
  production               ::=  productionName "::=" definitions
  
  definitions              ::=  definition ( "|" definition )*
  
  definition               ::=  part+ verticalSpace?
  
  part                     ::=  noWhitespacePart  
                
                             |  optionalPart  
                
                             |  zeroOrMoreParts  
                
                             |  oneOrMoreParts  
                
                             |  groupOfParts  
                           
                             |  productionName  
                
                             |  regularExpression 
                
                             |  significantTokenType 

                             |  terminalSymbol
                          
                             |  endOfLineSymbol
                
  noWhitespacePart         ::=  "<NO_WHITESPACE>" part

  optionalPart             ::=  part<NO_WHITESPACE>"?" lazyQuantifier?
                          
  zeroOrMoreParts          ::=  part<NO_WHITESPACE>"*" lazyQuantifier?
                          
  oneOrMoreParts           ::=  part<NO_WHITESPACE>"+" lazyQuantifier?
  
  lazyQuantifier           ::=  <NO_WHITESPACE>"?"
                          
  groupOfParts             ::=  "(" part+ ")"
  
  productionName           ::=  [name]

  regularExpression        ::=  [regularExpression]
  
  significantTokenType     ::=  [type]

  terminalSymbol           ::=  [string]
  
  endOfLineSymbol          ::=  "<END_OF_LINE>"

  verticalSpace            ::=  [endOfLine]+
  
`;

module.exports = grammar;
