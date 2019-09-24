'use strict';

const lexers = require('occam-lexers');

const TerminalPart = require('../../part/terminal'),
      TerminalNode = require('../../../common/node/terminal'),
      arrayUtilities = require('../../../utilities/array');

const { first } = arrayUtilities,
      { specialSymbols } = lexers,
      { NO_WHITESPACE } = specialSymbols;

class RegularExpressionPart extends TerminalPart {
  constructor(regularExpression, noWhitespace) {
    super(noWhitespace);

    this.regularExpression = regularExpression;
  }

  parse(configuration) {
    let terminalNode = null;
    
    const savedIndex = configuration.getSavedIndex(),
		      noWhitespace = this.hasNoWhitespace(),
					nextSignificantToken = configuration.getNextSignificantToken(noWhitespace),
					significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      const content = significantToken.getContent(),
            matches = content.match(this.regularExpression);

      if (matches !== null) {
        const firstMatch = first(matches),
              parsed = (firstMatch === content);  ///

        if (parsed) {
          terminalNode = TerminalNode.fromSignificantToken(significantToken);
        }
      }
    }

    if (terminalNode === null) {
      configuration.backtrack(savedIndex);
    }

    return terminalNode;
  }

  asString() {
    const regularExpressionString = this.regularExpression.toString(),
		      noWhitespace = this.hasNoWhitespace(),
          noWhitespaceString = noWhitespace ?
                                 NO_WHITESPACE :
                                   '',
          string = `${noWhitespaceString}${regularExpressionString}`;

    return string;
  }

  clone() { return super.clone(RegularExpressionPart, this.regularExpression); }
}

module.exports = RegularExpressionPart;
