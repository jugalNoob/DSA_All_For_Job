🔁 1. Inorder Traversal (Left → Root → Right)
function inorder(node) {
  if (!node) return;

  inorder(node.left);
  console.log(node.data);
  inorder(node.right);
}

Example output:
20
10
30

