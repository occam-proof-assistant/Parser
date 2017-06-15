'use strict';

const arrayUtil = require('../../util/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class TerminalSymbolNode extends NonTerminalNode {
  generatePart(Parts, noWhitespace) {
    const content = this.getContent(),
          TerminalSymbolPart = Parts['TerminalSymbolPart'],
          terminalSymbolPart = new TerminalSymbolPart(content, noWhitespace);

    return terminalSymbolPart;
  }

  getContent() {
    const childNodes = this.getChildNodes(),
          firstChildNode = arrayUtil.first(childNodes),
          terminalNode = firstChildNode,  ///
          content = terminalNode.getContent();

    return content;
  }

  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, TerminalSymbolNode); }
}

module.exports = TerminalSymbolNode;