Nice 👍
Let’s do Circular Singly Linked List in the simplest possible way, with clean code + plain explanation.

🔁 What is Circular Singly Linked List (1 line)

A circular singly linked list is a list where the last node points back to the head, not null.

10 → 20 → 30
 ↑             ↓
 └─────────────┘

✅ Simple Circular Singly Linked List (JS)
class CircularLinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null
    };

    // last node points to head
    this.head.next = this.head;

    this.tail = this.head;
    this.size = 1;
  }

  // ➕ Insert at end
  appendNode(data) {
    const newNode = {
      value: data,
      next: this.head
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  // 🔁 Traverse (important part)
  traverse() {
    if (!this.head) return;

    let current = this.head;

    do {
      console.log(current.value);
      current = current.next;
    } while (current !== this.head);
  }
}

🧠 Why do...while loop?

Because:

In circular list, no null

We must stop when we come back to head

do {
  // work
} while (current !== head);


This is the key concept ⭐

🧪 Test Code
let cll = new CircularLinkedList(10);

cll.appendNode(20);
cll.appendNode(30);
cll.appendNode(40);

cll.traverse();

Output
10
20
30
40

🎯 Interview Points (remember this)

Last node → points to head

No null in list

Traversal uses do-while

Used in round-robin scheduling

🆚 Circular vs Normal Singly


| Feature   | Singly LL | Circular Singly LL         |
| --------- | --------- | -------------------------- |
| Last node | null      | head                       |
| Loop risk | ❌         | ⚠️ (must handle carefully) |
| Traversal | while     | do-while                   |
