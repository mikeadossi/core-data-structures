'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* RUN TESTS ON CODE BELOW BY RUNNING 'npm test' in src directory */
var PQueue = function () {
  function PQueue() {
    _classCallCheck(this, PQueue);

    this.dataStore = {
      0: { 'ds': [] }
    };
    this.size = null;
  }

  _createClass(PQueue, [{
    key: 'enqueue',
    value: function enqueue(element, priority) {

      if (!this.dataStore[priority]) {
        this.dataStore[priority] = { 'ds': [] };
        this.dataStore[priority]['ds'].push(element);
      } else {
        this.dataStore[priority]['ds'].push(element);
      }
      this.size++;
      return this.showAll();
    }
  }, {
    key: 'front',
    value: function front() {
      var allElements = this.showAll();
      console.log(allElements);
      return allElements[0][0];
    }
  }, {
    key: 'dequeue',
    value: function dequeue() {
      if (this.size != null) {
        if (this.dataStore[Object.keys(this.dataStore).length - 1]['ds'] != null) {
          if (this.dataStore[Object.keys(this.dataStore).length - 1]['ds'].length === 1) {
            console.log(this.dataStore[Object.keys(this.dataStore).length - 1]['ds'][0]);
            console.log('~');
            delete this.dataStore[Object.keys(this.dataStore).length - 1];
          } else if (this.dataStore[Object.keys(this.dataStore).length - 1]['ds'].length > 1) {
            this.dataStore[Object.keys(this.dataStore).length - 1]['ds'].splice(0, 1);
          }
        } else {
          delete this.dataStore[Object.keys(this.dataStore).length - 1];
        }
      }
      return this.showAll();
    }
  }, {
    key: 'back',
    value: function back() {
      var allElements = this.showAll();
      var bla = [[4, 5], [1, 2], [2, 3]];

      var lastArray = allElements.length - 1;
      var lastItem = allElements[lastArray];
      var solution = lastItem[lastItem.length - 1];

      return solution;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.size ? false : true;
    }
  }, {
    key: 'length',
    value: function length() {
      return this.size;
    }
  }, {
    key: 'showAll',
    value: function showAll() {

      var allItems = [];for (var i = Object.keys(this.dataStore).length - 1; i > -1; i--) {
        allItems.push(this.dataStore[i]['ds']);
      }

      return allItems;
    }
  }]);

  return PQueue;
}();

exports.default = PQueue;