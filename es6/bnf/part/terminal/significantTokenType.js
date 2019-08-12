'use strict';

const lexers = require('occam-lexers');

const TerminalPart = require('../../part/terminal'),
      TerminalNode = require('../../../common/node/terminal');

const { specialSymbols } = lexers,
      { NO_WHITESPACE } = specialSymbols;

class SignificantTokenTypePart extends TerminalPart {
  constructor(significantTokenType, noWhitespace) {
    super(noWhitespace);
    
    this.significantTokenType = significantTokenType;
  }

  parse(configuration, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///
    
    let terminalNode = null;
    
    const savedIndex = configuration.getSavedIndex(),
					nextSignificantToken = configuration.getNextSignificantToken(noWhitespace),
					significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      const significantTokenType = significantToken.getType(),
            parsed = (significantTokenType === this.significantTokenType);

      if (parsed) {
        terminalNode = TerminalNode.fromSignificantToken(significantToken);
      }
    }

    if (terminalNode === null) {
      configuration.backtrack(savedIndex);
    }

    return terminalNode;
  }

  asString() {
    const noWhitespaceString = this.noWhitespace ?
                                 NO_WHITESPACE :
                                   '',
          string = `${noWhitespaceString}[${this.significantTokenType}]`;
    
    return string;
  }

  clone() { return super.clone(SignificantTokenTypePart, this.significantTokenType); }
}

module.exports = SignificantTokenTypePart;
