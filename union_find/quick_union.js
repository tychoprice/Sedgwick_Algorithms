class QuickUnion {
  constructor(numElements) {
    this.id = [];
    for (let i = 0; i < numElements; i++) {
      this.id[i] = i;
    }
  }

  root(i) {
    while (this.id[i] !== i) {
      i = this.id[i];
    }
    return this.id[i];
  }

  union(p, q) {
    this.id[this.root(p)] = this.root(q);
  }

  connected(p, q) {
    return this.root(p) === this.root(q);
  }
}

//Union can result in trees that are too tall; still expensive
