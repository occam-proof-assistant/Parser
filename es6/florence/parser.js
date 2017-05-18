'use strict';

const lexers = require('occam-lexers');

const grammar = require('./grammar'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser'),
      TransparentNode = require('../common/node/nonTerminal/transparent'),
      DiscardSecondChildNode = require('../common/node/nonTerminal/discardSecondChild'),
      TransparentThenKeepSecondNode = require('../common/node/nonTerminal/transparentThenKeepSecond');

const { BNFLexer, FlorenceLexer } = lexers;

class FlorenceParser extends CommonParser {
  static fromNothing(mappings) {
    const lines = BNFLexer.linesFromGrammar(grammar),
          significantTokenTypes = FlorenceLexer.getSignificantTokenTypes();

    mappings = Object.assign({
      'part': TransparentNode,
      'premise': TransparentNode,
      'premises': TransparentNode,
      'byOrFrom': TransparentNode,
      'typeName': TransparentNode,
      'statement': TransparentNode,
      'variableName': TransparentNode,
      'byOrFromLabel': TransparentNode,
      'subDerivation': TransparentNode,
      'proofDerivation': TransparentNode,
      '(typed)Variable': TransparentNode,
      'constructorName': TransparentNode,
      'metavariableName': TransparentNode,
      'parenthesisedType': TransparentNode,
      'type(s)Declaration': TransparentNode,
      'specialOrUnassigned': TransparentNode,
      'unassignedOrSpecial': TransparentNode,
      '(un)justifiedStatement': TransparentNode,
      '(qualified)Metavariable': TransparentNode,
      'abridgedProofDerivation': TransparentNode,
      '(abridged)ProofDerivation': TransparentNode,
      '(typed)Variable(s)Declaration': TransparentNode,
      'typedConstructor(s)Declaration': TransparentNode,
      'subLemmaOrStatement(byOrFromLabel)': TransparentNode,
      '(qualified)Metavariable(s)Declaration': TransparentNode,
      'subLemmaOrStatement(byOrFromLabel)ThenVerticalSpace': TransparentNode,
      'premise(s)': DiscardSecondChildNode,
      'conclusion': DiscardSecondChildNode,
      'typedVariable': DiscardSecondChildNode,
      'typedConstructor': DiscardSecondChildNode,
      'commaThenType': TransparentThenKeepSecondNode,
      'commaThenLabel': TransparentThenKeepSecondNode,
      'commaThenMetavariable': TransparentThenKeepSecondNode,
      'commaThen(Typed)Variable': TransparentThenKeepSecondNode,
      'commaThenTypedConstructor': TransparentThenKeepSecondNode,
      'commaThen(qualified)Metavariable': TransparentThenKeepSecondNode,
      'parenthesisedTypeList': TransparentThenKeepSecondNode,
      'parenthesisedLabelList': TransparentThenKeepSecondNode
    }, mappings);

    const productions = BNFParser.parse(lines, significantTokenTypes, mappings),
          florenceParser = new FlorenceParser(productions);

    return florenceParser;
  }
}

module.exports = FlorenceParser;
