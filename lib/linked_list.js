'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(data) {
  _classCallCheck(this, Node);

  this.data = data;
  this.next = null;
};

var LinkedList = function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  _createClass(LinkedList, [{
    key: 'showAll',
    value: function showAll() {
      var displayArray = [];
      var currentNode = this.head;

      if (!this.head) {
        return '*list is empty*';
      }

      while (currentNode.next != null) {
        displayArray.push(currentNode.data);
        currentNode = currentNode.next;
      }

      displayArray.push(currentNode.data);
      return displayArray;
    }
  }, {
    key: 'insert',
    value: function insert(data) {
      var thisNode = new Node(data);

      if (!this.head) {
        this.size++;
        return this.head = this.tail = thisNode;
      }

      this.tail.next = thisNode;
      this.tail = thisNode;
      this.size++;

      return this.tail;
    }
  }, {
    key: 'getTailNode',
    value: function getTailNode() {
      if (!this.tail) {
        return 'no tail present';
      } else {
        return this.tail.data;
      }
    }
  }, {
    key: 'getHeadNode',
    value: function getHeadNode() {
      if (!this.tail) {
        return 'no head present';
      } else {
        return this.head.data;
      }
    }
  }, {
    key: 'contains',
    value: function contains(data) {
      if (this.tail.data == data) {
        return true;
      }

      var currentNode = this.head;

      while (currentNode.next) {
        if (currentNode.data == data) {
          return 'true';
        }
        currentNode = currentNode.next;
      }
      return false;
    }
  }, {
    key: 'find',
    value: function find(dataSubstr) {
      if (this.tail.data.includes(dataSubstr)) {
        return this.tail.data;
      }

      var currentNode = this.head;

      while (currentNode.next) {
        if (currentNode.data.includes(dataSubstr)) {
          return currentNode.data;
        }
        currentNode = currentNode.next;
      }
      return '-1';
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.size > 0 ? false : true;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.head = null;
      this.size = 0;
      return 'list cleared';
    }
  }, {
    key: 'insertFirst',
    value: function insertFirst(data) {
      var node = new Node(data);
      node.next = this.head;
      this.size++;
      return this.head = node;
    }
  }, {
    key: 'insertAfter',
    value: function insertAfter(data) {
      var node = new Node(data);
      this.tail.next = node;
      this.tail = node;
      this.size++;
    }
  }, {
    key: 'removeFirst',
    value: function removeFirst() {
      var node = this.head.next;
      this.head = node;
      this.size--;
      return 'removed first node';
    }
  }, {
    key: 'remove',
    value: function remove() {
      var checkSize = 0;
      var currentNode = this.head;
      var sizeMinus2 = this.size - 2;
      while (currentNode && checkSize < sizeMinus2) {
        currentNode = currentNode.next;
        checkSize++;
      }
      currentNode.next = null;
      this.tail = currentNode;
      this.size--;
      return 'removed tail node';
    }
  }]);

  return LinkedList;
}();

exports.default = LinkedList;