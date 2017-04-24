'use strict';

const EmptyParseTree = require('./empty'),
      VerticalBranchParseTree = require('./verticalBranch'),
      HorizontalBranchParseTree = require('./horizontalBranch');

class ChildNodesParseTree extends VerticalBranchParseTree {
  static fromChildNodes(childNodes, lines) {
    const childNodeParseTrees = childNodes.map(function(childNode) {
            const childNodeParseTree = childNode.parseTree(lines);
  
            return childNodeParseTree;
          }),
          childNodeParseTreesLength = childNodeParseTrees.length;
    
    let firstVerticalBranchPosition = undefined,
        lastVerticalBranchPosition = 0,
        childNodeParseTreesWidth = 0,
        childNodeParseTreesDepth = 0;

    childNodeParseTrees.forEach(function(childNodeParseTree, index) {
      const childNodeParseTreeWidth = childNodeParseTree.getWidth(),
            childNodeParseTreeDepth = childNodeParseTree.getDepth();

      if (index === 0) {
        const firstChildNodeParseTree = childNodeParseTree,
            firstChildNodeParseTreeVerticalBranchPosition = firstChildNodeParseTree.getVerticalBranchPosition();

        firstVerticalBranchPosition = firstChildNodeParseTreeVerticalBranchPosition;
      }

      if (index === childNodeParseTreesLength - 1) {
        const lastChildNodeParseTree = childNodeParseTree,
            lastChildNodeParseTreeVerticalBranchPosition = lastChildNodeParseTree.getVerticalBranchPosition();

        lastVerticalBranchPosition += lastChildNodeParseTreeVerticalBranchPosition;
      }

      if (index < childNodeParseTreesLength - 1) {
        lastVerticalBranchPosition += childNodeParseTreeWidth;
        lastVerticalBranchPosition += 1;

        childNodeParseTreesWidth += 1;
      }

      childNodeParseTreesWidth += childNodeParseTreeWidth;
      childNodeParseTreesDepth = Math.max(childNodeParseTreesDepth, childNodeParseTreeDepth);
    });

    const width = lastVerticalBranchPosition - firstVerticalBranchPosition + 1,
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(width),
          horizontalBranchParseTree = HorizontalBranchParseTree.fromWidth(width),
          leftMarginWidth = firstVerticalBranchPosition,
          rightMarginWidth = childNodeParseTreesWidth - width - leftMarginWidth;

    verticalBranchParseTree.addLeftMargin(leftMarginWidth);
    verticalBranchParseTree.addRightMargin(rightMarginWidth);
    horizontalBranchParseTree.addLeftMargin(leftMarginWidth);
    horizontalBranchParseTree.addRightMargin(rightMarginWidth);
    
    const verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          childNodesParseTree = EmptyParseTree.fromDepth(childNodeParseTreesDepth, ChildNodesParseTree, verticalBranchPosition);

    childNodeParseTrees.forEach(function(childNodeParseTree, index) {
      const childNodeParseTreeDepth = childNodeParseTree.getDepth(),
            clonedChildNodeParseTree = childNodeParseTree.clone();

      if (index < childNodeParseTreesLength - 1) {
        const rightMarginWidth = 1;

        clonedChildNodeParseTree.addRightMargin(rightMarginWidth);
      }

      if (childNodeParseTreeDepth < childNodeParseTreesDepth) {
        const bottomMarginDepth = childNodeParseTreesDepth - childNodeParseTreeDepth;

        clonedChildNodeParseTree.addBottomMargin(bottomMarginDepth);
      }

      childNodesParseTree.appendToRight(clonedChildNodeParseTree);
    });

    childNodesParseTree.appendToTop(horizontalBranchParseTree);
    childNodesParseTree.appendToTop(verticalBranchParseTree);

    return childNodesParseTree;
  }
}

module.exports = ChildNodesParseTree;