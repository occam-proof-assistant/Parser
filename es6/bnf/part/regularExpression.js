'use strict';

const lexers = require('occam-lexers');

const TerminalNode = require('../../common/node/terminal');

const { BNFLexer } = lexers;

class RegularExpressionPart {
  constructor(noWhitespace) {
    this.noWhitespace = noWhitespace;
  }

  parse(context, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    let terminalNode = null;
    
    const savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

    if (significantToken !== null) {
      const significantTokenType = significantToken.getType(),
            parsed = (significantTokenType === 'regularExpression');  ///

      if (parsed) {
        terminalNode = TerminalNode.fromSignificantToken(significantToken);
      }
    }

    if (terminalNode === null) {
      context.backtrack(savedIndex);
    }

    return terminalNode;
  }
}

module.exports = RegularExpressionPart;
