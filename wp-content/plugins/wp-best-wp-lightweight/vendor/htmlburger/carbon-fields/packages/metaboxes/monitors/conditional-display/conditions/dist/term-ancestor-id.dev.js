"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = require("lodash");

var _anyEquality = _interopRequireDefault(require("../comparers/any-equality"));

var _anyContain = _interopRequireDefault(require("../comparers/any-contain"));

var _base = _interopRequireDefault(require("./base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _objectSpread({}, _base["default"], {
  /**
   * @inheritdoc
   */
  comparers: [_anyEquality["default"], _anyContain["default"]],

  /**
   * @inheritdoc
   */
  isFulfiled: function isFulfiled(definition, values) {
    var compare = definition.compare;
    var value = definition.value;

    if ((0, _lodash.isArray)(value)) {
      value = value.map(function (item) {
        return item.term_object.term_id;
      });
    } else if ((0, _lodash.isPlainObject)(value)) {
      value = value.term_object.term_id;
    }

    return this.firstComparerIsCorrect(this.getEnvironmentValue(definition, values), compare, value);
  },

  /**
   * @inheritdoc
   */
  getEnvironmentValue: function getEnvironmentValue(definition, values) {
    return (0, _lodash.get)(values, 'term_ancestors', []);
  }
});

exports["default"] = _default;