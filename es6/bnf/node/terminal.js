'use strict';

var TerminalNodeParseTree = require('../parseTree/terminalNode');

class TerminalNode {
  constructor(significantToken) {
    this.significantToken = significantToken;
  }
  
  getChildNodes() {
    var childNodes = [];  ///
    
    return childNodes;
  }
  
  getProductionName() {
    var productionName = null;  ///
    
    return productionName;
  }
  
  getContent() {
    var significantTokenType = this.significantToken.getType(),
        significantTokenContent = this.significantToken.getContent(),
        content = `${significantTokenContent}[${significantTokenType}]`; ///

    return content;
  }

  getSignificantToken() {
    return this.significantToken;
  }
  
  getParseTree() {
    var terminalNode = this,  ///
        terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNode(terminalNode),
        parseTree = terminalNodeParseTree;  ///

    return parseTree;
  }

  update() {

  }
}

module.exports = TerminalNode;
