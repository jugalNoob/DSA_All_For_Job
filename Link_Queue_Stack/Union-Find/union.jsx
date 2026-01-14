🔧 Union-Find (Disjoint Set Union) in JavaScript
✅ Features:
Union(x, y): Connect two sets

Find(x): Find the representative (root) of the set containing x

Optimized with Path Compression and Union by Rank



🧠 Use Cases:


| Use Case                | Example                                |
| ----------------------- | -------------------------------------- |
| Cycle Detection         | In undirected graphs                   |
| Connected Components    | Number of friend groups                |
| Kruskal's MST Algorithm | Minimum Spanning Tree                  |
| Network Connectivity    | Merging and querying connected systems |
| Social Network Analysis | Finding mutual friends/clusters        |



✅ JavaScript Code Example
js
Copy
Edit
class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = Array(size).fill(0);
  }

  // 🔍 Find with Path Compression
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  // 🔗 Union by Rank
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX === rootY) return false; // Already connected

    if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }

    return true;
  }
}
🔍 Example Usage:
js
Copy
Edit
const uf = new UnionFind(5); // Create 5 disjoint sets: 0,1,2,3,4

uf.union(0, 1);
uf.union(1, 2);

console.log(uf.find(0)); // Output: representative (e.g., 0)
console.log(uf.find(2)); // Output: same representative as 0

console.log(uf.find(3)); // Output: 3 (not connected to 0/1/2)
🧠 Visualization:
txt
Copy
Edit
Initial:   [0] [1] [2] [3] [4]
After union(0,1):  0—1
After union(1,2):  0—1—2
If you want:

Cycle detection with Union-Find

Kruskal’s MST with Union-Find

Visual explanation
Let me know — I’ll add those too!









Ask ChatGPT
