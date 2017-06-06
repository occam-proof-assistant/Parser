'use strict';

const arrayUtil = require('../../../util/array');

class TransparentThenDiscardFirstNode {
  static fromNodesAndProductionName(nodes, productionName) {
    nodes = arrayUtil.discardFirst(nodes);

    return nodes;
  }
}

module.exports = TransparentThenDiscardFirstNode;
