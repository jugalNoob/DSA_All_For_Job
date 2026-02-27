class DoublyLinkedList {
  constructor(data) {
    this.head = {
      prev: null,
      value: data,
      next: null
    };

    this.tail = this.head;
    this.size = 1;
  }

  // ➕ Insert at end
  appendNode(data) {
    const newNode = {
      prev: this.tail,
      value: data,
      next: null
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  // ➖ Delete by position (1-based index)
  deleteNode(position) {
    if (position < 1 || position > this.size) {
      console.log("Invalid position");
      return;
    }

    // delete head
    if (position === 1) {
      this.head = this.head.next;

      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }

      this.size--;
      return;
    }

    let current = this.head;
    let count = 1;

    while (count < position) {
      current = current.next;
      count++;
    }

    // update links
    current.prev.next = current.next;

    if (current.next) {
      current.next.prev = current.prev;
    } else {
      // deleting tail
      this.tail = current.prev;
    }

    this.size--;
  }

  // 🔍 Search value
  searchNode(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }

    return false;
  }

  // ➡️ Traverse forward
  traverseForward() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // ⬅️ Traverse backward
  traverseBackward() {
    let current = this.tail;
    while (current) {
      console.log(current.value);
      current = current.prev;
    }
  }
}



🧪 3️⃣ Test the Doubly Linked List
let dll = new DoublyLinkedList(10);

dll.appendNode(20);
dll.appendNode(30);
dll.appendNode(40);

console.log("Forward traversal:");
dll.traverseForward();     // 10 20 30 40

console.log("Backward traversal:");
dll.traverseBackward();    // 40 30 20 10

dll.deleteNode(2);         // delete 20

console.log("After deletion:");
dll.traverseForward();     // 10 30 40

console.log(dll.searchNode(30)); // true
console.log(dll.searchNode(50)); // false

🧠 Interview Notes (Very Important)
Time Complexity



| Operation | Time |
| --------- | ---- |
| Insert    | O(1) |
| Delete    | O(n) |
| Search    | O(n) |
| Traverse  | O(n) |



Space Complexity

O(n) (extra prev pointer)

⭐ One-Line Interview Explanation

A Doubly Linked List stores references to both previous and next nodes, allowing efficient forward and backward traversal.
