'use strict';

var VerticalBranchParseTree = require('../parseTree/verticalBranch');

class TerminalNodeParseTree extends VerticalBranchParseTree {
  static fromTerminalNode(terminalNode) {
    var content = terminalNode.getContent(),
        string = content, ///
        stringLength = string.length,
        verticalBranchParseTreeWidth = stringLength, ///
        verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
        verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), 
        terminalNodeParseTree = VerticalBranchParseTree.fromString(string, TerminalNodeParseTree, verticalBranchPosition);
    
    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    return terminalNodeParseTree;
  }
}

module.exports = TerminalNodeParseTree;