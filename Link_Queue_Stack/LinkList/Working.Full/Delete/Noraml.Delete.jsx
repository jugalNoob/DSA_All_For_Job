This is a very famous interview question.

Question:

Delete a node in a Linked List when only that node is given, and you do NOT have the head pointer.

This appears in companies like Amazon, Google, Microsoft.

1️⃣ Normal Delete (What We Usually Do)

Normally we delete like this:

prev.next = node.next


Example:

10 → 20 → 30 → 40


Delete 30

10 → 20 → 40


But this requires prev node.

2️⃣ The Interview Problem

You are only given this node:

30


List:

10 → 20 → 30 → 40


You do not know head and do not know previous node.

So you cannot do:

prev.next = node.next

3️⃣ The Trick Solution

Instead of deleting the node, copy the next node value into it.

Then remove the next node.

4️⃣ Example

Original list:

10 → 20 → 30 → 40
           ↑
         node


Step 1 — Copy value

node.value = node.next.value


List becomes:

10 → 20 → 40 → 40


Step 2 — Skip next node

node.next = node.next.next


Final list:

10 → 20 → 40


Node 30 is effectively deleted.

5️⃣ JavaScript Code
deleteNode(node){

    node.value = node.next.value
    node.next = node.next.next

}

6️⃣ Visual Explanation

Before:

10 → 20 → 30 → 40
           ↑
          node


Copy next value:

10 → 20 → 40 → 40


Remove next node:

10 → 20 → 40

7️⃣ Important Limitation

This does NOT work for the last node.

Example:

10 → 20 → 30
           ↑
         last node


Because:

node.next = null


No value to copy.

8️⃣ Time Complexity
O(1)


Very fast.

9️⃣ Why Interviewers Ask This

It tests your understanding of pointer manipulation.

Many developers think:

Delete node = remove node


But actually we overwrite and skip.

🔟 Interview Answer

If interviewer asks:

"How do you delete a node when only that node is given?"

Answer:

"We copy the value from the next node into the current node and then update the next pointer to skip the next node."

That answer sounds very strong.

✅ This problem appears in LeetCode Top Interview Questions.