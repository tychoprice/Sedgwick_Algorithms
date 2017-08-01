/*Basic Implementation:
  Trivial since push/pop already implemented in JS
*/
class stackOfStrings {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
    return this.stack;
  }

  pop() {
    return this.stack.pop();
  }

  isEmpty(){
    return this.stack[0] === undefined;
  }
}

//Linked-List Implementation
class linkedList {
  constructor() {
    this.head = null;
  }
/* Push:
  - If empty, first value pushed becomes 'head'
  - Change 'next' to point to second item
*/
  push(val) {
    let node = {
      value: val,
      next: null,
    };
  if (this.head === null) {
    this.head = node;
  } else {
    //point second item to node
    let current = this.head;
    while (current.next) {
      current = current.next;
      }
    current.next = node;
    }
  }

  delete(node) {
  }
}
