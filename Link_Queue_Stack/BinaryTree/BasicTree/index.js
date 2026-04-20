class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}



🪜 Step 2: Add first node (root)
let root = new Node(10);


Now:

10

🪜 Step 3: Add children manually
root.left = new Node(20);
root.right = new Node(30);


Now:

    10
   /  \
 20   30

🧠 That’s already a Binary Tree

No complexity yet.

😌 Why it feels hard

Because people mix:

recursion ❌
BFS ❌
DFS ❌
insert logic ❌

But core idea is ONLY:

“Each node has 2 pointers”