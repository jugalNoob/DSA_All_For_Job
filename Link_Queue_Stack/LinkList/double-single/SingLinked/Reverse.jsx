class LINK{

    constructor(data){
        this.head={
            value:data,
            next:null
        },
        this.tail=this.head
           this.size=1
    }



    ReverseNode() {
  let prev = null;
  let current = this.head;
  this.tail = this.head;
  while (current) {
    let nextNode = current.next; // save next
    current.next = prev;         // reverse link
    prev = current;              // move prev
    current = nextNode;          // move current
  }
  this.head = prev;
  return this; // so console.log shows the list
}
}

 


        

let link=new LINK(10)
link.AppendNode(20)
link.AppendNode(30)
link.AppendNode(40)
link.ReverseNode()

console.log(link)


// ---------------------------->>
// ---------------------------->>
// ---------------------------->>

✅ Fixed ReverseNode() method
ReverseNode() {
  let prev = null;
  let current = this.head;

  this.tail = this.head; // old head becomes tail

  while (current) {
    let nextNode = current.next; // 1️⃣ save next
    current.next = prev;         // 2️⃣ reverse link
    prev = current;              // 3️⃣ move prev
    current = nextNode;          // 4️⃣ move current
  }

  this.head = prev;
}


🔍 Dry run (10 → 20 → 30 → 40)


| Step  | prev | current | link    |
| ----- | ---- | ------- | ------- |
| start | null | 10      | 10 → 20 |
| 1     | 10   | 20      | 10 ←    |
| 2     | 20   | 30      | 20 ← 10 |
| 3     | 30   | 40      | 30 ← 20 |
| 4     | 40   | null    | 40 ← 30 |



✅ Head becomes 40, Tail becomes 10

🧪 Output after fix
LINK {
  head: { value: 40, next: { value: 30, next: [Object] } },
  tail: { value: 10, next: null },
  size: 4
}

⚠️ Small improvement (optional)

Handle empty or single-node list:

if (!this.head || !this.head.next) return;

🎯 Interview one-liner

“Reversing a linked list is done by iterating once and reversing pointers
 using three variables: prev, current, and next.”



:::::::::::: Rever Linit List -------------------->>


🥇 1. Reverse a Linked List
Problem:

Reverse a singly linked list.

Concept:

Use 3 pointers → prev, current, next

function reverse(head) {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}


⏱ O(n) time
📦 O(1) space