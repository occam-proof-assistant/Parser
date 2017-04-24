'use strict';

const lexers = require('occam-lexers');

const Parts = require('./parts');

const { specialSymbols } = lexers;

class Rule {
  constructor(parts) {
    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  parse(context, noWhitespace) {
    let nodes = [];
    
    const savedIndex = context.savedIndex(),
          everyPartParsed = this.parts.every(function(part) {
            const partNodeOrNodes = part.parse(context, noWhitespace),
                  partParsed = (partNodeOrNodes !== null);
  
            if (partParsed) {
              nodes = nodes.concat(partNodeOrNodes);
  
              noWhitespace = false;
            }
  
            return partParsed;
          });

    if (!everyPartParsed) {
      context.backtrack(savedIndex);

      nodes = null;
    }

    return nodes;
  }

  static fromSymbolSequence(symbolSequence, significantTokenTypes) {
    let noWhitespace = false;
    
    const parts = symbolSequence.reduceSymbols(function(parts, symbol) {
            if (symbol === specialSymbols.NO_WHITESPACE) {
              noWhitespace = true;
            } else {
              const part = partFromSymbol(symbol, significantTokenTypes, noWhitespace);
  
              parts.push(part);
  
              noWhitespace = false;
            }
  
            return parts;
          }, []),
          rule = new Rule(parts);

    return rule;
  }
}

module.exports = Rule;

function partFromSymbol(symbol, significantTokenTypes, noWhitespace) {
  let part = undefined; ///

  Parts.some(function(Part) {
    part = Part.fromSymbol(symbol, significantTokenTypes, noWhitespace);

    const parsed = (part !== null);

    return parsed;
  });

  return part;
}
