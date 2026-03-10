Good question 👍 Let's understand how AppenNode() works step-by-step in very simple way.

Your function:

AppenNode(data){

    let newnode={
        value:data,
        next:null
    }
    this.tail.next=newnode
    this.tail=newnode
    this.size++
}

1️⃣ First Linked List State

When you create:

let link = new LINKED(10)


List looks like:

head
 ↓
[10 | null]
 ↑
tail


Object:

{
 head:{ value:10 , next:null },
 tail:{ value:10 , next:null },
 size:1
}

2️⃣ Call Append
link.AppenNode(20)


Now function runs.

3️⃣ Step 1 — Create New Node
let newnode={
   value:data,
   next:null
}


If data = 20

newnode

[20 | null]


This node is not connected yet.

4️⃣ Step 2 — Connect Old Tail to New Node
this.tail.next = newnode


Old list:

[10 | null]


Now:

[10 | • ] → [20 | null]


Because:

10.next = newnode

5️⃣ Step 3 — Move Tail
this.tail = newnode


Now tail moves to the new last node.

head
 ↓
[10 | • ] → [20 | null]
             ↑
            tail

6️⃣ Step 4 — Increase Size
this.size++


Now:

size = 2

7️⃣ Final Object
{
 head:{
      value:10,
      next:{
            value:20,
            next:null
           }
      },

 tail:{
      value:20,
      next:null
      },

 size:2
}

8️⃣ If You Append Again
link.AppenNode(30)


Steps repeat.

Result:

head
 ↓
[10 | • ] → [20 | • ] → [30 | null]
                           ↑
                          tail

9️⃣ Why tail is Important

Because append becomes O(1).

Without tail:

10 → 20 → 30


To add 40, you must traverse list.

10 → 20 → 30 → 40


That would be:

O(n)


With tail pointer:

tail.next = newnode
tail = newnode


Time complexity:

O(1)

🔟 Simple Rule

Append always does:

1 Create node
2 Connect tail.next
3 Move tail
4 Increase size


✅ This is exactly how Linked Lists are implemented in real systems (C, Java, Node.js internals).