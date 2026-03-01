Got it 👍
You want Singly Linked List – INSERT code, explained very simply.

I’ll show 3 common insert types (this is exactly what interviews expect).

🔗 Singly Linked List – Basic Structure
class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null
    };
    this.tail = this.head;
    this.size = 1;
  }

1️⃣ Insert at END (Most common)
  insertAtEnd(data) {
    const newNode = {
      value: data,
      next: null
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

🔍 Meaning

Create new node

Point current tail.next to it

Move tail

Increase size

2️⃣ Insert at BEGINNING
  insertAtStart(data) {
    const newNode = {
      value: data,
      next: this.head
    };

    this.head = newNode;
    this.size++;
  }

🔍 Meaning

New node points to old head

Head moves to new node

3️⃣ Insert at POSITION (1-based index)
  insertAtPosition(data, position) {
    if (position < 1 || position > this.size + 1) {
      console.log("Invalid position");
      return;
    }

    if (position === 1) {
      this.insertAtStart(data);
      return;
    }

    if (position === this.size + 1) {
      this.insertAtEnd(data);
      return;
    }

    let current = this.head;
    let count = 1;

    while (count < position - 1) {
      current = current.next;
      count++;
    }

    const newNode = {
      value: data,
      next: current.next
    };

    current.next = newNode;
    this.size++;
  }
}

🧪 Test Code
let list = new LinkedList(10);

list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtStart(5);
list.insertAtPosition(15, 3);

// Final list: 5 → 10 → 15 → 20 → 30
console.log(list);

🧠 Interview Notes (Important)


| Insert Type        | Time Complexity |
| ------------------ | --------------- |
| At start           | O(1)            |
| At end (with tail) | O(1)            |
| At position        | O(n)            |



🎤 Interview One-Liner

In a singly linked list, insertion at the beginning and end is O(1), while insertion at a given position requires traversal and is O(n).

If you want next 👇

❌ Delete node code

🔁 Reverse linked list

🔍 Search node

🔄 Circular insert

