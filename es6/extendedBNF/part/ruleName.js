'use strict';

const lexers = require('occam-lexers');

const parserUtil = require('../../util/parser');

const { ExtendedBNFLexer } = lexers,
      { specialSymbols } = ExtendedBNFLexer,
      { NO_WHITESPACE } = specialSymbols;

class RuleNamePart {
  constructor(ruleName, noWhitespace = false) {
    this.ruleName = ruleName;
    this.noWhitespace = noWhitespace;
  }
  
  getRuleName() {
    return this.ruleName;
  }
  
  isLeftRecursive(ruleName) {
    const leftRecursive = (this.ruleName === ruleName);
    
    return leftRecursive;
  }
  
  parse(context, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    let nodeOrNodes = null;
    
    const rules = context.getRules(),
          rule = parserUtil.findRule(this.ruleName, rules);

    if (rule !== null) {
      nodeOrNodes = rule.parse(context, noWhitespace);
    }

    return nodeOrNodes;
  }

  toString() {
    const noWhitespaceString = this.noWhitespace ?
                                 NO_WHITESPACE :
                                   '',
          string = `${noWhitespaceString}${this.ruleName}`;

    return string;
  }
}

module.exports = RuleNamePart;