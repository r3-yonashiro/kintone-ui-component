var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

var AbstractMultiSelection = function (_React$Component) {
    _inherits(AbstractMultiSelection, _React$Component);

    function AbstractMultiSelection() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AbstractMultiSelection);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AbstractMultiSelection.__proto__ || Object.getPrototypeOf(AbstractMultiSelection)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: _this.props.value,
            items: _this.props.items
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AbstractMultiSelection, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var newValue = nextProps.value || this.state.value;
            var newItems = nextProps.items || this.state.items;
            this.setState({
                value: newValue,
                items: newItems
            });
        }
    }, {
        key: '_getValue',
        value: function _getValue() {
            return this.state.value;
        }
    }, {
        key: '_setValue',
        value: function _setValue(value) {
            if (!this.props.items) {
                return;
            }

            this.setState({ value: value });
        }
    }, {
        key: '_setDisabledItem',
        value: function _setDisabledItem(value, isDisabled) {
            if (!this.props.items) {
                return;
            }
            this.setState(function (prevState) {
                var newItems = [].concat(_toConsumableArray(prevState.items));

                newItems.forEach(function (item, i) {
                    if (item.value === value) {
                        newItems[i].isDisabled = isDisabled;
                    }
                });
                return { items: newItems };
            });
        }
    }, {
        key: '_getItems',
        value: function _getItems() {
            return this.props.items;
        }
    }, {
        key: '_getItem',
        value: function _getItem(index) {
            return this.props.items[index];
        }
    }, {
        key: '_hasDuplicatedItems',
        value: function _hasDuplicatedItems() {
            var unique = {};
            var isUnique = true;
            if (this.props.items) {
                this.props.items.forEach(function (val, i) {
                    if (typeof unique[val.value] !== 'undefined') {
                        isUnique = false;
                    }
                    unique[val.value] = 0;
                });
            }

            return isUnique;
        }
    }, {
        key: '_hasValidValue',
        value: function _hasValidValue() {
            var validValues = [];
            this.props.items.forEach(function (item) {
                validValues.push(item.value);
            });

            if (this.props.value === undefined) {
                return true;
            }

            if (this.state.value instanceof Array) {
                return this.state.value.every(function (val) {
                    return validValues.indexOf(val) >= 0;
                });
            }

            return false;
        }
    }]);

    return AbstractMultiSelection;
}(React.Component);

AbstractMultiSelection.propTypes = {
    items: PropTypes.array,
    value: PropTypes.array,
    isVisible: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    onChange: PropTypes.func
};
AbstractMultiSelection.defaultProps = {
    onChange: function onChange(f) {
        return f;
    },
    onClick: function onClick(f) {
        return f;
    }
};
export default AbstractMultiSelection;