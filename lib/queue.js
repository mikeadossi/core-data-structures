"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* RUN TESTS ON CODE BELOW BY RUNNING 'npm test' in src directory */
var Queue = function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.dataStore = [];
    this.size = null;
  }

  _createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(element) {
      this.dataStore[this.size++] = element;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.dataStore.splice(0, 1);
      this.size--;
    }
  }, {
    key: "dequeue",
    value: function dequeue(element) {
      if (this.size != null) {
        this.clear();
        return this.dataStore[0];
      }
    }
  }, {
    key: "clearTill",
    value: function clearTill(number) {
      this.dataStore.splice(0, number);
      for (var i = null; i < number; i++) {
        this.size--;
      }
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      var size = this.size;
      this.dataStore.splice(0, size + 1);
      this.size = null;
    }
  }, {
    key: "length",
    value: function length(element) {
      return this.size;
    }
  }, {
    key: "front",
    value: function front() {
      return this.dataStore[0];
    }
  }, {
    key: "back",
    value: function back() {
      return this.dataStore[this.size - 1];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size == null ? true : false;
    }
  }]);

  return Queue;
}();

exports.default = Queue;