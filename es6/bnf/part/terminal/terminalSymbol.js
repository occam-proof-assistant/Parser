'use strict';

const lexers = require('occam-lexers');

const TerminalPart = require('../../part/terminal'),
      TerminalNode = require('../../../common/node/terminal');

const { specialSymbols } = lexers,
      { NO_WHITESPACE } = specialSymbols;

class TerminalSymbolPart extends TerminalPart {
  constructor(content, nonWhitespace) {
    super(nonWhitespace);
    
    this.content = content;
  }

  parse(configuration) {
    let terminalNode = null;
    
    const savedIndex = configuration.getSavedIndex(),
		      nonWhitespace = this.hasNonWhitespace(),
					nextSignificantToken = configuration.getNextSignificantToken(nonWhitespace),
					significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      const content = significantToken.getContent(),
            parsed = (content === this.content);

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
    const nonWhitespace = this.hasNonWhitespace(),
		      nonWhitespaceString = nonWhitespace ?
                                 NO_WHITESPACE :
                                   '',
          string = `${nonWhitespaceString}"${this.content}"`;
    
    return string;
  }

  clone() { return super.clone(TerminalSymbolPart, this.content); }
}

module.exports = TerminalSymbolPart;
