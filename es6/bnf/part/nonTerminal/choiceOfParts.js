'use strict';

const partTypes = require('../../partTypes'),
      bnfUtilities = require('../../../utilities/bnf'),
      arrayUtilities = require('../../../utilities/array'),
      NonTerminalPart = require('../../part/nonTerminal');

const { isNodeChoiceNode } = bnfUtilities,
      { ChoiceOfPartsPartType } = partTypes,
      { second, even, allButFirstAndLast } = arrayUtilities;

class ChoiceOfPartsPart extends NonTerminalPart {
  constructor(parts) {
    const type = ChoiceOfPartsPartType; ///

    super(type);
    
    this.parts = parts;
  }
  
  getParts() {
    return this.parts;
  }

  parse(configuration, noWhitespace) {
    noWhitespace = false; ///
    
    let nodes = null;
    
    this.parts.some(function(part) {
      const partNodeOrNodes = part.parse(configuration, noWhitespace);

      if (partNodeOrNodes !== null) {
        nodes = partNodeOrNodes;  ///

        return true;
      }
    });
    
    return nodes;
  }

  asString() {
    const partsString = this.parts.reduce(function(partsString, part) {
            const partString = part.asString();
    
            if (partsString === null) {
              partsString = partString;
            } else {
              partsString = `${partsString} | ${partString}`;
            }
    
            return partsString;
          }, null),
          string = `( ${partsString} )`;
    
    return string;
  }

  static fromNodes(nodes) {
    let choiceOfPartsPart = null;
    
    const allButFirstAndLastNodes = allButFirstAndLast(nodes);

    nodes = allButFirstAndLastNodes;  ///
    
    const secondNode = second(nodes),
          secondNodeChoiceNode = isNodeChoiceNode(secondNode);
    
    if (secondNodeChoiceNode) {
      const evenNodes = even(nodes);

      nodes = evenNodes;  ///

      const noWhitespace = false,
            parts = nodes.map(function(node) {
              const part = node.generatePart(noWhitespace);
  
              return part;
            });
      
      choiceOfPartsPart = new ChoiceOfPartsPart(parts);
    }    
    
    return choiceOfPartsPart;
  }
}

module.exports = ChoiceOfPartsPart;
