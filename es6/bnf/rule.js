'use strict';

const necessary = require('necessary');

const { array } = necessary,
      { first, last } = array;

class Rule {
  constructor(name, definitions, NonTerminalNode) {
    this.name = name;
    this.definitions = definitions;
    this.NonTerminalNode = NonTerminalNode;
  }

  getName() {
    return this.name;
  }

  getDefinitions() {
    return this.definitions;
  }

  getNonTerminalNode() {
    return this.NonTerminalNode;
  }
  
  doDefinitionsExist() {
    const definitionsLength = this.definitions.length,
          definitionsExist = (definitionsLength > 0);
    
    return definitionsExist;
  }

  setName(name) {
    this.name = name;
  }

  setDefinitions(definitions) {
    this.definitions = definitions;
  }

  setNode(node) {
    this.node = node;
  }

  addDefinitions(definitions) {
    this.definitions = this.definitions.concat(definitions);
  }

  parse(configuration, noWhitespace) {
    let nonTerminalNode = null;

    configuration.increaseDepth();

    const tooDeep = configuration.isTooDeep();

    if (tooDeep) {
      throw new Error(`The parse tree is too deep at rule '${this.name}'`);
    }

    let definitionNodes = null;
    
    const someDefinitionParsed = this.definitions.some(function(definition) {
      definitionNodes = definition.parse(configuration, noWhitespace);

      const definitionParsed = (definitionNodes !== null);

      return definitionParsed;
    });

    if (someDefinitionParsed) {
      const definitionNodesLength = definitionNodes.length;

      if (definitionNodesLength > 0) {
        const ruleName = this.name,
              nodes = definitionNodes,  ///
              lastNodeNullified = isLastNodeNullified(nodes);

        if (lastNodeNullified) {
          removedLastNodeFromNodes(nodes);
        }

        nonTerminalNode = this.NonTerminalNode.fromNodesAndRuleName(nodes, ruleName);
      }
    }

    configuration.decreaseDepth();

    return nonTerminalNode;
  }

  toString(maximumRuleNameLength) {
    const maximumPadding = paddingFromPaddingLength(maximumRuleNameLength),
          definitionsString = this.definitions.reduce(function(definitionsString, definition) {
            const definitionString = definition.toString();
  
            if (definitionsString === null) {
              definitionsString = definitionString;
            } else {
              definitionsString = `${definitionsString}\n\n${maximumPadding}     | ${definitionString}`;
            }
  
            return definitionsString;
          }, null),
          ruleName = this.name, ///
          ruleNameLength = ruleName.length,
          paddingLength = maximumRuleNameLength - ruleNameLength,
          padding = paddingFromPaddingLength(paddingLength),
          string = `\n\n  ${this.name}${padding} ::= ${definitionsString} ;`;

    return string;
  }

  static fromRule(Class, rule) {
    if (rule === undefined) {
      rule = Class;
      Class = Rule;
    }
    
    const name = rule.getName(),
          definitions = rule.getDefinitions(),
          NonTerminalNode = rule.getNonTerminalNode();

    rule = new Class(name, definitions, NonTerminalNode);

    return rule;
  }
}

module.exports = Rule;

function paddingFromPaddingLength(paddingLength) {
  let padding = '';

  for (let position = 0; position < paddingLength; position++) {
    padding += ' ';
  }

  return padding;
}

function removedLastNodeFromNodes(nodes) {
  const start = -1,
        deleteCount = 1;

  nodes.splice(start, deleteCount);
}

function isLastNodeNullified(nodes) {
  let latNodeNullified = false;

  const lastNode = last(nodes),
        lastNodeTerminalNode = lastNode.isTerminalNode(),
        lastNodeNonTerminalNode = !lastNodeTerminalNode;

  if (lastNodeNonTerminalNode) {
    const nonTerminalNode = lastNode, ///
          childNodes = nonTerminalNode.getChildNodes(),
          childNodesLength = childNodes.length;

    if (childNodesLength === 1) {
      const firstChildNode = first(childNodes),
            firstChildNodeTerminalNode = firstChildNode.isTerminalNode();
      
      if (firstChildNodeTerminalNode) {
        const firstChildNodeEpsilonNode = firstChildNode.isEpsilonNode();

        latNodeNullified = firstChildNodeEpsilonNode; ///        
      }
    }
  }

  return latNodeNullified;
}
