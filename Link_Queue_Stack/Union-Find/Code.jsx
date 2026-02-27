class UnionFind {
  constructor(n) {
    this.parent = Array(n).fill(0).map((_, i) => i); // Each node is its own parent
    this.rank = Array(n).fill(1); // Used for union by rank
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX === rootY) return; // Already in same set

    // Union by rank
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX] += 1;
    }
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

// Example usage
const uf = new UnionFind(5);
uf.union(0, 1);
uf.union(1, 2);
uf.union(3, 4);

console.log(uf.connected(0, 2)); // true
console.log(uf.connected(0, 3)); // false
