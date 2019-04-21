'use strict';

const lexers = require('occam-lexers');

const partTypes = require('../../partTypes'),
      NonTerminalPart = require('../../part/nonTerminal');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { questionMark } = specialSymbols,
      { OptionalPartType } = partTypes;

class OptionalPartPart extends NonTerminalPart {
  constructor(part) {
    const type = OptionalPartType; ///

    super(type);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(configuration, noWhitespace) {
    noWhitespace = false; ///

    let nodes = [];
    
    const part = this.getPart(),
          partNodeOrNodes = part.parse(configuration, noWhitespace),
          parsed = (partNodeOrNodes !== null);

    if (parsed) {
      nodes = partNodeOrNodes;
    }

    return nodes;
  }

  asString() {
    const operatorString = questionMark,  ///
          partString = this.part.asString(),
          string = `${partString}${operatorString}`;

    return string;
  }
}

module.exports = OptionalPartPart;
