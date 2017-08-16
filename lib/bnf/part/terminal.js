'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalPart = function () {
  function TerminalPart() {
    _classCallCheck(this, TerminalPart);
  }

  _createClass(TerminalPart, [{
    key: 'parse',
    value: function parse() {
      var noWhitespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.noWhitespace = noWhitespace;
    }
  }, {
    key: 'isTerminalPart',
    value: function isTerminalPart() {
      var terminalPart = true;

      return terminalPart;
    }
  }, {
    key: 'isEpsilonPart',
    value: function isEpsilonPart() {
      var epsilonPart = false;

      return epsilonPart;
    }
  }, {
    key: 'getNoWhitespace',
    value: function getNoWhitespace() {
      return this.noWhitespace; ///
    }
  }]);

  return TerminalPart;
}();

module.exports = TerminalPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnQiLCJub1doaXRlc3BhY2UiLCJ0ZXJtaW5hbFBhcnQiLCJlcHNpbG9uUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsWTs7Ozs7Ozs0QkFDd0I7QUFBQSxVQUF0QkMsWUFBc0IsdUVBQVAsS0FBTzs7QUFDMUIsV0FBS0EsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1DLGVBQWUsSUFBckI7O0FBRUEsYUFBT0EsWUFBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNQyxjQUFjLEtBQXBCOztBQUVBLGFBQU9BLFdBQVA7QUFDRDs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtGLFlBQVosQ0FEZ0IsQ0FDVTtBQUMzQjs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJMLFlBQWpCIiwiZmlsZSI6InRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUZXJtaW5hbFBhcnQge1xuICBwYXJzZShub1doaXRlc3BhY2UgPSBmYWxzZSkge1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG4gIFxuICBpc1Rlcm1pbmFsUGFydCgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnQ7XG4gIH1cbiAgXG4gIGlzRXBzaWxvblBhcnQoKSB7XG4gICAgY29uc3QgZXBzaWxvblBhcnQgPSBmYWxzZTtcbiAgICBcbiAgICByZXR1cm4gZXBzaWxvblBhcnQ7XG4gIH1cblxuICBnZXROb1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsUGFydDtcbiJdfQ==