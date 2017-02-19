'use strict';

var NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

class NonTerminalNode {
  constructor(productionName, childNodes, firstLine, lastLine) {
    this.productionName = productionName;
    this.childNodes = childNodes;
    this.firstLine = firstLine;
    this.lastLine = lastLine;
  }

  getProductionName() {
    return this.productionName;
  }

  getChildNodes() {
    return this.childNodes;
  }
  
  getFirstLine() {
    return this.firstLine;
  }

  getLastLine() {
    return this.lastLine;
  }

  getFirstSignificantToken() {
    var firstChildNode = first(this.childNodes),
        firstChildNodeFirstSignificantToken = firstChildNode.getFirstSignificantToken(),
        firstSignificantToken = firstChildNodeFirstSignificantToken; ///

    return firstSignificantToken;
  }

  getLastSignificantToken() {
    var lastChildNode = last(this.childNodes),
        lastChildNodeLastSignificantToken = lastChildNode.getLastSignificantToken(),
        lastSignificantToken = lastChildNodeLastSignificantToken; ///

    return lastSignificantToken;
  }

  getParseTree() {
    var nonTerminalNode = this,  ///
        nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNode(nonTerminalNode),
        parseTree = nonTerminalNodeParseTree;  ///

    return parseTree;
  }

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
  }

  static fromNodesAndProductionName(nodes, productionName, Class = NonTerminalNode) {
    var childNodes = nodes, ///
        nonTerminalNode = Class.fromProductionNameAndChildNodes(productionName, childNodes);

    return nonTerminalNode;
  }

  static fromProductionNameAndChildNodes(productionName, childNodes, Class = NonTerminalNode) {
    var firstChildNode = first(childNodes),
        lastChildNode = last(childNodes),
        firstChildNodeFirstLine = firstChildNode.getFirstLine(),
        lastChildNodeFirstLine = lastChildNode.getLastLine(),
        firstLine = firstChildNodeFirstLine,  ///
        lastLine = lastChildNodeFirstLine,  ///
        nonTerminalNode = new Class(productionName, childNodes, firstLine, lastLine);

    return nonTerminalNode;
  }
}

module.exports = NonTerminalNode;

function first(array) { return array[0]; }
function last(array) { return array[array.length - 1]; }
