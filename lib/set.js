'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Set = function () {
  function Set() {
    _classCallCheck(this, Set);

    this.dataStore = [];
    this.size = 0;
  }

  _createClass(Set, [{
    key: 'add',
    value: function add(element) {
      this.dataStore[this.size++] = element;
      return '+1';
    }
  }, {
    key: 'contains',
    value: function contains() {
      return this.size > 0 ? 'true' : 'false';
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.size = 0 ? false : true;
    }
  }, {
    key: 'remove',
    value: function remove(indexNum) {
      console.log(this.dataStore[indexNum] + ' is removed.');
      this.dataStore.splice(indexNum, 1);
      this.size--;
    }
  }, {
    key: 'show',
    value: function show(indexNum) {
      return this.dataStore[indexNum];
    }
  }, {
    key: 'length',
    value: function length() {
      return this.size;
    }
  }, {
    key: 'showAll',
    value: function showAll() {
      var elementsInStore = [];
      for (var i = 0; i < this.size; i++) {
        elementsInStore.push(this.dataStore[i]);
      }
      return elementsInStore;
    }
  }, {
    key: 'forEach',
    value: function forEach(func) {
      var elementsInStore = [];
      for (var i = 0; i < this.size; i++) {
        elementsInStore.push(func(this.dataStore[i]));
      }
      return elementsInStore;
    }
  }, {
    key: 'union',
    value: function union(secondSet) {
      var union = [];
      union.push(this.dataStore);
      union.push(secondSet.dataStore);
      return union;
    }
  }, {
    key: 'intersect',
    value: function intersect(secondSet) {

      var intersectorsStore = [];
      if (secondSet.dataStore > this.dataStore) {
        for (var i = 0; i <= secondSet.size; i++) {
          for (var _x = 0; _x < this.size; _x++) {
            if (this.dataStore[i] == secondSet.dataStore[_x]) {
              intersectorsStore.push(this.dataStore[i]);
            }
          }
        }
        return intersectorsStore;
      } else {

        for (var _i = 0; _i <= this.size; _i++) {
          for (var _x2 = 0; _x2 < secondSet.size; _x2++) {
            if (secondSet.dataStore[_i] == this.dataStore[_x2]) {
              intersectorsStore.push(secondSet.dataStore[_i]);
            }
          }
        }
        return intersectorsStore;
      }
    }

    /* ~~~~~~~~~~~~~~~~~ THE holy shrine of checkFrequency ~~~~~~~~~~~~~~~~~~~~~~~~ */

  }, {
    key: 'checkFrequency',
    value: function checkFrequency(frequency) {
      var setArr = this.dataStore;
      var solution = [];
      var freqOfAppearance = 0;

      for (var i = 0; i <= setArr.length; i++) {
        freqOfAppearance = 0;
        for (x = i; x < setArr.length; x++) {
          if (setArr[i] == setArr[x]) {
            freqOfAppearance++;
          } else {
            //i = i+1
            i = x;
            x = i - 1;
            freqOfAppearance = 0;
          }
          if (freqOfAppearance > frequency - 1) {
            if (setArr[i] == solution[solution.length - 1]) {} else {
              solution.push(setArr[i]);
            }
            if (x == setArr.length) {
              i = setArr.length + 1;
            }
          }
        }
      }
    }

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

  }, {
    key: 'checkFrequencyy',
    value: function checkFrequencyy(dataStore, frequency) {
      var setArr = dataStore;
      var solution = [];
      var freqOfAppearance = 0;

      for (var i = 0; i <= setArr.length; i++) {
        freqOfAppearance = 0;
        for (var _x3 = i; _x3 < setArr.length; _x3++) {
          if (setArr[i] == setArr[_x3]) {
            freqOfAppearance++;
          } else {
            //i = i+1
            i = _x3;
            _x3 = i - 1;
            freqOfAppearance = 0;
          }
          if (freqOfAppearance > frequency - 1) {
            if (setArr[i] == solution[solution.length - 1]) {} else {
              solution.push(setArr[i]);
            }
            if (_x3 == setArr.length) {
              i = setArr.length + 1;
            }
          }
        }
      }
    }
  }, {
    key: 'difference',
    value: function difference(secondSet) {

      var count = 0;
      var thisSetDiff = [];
      var secondSetDiff = [];
      var solution;
      var secondSetDataStore = secondSet.dataStore.sort(function (a, b) {
        return a - b;
      });

      for (var i = 0; i < this.size; i++) {
        for (var _x4 = 0; _x4 < secondSetDataStore.length; _x4++) {
          if (this.dataStore[i] != secondSetDataStore[_x4]) {
            count++;
            if (count >= secondSetDataStore.length && thisSetDiff[thisSetDiff.length - 1] != this.dataStore[i]) {
              thisSetDiff.push(this.dataStore[i]);
            }
            if (secondSetDataStore[_x4] != secondSetDataStore[secondSetDataStore.length - 1]) {
              secondSetDiff.push(secondSetDataStore[_x4]);
            }
          }
        }count = 0;
      }
    }
  }]);

  return Set;
}();

exports.default = Set;