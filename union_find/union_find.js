/*
  Read in number of objects N from standard input
  Repeat:
  - Read in pair of integers from standard input
  - If they are not yet connected, connect them and print out pair
*/

class QuickFind {
  constructor(numElements) {
    this.id = [];
    for (let i = 0; i < numElements; i++) {
      this.id[i] = i;
    }
  }

  union(p, q) {
    // temporary variable assignment crucial because of dynamic values
    let pId = this.id[p];
    let qId = this.id[q];
      for (let i = 0; i < this.id.length; i++) {
        if (this.id[i] === pId) {
          this.id[i] = qId;
        }
      }
      console.log(`(${p}, ${q})`);
  }

  connected(p, q) {
    return this.id[p] === this.id[q];
  }
}

/*
  Union is too expensive; combination with initialization results
  in quadratic behavior
*/
