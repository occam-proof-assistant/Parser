"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  border: 1px solid darkgrey;\n  padding: 0.25rem;\n  font-size: 1.2rem;\n  font-family: monospace;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var RuleNameInput = function(Input) {
    _inherits(RuleNameInput, Input);
    function RuleNameInput() {
        _classCallCheck(this, RuleNameInput);
        return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameInput).apply(this, arguments));
    }
    _createClass(RuleNameInput, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                var value = this.getValue(), ruleName = value; ///
                return ruleName;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getRuleName = this.getRuleName.bind(this);
                return {
                    getRuleName: getRuleName
                };
            }
        }
    ]);
    return RuleNameInput;
}(_easy.Input);
_defineProperty(RuleNameInput, "defaultProperties", {
    className: "rule-name",
    spellCheck: "false"
});
var _default = (0, _easyWithStyle).default(RuleNameInput)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2lucHV0L3J1bGVOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJlYXN5XCI7XG5cbmNsYXNzIFJ1bGVOYW1lSW5wdXQgZXh0ZW5kcyBJbnB1dCB7XG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRSdWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UnVsZU5hbWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicnVsZS1uYW1lXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShSdWxlTmFtZUlucHV0KWBcblxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWpCLEtBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F3QlksNkdBT3hDOzs7Ozs7O0lBN0JNLGFBQWE7Y0FBYixhQUFhO2FBQWIsYUFBYTs4QkFBYixhQUFhO2dFQUFiLGFBQWE7O2lCQUFiLGFBQWE7O1lBQ2pCLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7b0JBQ0gsS0FBSyxRQUFRLFFBQVEsSUFDckIsUUFBUSxHQUFHLEtBQUssQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRXBCLFFBQVE7Ozs7WUFHakIsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDTCxXQUFXLFFBQVEsV0FBVyxDQUFDLElBQUk7O29CQUd2QyxXQUFXLEVBQVgsV0FBVzs7Ozs7V0FaWCxhQUFhO0VBRkcsS0FBTTtnQkFFdEIsYUFBYSxHQWdCVixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLFNBQVc7SUFDdEIsVUFBVSxHQUFFLEtBQU87O21CQXRCRCxjQUFpQixVQTBCZCxhQUFhIn0=