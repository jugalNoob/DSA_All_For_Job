Reverse(){

    let prev = null
    let current = this.head
    this.tail = this.head   // old head becomes new tail

    while(current){
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }

    this.head = prev
    return this
}

    🧠 What Reversing Means

If list is:

5 → 10 → 20 → null


After reverse:

20 → 10 → 5 → null


We are changing arrow direction.



🎯 Important Concept

To reverse a linked list, we need 3 pointers:


| Pointer               | Purpose                     |
| --------------------- | --------------------------- |
| prev                  | holds previous node         |
| current               | current node                |
| next (your `newnode`) | store next node temporarily |


Because if we change current.next, we lose access to the rest of list.

🔥 Step-by-Step Example

Initial list:

head
 ↓
[5 | •] → [10 | •] → [20 | null]

🔹 Before Loop Starts
prev = null
current = 5

🔥 Iteration 1
Step 1: Save next node
let newnode = current.next

newnode → 10

Step 2: Reverse pointer
current.next = prev


Now:

5 → null


Because prev is null.

Step 3: Move prev forward
prev = current

prev → 5

Step 4: Move current forward
current = newnode

current → 10

🔎 List Now Looks Like:
Reversed Part:
5 → null

Remaining:
10 → 20 → null

🔥 Iteration 2
Save next
newnode → 20

Reverse
10 → 5 → null

Move prev
prev → 10

Move current
current → 20

🔎 Now:
Reversed:
10 → 5 → null

Remaining:
20 → null

🔥 Iteration 3
Save next
newnode → null

Reverse
20 → 10 → 5 → null

Move prev
prev → 20

Move current
current → null

🛑 Loop Stops

Because:

while(current)


current is now null ❌

🔥 Final Step
this.head = prev


Now head becomes:

head
 ↓
20 → 10 → 5 → null

🎯 Final Output
20
10
5

⚡ Time & Space Complexity

| Type  | Value  |
| ----- | ------ |
| Time  | O(n)   |
| Space | O(1) ✅ |



Why O(1)?
Because no extra array or recursion stack used.

🧠 Why We Store newnode First?

If we do this wrong:

current.next = prev
current = current.next


You lose rest of list forever ❌

That’s why order matters:

Save next

Reverse pointer

Move prev

Move current

🏆 One Important Missing Thing in Your Code

You forgot to update tail.

After reversing, old head becomes new tail.

Better version:

Reverse(){

    let prev = null
    let current = this.head
    this.tail = this.head   // old head becomes new tail

    while(current){
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }

    this.head = prev
    return this
}

💡 Easy Memory Trick

Think like:

Break → Reverse → Move
Break → Reverse → Move
Break → Reverse → Move


Until list finishes.

🔥 Interview Level Questions From This

Reverse using recursion?

Reverse in groups of K?

Reverse between position m and n?

Detect if list is palindrome?