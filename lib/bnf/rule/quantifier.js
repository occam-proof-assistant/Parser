'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    PartNode = require('../node/part'),
    ruleNames = require('../ruleNames'),
    RuleNameDefinition = require('../definition/ruleName');

var QuantifierRuleName = ruleNames.QuantifierRuleName,
    OptionalQuantifierRuleName = ruleNames.OptionalQuantifierRuleName,
    OneOrMoreQuantifierRuleName = ruleNames.OneOrMoreQuantifierRuleName,
    ZeroOrMoreQuantifierRuleName = ruleNames.ZeroOrMoreQuantifierRuleName;

var QuantifierRule = function (_Rule) {
  _inherits(QuantifierRule, _Rule);

  function QuantifierRule() {
    _classCallCheck(this, QuantifierRule);

    var name = QuantifierRuleName,
        optionalQuantifierRuleName = OptionalQuantifierRuleName,
        oneOrMoreQuantifierRuleName = OneOrMoreQuantifierRuleName,
        zeroOrMoreQuantifierRuleName = ZeroOrMoreQuantifierRuleName,
        optionalQuantifierRuleNameDefinition = new RuleNameDefinition(optionalQuantifierRuleName),
        oneOrMoreQuantifierRuleNameDefinition = new RuleNameDefinition(oneOrMoreQuantifierRuleName),
        zeroOrMoreQuantifierRuleNameDefinition = new RuleNameDefinition(zeroOrMoreQuantifierRuleName),
        definitions = [optionalQuantifierRuleNameDefinition, oneOrMoreQuantifierRuleNameDefinition, zeroOrMoreQuantifierRuleNameDefinition],
        Node = PartNode;

    return _possibleConstructorReturn(this, (QuantifierRule.__proto__ || Object.getPrototypeOf(QuantifierRule)).call(this, name, definitions, Node));
  }

  return QuantifierRule;
}(Rule);

module.exports = QuantifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9xdWFudGlmaWVyLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiUGFydE5vZGUiLCJydWxlTmFtZXMiLCJSdWxlTmFtZURlZmluaXRpb24iLCJRdWFudGlmaWVyUnVsZU5hbWUiLCJPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJRdWFudGlmaWVyUnVsZSIsIm5hbWUiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb24iLCJvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uIiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLFdBQVdELFFBQVEsY0FBUixDQURqQjtBQUFBLElBRU1FLFlBQVlGLFFBQVEsY0FBUixDQUZsQjtBQUFBLElBR01HLHFCQUFxQkgsUUFBUSx3QkFBUixDQUgzQjs7SUFLUUksa0IsR0FBOEdGLFMsQ0FBOUdFLGtCO0lBQW9CQywwQixHQUEwRkgsUyxDQUExRkcsMEI7SUFBNEJDLDJCLEdBQThESixTLENBQTlESSwyQjtJQUE2QkMsNEIsR0FBaUNMLFMsQ0FBakNLLDRCOztJQUUvRUMsYzs7O0FBQ0osNEJBQWM7QUFBQTs7QUFDWixRQUFNQyxPQUFPTCxrQkFBYjtBQUFBLFFBQ01NLDZCQUE2QkwsMEJBRG5DO0FBQUEsUUFFTU0sOEJBQThCTCwyQkFGcEM7QUFBQSxRQUdNTSwrQkFBK0JMLDRCQUhyQztBQUFBLFFBSU1NLHVDQUF1QyxJQUFJVixrQkFBSixDQUF1Qk8sMEJBQXZCLENBSjdDO0FBQUEsUUFLTUksd0NBQXdDLElBQUlYLGtCQUFKLENBQXVCUSwyQkFBdkIsQ0FMOUM7QUFBQSxRQU1NSSx5Q0FBeUMsSUFBSVosa0JBQUosQ0FBdUJTLDRCQUF2QixDQU4vQztBQUFBLFFBT01JLGNBQWMsQ0FDWkgsb0NBRFksRUFFWkMscUNBRlksRUFHWkMsc0NBSFksQ0FQcEI7QUFBQSxRQVlNRSxPQUFPaEIsUUFaYjs7QUFEWSwySEFlTlEsSUFmTSxFQWVBTyxXQWZBLEVBZWFDLElBZmI7QUFnQmI7OztFQWpCMEJsQixJOztBQW9CN0JtQixPQUFPQyxPQUFQLEdBQWlCWCxjQUFqQiIsImZpbGUiOiJxdWFudGlmaWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgUGFydE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3BhcnQnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgUnVsZU5hbWVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ydWxlTmFtZScpO1xuXG5jb25zdCB7IFF1YW50aWZpZXJSdWxlTmFtZSwgT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUsIE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSwgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBRdWFudGlmaWVyUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gUXVhbnRpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lID0gT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lID0gT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgPSBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24ob3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUpLFxuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSksXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb24gPSBuZXcgUnVsZU5hbWVEZWZpbml0aW9uKHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gUGFydE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWFudGlmaWVyUnVsZTtcbiJdfQ==