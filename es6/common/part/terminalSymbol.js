'use strict';

var TerminalNode = require('../../common/node/terminal');

class TerminalSymbolPart {
  constructor(symbol, noWhitespace) {
    this.symbol = symbol;
    this.noWhitespace = noWhitespace;
  }

  parse(context, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    var terminalNode = null,
        savedIndex = context.savedIndex(),
        nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
        significantToken = nextNonWhitespaceSignificantToken; ///

    if (significantToken !== null) {
      var content = significantToken.getContent(),
          parsed = (content === this.symbol);  ///

      if (parsed) {
        terminalNode = TerminalNode.fromSignificantToken(significantToken);
      }
    }

    if (terminalNode === null) {
      context.backtrack(savedIndex);
    }

    return terminalNode;
  }

  static fromSymbol(symbol, significantTokenTypes, noWhitespace) {
    var terminalSymbolPart = null,
        terminalSymbolPartRegExp = /^'([^']+)'$/,
        matches = symbol.match(terminalSymbolPartRegExp);

    if (matches !== null) {
      var secondMatch = second(matches);
      
      symbol = secondMatch; ///

      terminalSymbolPart = new TerminalSymbolPart(symbol, noWhitespace);
    }

    return terminalSymbolPart;
  }
}

module.exports = TerminalSymbolPart;

function second(array) { return array[1]; }
