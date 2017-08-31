class Stack {

  constructor() {
    this.dataStore = []
    this.top = 0
  }
  push(element) {
    this.dataStore[this.top++] = element;
    console.log('pushed!');
  }
  pop() {
    return this.dataStore[--this.top];
  }
  peek() {
    console.log(this.dataStore[this.top-1])
    return this.dataStore[this.top-1]
  }
  isEmpty() {
    console.log(this.dataStore.length <= 0)
    return this.dataStore.length <= 0
  }
  length() {
    console.log(this.top);
    return this.top
  }
  returnStackedElement(indexPos){
    for(let i = this.top; i < indexPos ; --i){
      console.log('popped element on index '+this.top)
      this.top = i
    }
    console.log(this.dataStore[this.top])
    return this.dataStore[this.top]
  }
}

// below we share an example of how you might console log the results of our stack ds in your CLI.
var stack = new Stack()
stack.push('10');
stack.length();
stack.returnStackedElement();

module.exports = Stack;
