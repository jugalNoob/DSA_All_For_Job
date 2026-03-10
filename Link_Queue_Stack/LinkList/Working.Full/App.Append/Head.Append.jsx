Good question 👍 I will explain very simple step-by-step how HeadApp() works.

Your function:

HeadApp(data){

    let newnode={
        value:data,
        next:this.head
    }

    this.head=newnode
    this.size++
}


This function adds a new node at the beginning of the Linked List.

1️⃣ Example Starting List

Suppose the list is:

10 → 20 → 30


Memory:

head
 ↓
[10 | • ] → [20 | • ] → [30 | null]

2️⃣ Call Function
link.HeadApp(5)


We want:

5 → 10 → 20 → 30

3️⃣ Step 1 — Create New Node
let newnode={
    value:data,
    next:this.head
}


If data = 5

newnode

[5 | • ]


next points to old head (10).

So now:

[5 | • ] → [10 | • ] → [20 | • ] → [30 | null]


But head still points to 10.

4️⃣ Step 2 — Move Head
this.head = newnode


Now head moves to the new node.

head
 ↓
[5 | • ] → [10 | • ] → [20 | • ] → [30 | null]

5️⃣ Step 3 — Increase Size
this.size++


List length increases.

6️⃣ Visual Step-by-Step

Before:

head
 ↓
10 → 20 → 30


Create node:

5 → 10 → 20 → 30


Move head:

head
 ↓
5 → 10 → 20 → 30

7️⃣ Simple Rule

Head insert always does:

1 Create node
2 Point newnode.next → old head
3 Move head → newnode
4 Increase size

8️⃣ Time Complexity
O(1)


No traversal needed.

9️⃣ Real World Analogy

Think of a train 🚆.

Current train:

10 → 20 → 30


You add new compartment at front:

5 → 10 → 20 → 30


You just attach new coach before the first coach.

✅ This operation is called Prepend (Head Insert).