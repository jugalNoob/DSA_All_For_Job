3️⃣ Example List
10 → 20 → 20 → 30 → 30 → 40


Goal:

10 → 20 → 30 → 40

4️⃣ Step-by-Step
Start
current = 10

10 → 20 → 20 → 30 → 30 → 40
 ↑
current


Check:

10 === 20 ? ❌


Move current.

Step 2
current = 20

10 → 20 → 20 → 30 → 30 → 40
      ↑
    current


Check:

20 === 20 ? ✅


Remove duplicate.

current.next = current.next.next


List becomes:

10 → 20 → 30 → 30 → 40

Step 3
current = 20


Check:

20 === 30 ? ❌


Move current.

Step 4
current = 30

10 → 20 → 30 → 30 → 40
           ↑
        current


Check:

30 === 30 ? ✅


Remove duplicate.

List becomes:

10 → 20 → 30 → 40

5️⃣ Final List
10 → 20 → 30 → 40


Duplicates removed.

6️⃣ Visual Summary

Before:

10 → 20 → 20 → 30 → 30 → 40


After:

10 → 20 → 30 → 40

7️⃣ Key Idea

We compare current node with next node.

If equal:

skip next node

current.next = current.next.next

8️⃣ Time Complexity
O(n)


Space:

O(1)

9️⃣ Important Note

This algorithm works when the list is sorted.

Example:

10 → 20 → 20 → 30 → 30


If list is unsorted, we must use HashSet.

✅ This is a common linked list interview problem.

If you want, I can also show you 3 very important Linked List interview problems that appear frequently:

1️⃣ Detect Cycle (Floyd Algorithm)
2️⃣ Reverse Linked List in K Groups
3️⃣ Merge Two Sorted Linked Lists

These are very popular interview questions.