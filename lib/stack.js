'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.dataStore = [];
    this.top = 0;
  }

  _createClass(Stack, [{
    key: 'push',
    value: function push(element) {
      this.dataStore[this.top++] = element;
      console.log('pushed!');
    }
  }, {
    key: 'pop',
    value: function pop() {
      return this.dataStore[--this.top];
    }
  }, {
    key: 'peek',
    value: function peek() {
      console.log(this.dataStore[this.top - 1]);
      return this.dataStore[this.top - 1];
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      console.log(this.dataStore.length <= 0);
      return this.dataStore.length <= 0;
    }
  }, {
    key: 'length',
    value: function length() {
      console.log(this.top);
      return this.top;
    }
  }, {
    key: 'returnStackedElement',
    value: function returnStackedElement(indexPos) {
      for (var i = this.top; i < indexPos; --i) {
        console.log('popped element on index ' + this.top);
        this.top = i;
      }
      console.log(this.dataStore[this.top]);
      return this.dataStore[this.top];
    }
  }]);

  return Stack;
}();

// below we share an example of how you might console log the results of our stack ds in your CLI.


var stack = new Stack();
stack.push('10');
stack.length();
stack.returnStackedElement();

module.exports = Stack;