'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React = React,
    Component = _React.Component;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;

var IndecisionApp = function (_Component) {
  _inherits(IndecisionApp, _Component);

  function IndecisionApp() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IndecisionApp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      options: []
    }, _this.handleDeleteOptions = function () {
      _this.setState(function () {
        return { options: [] };
      });
    }, _this.handlePick = function () {
      var options = _this.state.options;

      var randomNum = Math.floor(Math.random() * options.length);
      var option = options[randomNum];
      alert(option);
    }, _this.handleAddOption = function (option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (_this.state.options.indexOf(option) > -1) {
        return option + ' already exists';
      }

      _this.setState(function (prevState) {
        return {
          options: [].concat(_toConsumableArray(prevState.options), [option])
        };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(IndecisionApp, [{
    key: 'render',
    value: function render() {
      var title = 'Indecision App';
      var subtitle = 'Put your hands in the life of a computer';
      var options = this.state.options;

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(Component);

var Header = function (_Component2) {
  _inherits(Header, _Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          subtitle = _props.subtitle;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          title
        ),
        React.createElement(
          'h2',
          null,
          subtitle
        )
      );
    }
  }]);

  return Header;
}(Component);

var Action = function (_Component3) {
  _inherits(Action, _Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          hasOptions = _props2.hasOptions,
          handlePick = _props2.handlePick;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          {
            onClick: handlePick,
            disabled: !hasOptions
          },
          'What should I do?'
        )
      );
    }
  }]);

  return Action;
}(Component);

var Options = function (_Component4) {
  _inherits(Options, _Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          options = _props3.options,
          handleDeleteOptions = _props3.handleDeleteOptions;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: handleDeleteOptions },
          'Remove all'
        ),
        options.map(function (option) {
          return React.createElement(Option, { key: option, option: option });
        })
      );
    }
  }]);

  return Options;
}(Component);

var Option = function (_Component5) {
  _inherits(Option, _Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      var option = this.props.option;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          option
        )
      );
    }
  }]);

  return Option;
}(Component);

var AddOption = function (_Component6) {
  _inherits(AddOption, _Component6);

  function AddOption() {
    var _ref2;

    var _temp2, _this6, _ret2;

    _classCallCheck(this, AddOption);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this6 = _possibleConstructorReturn(this, (_ref2 = AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call.apply(_ref2, [this].concat(args))), _this6), _this6.state = {
      error: ''
    }, _this6.handleAddOption = function (evt) {
      evt.preventDefault();
      var handleAddOption = _this6.props.handleAddOption;

      var option = evt.target.elements.option.value.trim();
      var error = handleAddOption(option);
      evt.target.elements.option.value = '';
      _this6.setState(function () {
        return {
          error: error
        };
      });
    }, _temp2), _possibleConstructorReturn(_this6, _ret2);
  }

  _createClass(AddOption, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', placeholder: 'Add option', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(Component);

render(React.createElement(IndecisionApp, null), document.getElementById('app'));
