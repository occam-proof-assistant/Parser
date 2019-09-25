'use strict';

const lexers = require('occam-lexers');

const ruleNames = require('../ruleNames'),
      Definition = require('../definition'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      GroupOfPartsPart = require('../part/nonTerminal/groupOfParts'),
      OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

const { PartRuleName } = ruleNames,
      { specialSymbols } = lexers,
      { verticalBar, openBracket, closeBracket } = specialSymbols;

class ChoiceOfPartsDefinition extends Definition {
  constructor() {
    const noWhitespace = false,
          partRuleName = PartRuleName,
          verticalBarTerminalSymbolContent = verticalBar, ///
          openBracketTerminalSymbolContent = openBracket, ///
          closeBracketTerminalSymbolContent = closeBracket, ///
          partRuleNamePart = new RuleNamePart(partRuleName),
          verticalBarTerminalSymbolPart = new TerminalSymbolPart(verticalBarTerminalSymbolContent, noWhitespace),
          openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent, noWhitespace),
          closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent, noWhitespace),
          verticalBarTerminalSymbolThenPartRuleNameParts = [
            verticalBarTerminalSymbolPart,
            partRuleNamePart
          ],
          groupOfPartsPart = new GroupOfPartsPart(verticalBarTerminalSymbolThenPartRuleNameParts),
          oneOrMoreGroupOfPartsPart = new OneOrMorePartsPart(groupOfPartsPart),
          parts = [
            openBracketTerminalSymbolPart,
            partRuleNamePart,
            oneOrMoreGroupOfPartsPart,
            closeBracketTerminalSymbolPart
          ];

    super(parts)
  }
}

module.exports = ChoiceOfPartsDefinition;