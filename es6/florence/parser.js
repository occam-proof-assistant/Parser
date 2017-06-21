'use strict';

const lexers = require('occam-lexers');

const grammar = require('./grammar'),
      mappings = require('./mappings'),
      parserUtil = require('../util/parser'),
      grammarUtil = require('../util/grammar'),
      CommonParser = require('../common/parser'),
      ExtendedBNFParser = require('../extendedBNF/parser'),
      defaultCustomGrammars = require('./defaultCustomGrammars'),
      defaultAdditionalMappings = require('./defaultAdditionalMappings');

const { BNFLexer } = lexers;

const bnfLexer = BNFLexer.fromNothing(),
      extendedBNFParser = ExtendedBNFParser.fromNothing();

class FlorenceParser extends CommonParser {
  static fromCustomGrammarsAdditionalMappings(customGrammars, additionalMappings) {
    const florenceParser = FlorenceParser.fromGrammarAndMappings(grammar, mappings, customGrammars, additionalMappings);
  
    return florenceParser;
  }
  
  static fromGrammarAndMappings(grammar, mappings, customGrammars = defaultCustomGrammars, additionalMappings = defaultAdditionalMappings) {
    mappings = Object.assign(mappings, additionalMappings); ///

    const customProductions = customProductionsFromCustomGrammars(customGrammars, bnfLexer, extendedBNFParser),
          lines = bnfLexer.linesFromGrammar(grammar),
          node = extendedBNFParser.nodeFromLines(lines);
    
    let productions = ExtendedBNFParser.generateProductions(node, mappings);
    
    productions = productions.concat(customProductions);
    
    const florenceParser = new FlorenceParser(productions);

    return florenceParser;
  }

  findProduction(productionName) {
    const productions = this.getProductions();

    return parserUtil.findProduction(productionName, productions);
  }
}

module.exports = FlorenceParser;

function customProductionsFromCustomGrammars(customGrammars, bnfLexer, extendedBNFParser) {
  const customProductions = customGrammars.reduce(function(customProductions, customGrammar) {
    const customGrammarProductions = grammarUtil.productionsFromGrammar(customGrammar, bnfLexer, extendedBNFParser);

    customProductions = customProductions.concat(customGrammarProductions);
    
    return customProductions;
  }, []);
  
  return customProductions;
}
