'use strict';

const lexers = require('occam-lexers');

const bnf = require('./bnf'),
      mappings = require('./mappings'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser'),
      arrayUtilities = require('../utilities/array'),
      customGrammarUtilities = require('../utilities/customGrammar'),
      defaultCustomGrammarTermBNF = require('./defaultCustomGrammar/termBNF'),
      defaultCustomGrammarExpressionBNF = require('./defaultCustomGrammar/expressionBNF'),
      defaultCustomGrammarStatementBNF = require('./defaultCustomGrammar/statementBNF'),
      defaultCustomGrammarMetastatementBNF = require('./defaultCustomGrammar/metastatementBNF');

const { BNFLexer } = lexers,
      { push } = arrayUtilities,
      { rulesFromBNFs, addQualifiedAndUnqualifiedStatementAndMetastatementRules } = customGrammarUtilities;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing(),
      defaultCustomGrammarBNFs = [
        defaultCustomGrammarTermBNF,
        defaultCustomGrammarExpressionBNF,
        defaultCustomGrammarStatementBNF, 
        defaultCustomGrammarMetastatementBNF
      ],
      defaultCustomGrammarRules = rulesFromBNFs(defaultCustomGrammarBNFs),
      defaultCombinedCustomGrammarsRules = defaultCustomGrammarRules, ///
      defaultAdditionalMappings = {};

class FlorenceParser extends CommonParser {
  static fromCombinedCustomGrammarsRulesAndAdditionalMappings(combinedCustomGrammarsRules, additionalMappings) {
    const florenceParser = FlorenceParser.fromBNFAndMappings(bnf, mappings, combinedCustomGrammarsRules, additionalMappings);

    return florenceParser;
  }

  static fromBNFAndMappings(bnf, mappings, combinedCustomGrammarsRules = defaultCombinedCustomGrammarsRules, additionalMappings = defaultAdditionalMappings) {
    combinedCustomGrammarsRules = addQualifiedAndUnqualifiedStatementAndMetastatementRules(combinedCustomGrammarsRules);  ///

    mappings = Object.assign(mappings, additionalMappings); ///

    const tokens = bnfLexer.tokensFromBNF(bnf),
          rulesNode = bnfParser.rulesNodeFromTokens(tokens),
          rules = BNFParser.generateRules(rulesNode, mappings);

    push(rules, combinedCustomGrammarsRules);

    const florenceParser = new FlorenceParser(rules);

    return florenceParser;
  }

  static fromNothing() { return FlorenceParser.fromBNFAndMappings(bnf, mappings); } ///
}

Object.assign(FlorenceParser, {
  bnf,
  mappings,
  defaultCustomGrammarTermBNF,
  defaultCustomGrammarExpressionBNF,
  defaultCustomGrammarStatementBNF,
  defaultCustomGrammarMetastatementBNF
});

module.exports = FlorenceParser;
