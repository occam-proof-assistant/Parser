'use strict';

const EndOfLinePart = require('../part/terminal/endOfLine'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class EndOfLineNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const endOfLinePart = new EndOfLinePart();

    return endOfLinePart;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(EndOfLineNode, ruleName, childNodes); }
}

module.exports = EndOfLineNode;
