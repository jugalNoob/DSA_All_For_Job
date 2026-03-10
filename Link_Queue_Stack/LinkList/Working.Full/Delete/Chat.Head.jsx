Your function deletes the first node (head) of the linked list. Let's explain very simply step-by-step.

Your code:

deletHead(){
    this.head = this.head.next
    this.size--
}

1️⃣ Starting Linked List

Example:

10 → 20 → 30 → 40

head
 ↓
10 → 20 → 30 → 40

2️⃣ What We Want

Delete the first node (10).

Result should be:

20 → 30 → 40

3️⃣ What This Line Does
this.head = this.head.next


Current head:

head
 ↓
10 → 20 → 30 → 40


this.head.next is 20.

So we move head to 20.

After:

head
 ↓
20 → 30 → 40


Node 10 is no longer connected to the list.

4️⃣ What Happens to Node 10?
10 → 20 → 30 → 40


After changing head:

20 → 30 → 40


Node 10 has no reference, so JavaScript garbage collector removes it automatically.

5️⃣ Decrease Size
this.size--


Before:

size = 4


After:

size = 3

6️⃣ Visual Diagram

Before delete:

head
 ↓
10 → 20 → 30 → 40


After delete:

head
 ↓
20 → 30 → 40


Node 10 disappears.

7️⃣ Important Edge Case

If list has only one node.

10


After deletion:

null


Better version:

deletHead(){

    if(!this.head) return

    this.head = this.head.next
    this.size--

}

8️⃣ Time Complexity
O(1)


Because we just move the head pointer.

9️⃣ Simple Rule

Deleting head means:

head = head.next


That’s all.

🔟 Real World Analogy

Think of a queue line:

10 → 20 → 30 → 40


When the first person leaves, the next person becomes first.

20 → 30 → 40


✅ This is the fastest operation in a Linked List.