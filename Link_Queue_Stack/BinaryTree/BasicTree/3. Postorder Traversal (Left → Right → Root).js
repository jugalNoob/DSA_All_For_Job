🔁 3. Postorder Traversal (Left → Right → Root)
function postorder(node) {
  if (!node) return;

  postorder(node.left);
  postorder(node.right);
  console.log(node.data);
}

Output:
20
30
10