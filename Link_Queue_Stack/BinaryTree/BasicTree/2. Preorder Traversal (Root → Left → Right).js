
🔁 2. Preorder Traversal (Root → Left → Right)
function preorder(node) {
  if (!node) return;

  console.log(node.data);
  preorder(node.left);
  preorder(node.right);
}
Output:
10
20
30
