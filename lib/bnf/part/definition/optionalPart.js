'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    TerminalSymbolPart = require('../../common/part/terminalSymbol'),
    ProductionNamePart = require('../../common/part/productionName');

var OptionalPartDefinition = function (_Definition) {
  _inherits(OptionalPartDefinition, _Definition);

  function OptionalPartDefinition() {
    _classCallCheck(this, OptionalPartDefinition);

    var noWhitespace = true,
        partProductionName = 'part',
        questionMarkTerminalSymbolContent = '?',
        partProductionNamePart = new ProductionNamePart(partProductionName, noWhitespace),
        questionMarkTerminalSymbolPart = new TerminalSymbolPart(questionMarkTerminalSymbolContent, noWhitespace),
        parts = [partProductionNamePart, questionMarkTerminalSymbolPart];

    return _possibleConstructorReturn(this, (OptionalPartDefinition.__proto__ || Object.getPrototypeOf(OptionalPartDefinition)).call(this, parts));
  }

  return OptionalPartDefinition;
}(Definition);

module.exports = OptionalPartDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9kZWZpbml0aW9uL29wdGlvbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIk9wdGlvbmFsUGFydERlZmluaXRpb24iLCJub1doaXRlc3BhY2UiLCJwYXJ0UHJvZHVjdGlvbk5hbWUiLCJxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0IiwicXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsa0NBQVIsQ0FEM0I7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsa0NBQVIsQ0FGM0I7O0lBSU1HLHNCOzs7QUFDSixvQ0FBYztBQUFBOztBQUNaLFFBQU1DLGVBQWUsSUFBckI7QUFBQSxRQUNNQyxxQkFBcUIsTUFEM0I7QUFBQSxRQUVNQyxvQ0FBb0MsR0FGMUM7QUFBQSxRQUdNQyx5QkFBeUIsSUFBSUwsa0JBQUosQ0FBdUJHLGtCQUF2QixFQUEyQ0QsWUFBM0MsQ0FIL0I7QUFBQSxRQUlNSSxpQ0FBaUMsSUFBSVAsa0JBQUosQ0FBdUJLLGlDQUF2QixFQUEwREYsWUFBMUQsQ0FKdkM7QUFBQSxRQUtNSyxRQUFRLENBQ05GLHNCQURNLEVBRU5DLDhCQUZNLENBTGQ7O0FBRFksMklBV05DLEtBWE07QUFZYjs7O0VBYmtDVixVOztBQWdCckNXLE9BQU9DLE9BQVAsR0FBaUJSLHNCQUFqQiIsImZpbGUiOiJvcHRpb25hbFBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgT3B0aW9uYWxQYXJ0RGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSB0cnVlLFxuICAgICAgICAgIHBhcnRQcm9kdWN0aW9uTmFtZSA9ICdwYXJ0JyxcbiAgICAgICAgICBxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSAnPycsXG4gICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocGFydFByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQocXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lUGFydCxcbiAgICAgICAgICAgIHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25hbFBhcnREZWZpbml0aW9uO1xuIl19