Your code:

ReverLink(){

    let pver=null
    let current=this.head
    this.tail=this.head

    while(current){
        let newnode=current.next
        current.next=pver
        pver=current
        current=newnode
    }

   this.head=pver

   return this
}


I'll explain using an example.

1️⃣ Starting Linked List

Suppose the list is:

10 → 20 → 30 → 40


Memory:

head
 ↓
10 → 20 → 30 → 40 → null
                     ↑
                    tail

2️⃣ Step 1 — Initialize Variables
let pver = null
let current = this.head
this.tail = this.head


State:

prev = null
current = 10
tail = 10


Visual:

prev   current
 ↓       ↓
null   10 → 20 → 30 → 40

3️⃣ First Loop Iteration
let newnode = current.next


Save next node:

newnode = 20

Reverse Pointer
current.next = pver


Change direction.

Before:

10 → 20


After:

10 → null

Move prev
pver = current

prev = 10

Move current
current = newnode

current = 20


State now:

prev      current
 ↓           ↓
10 → null   20 → 30 → 40

4️⃣ Second Iteration

Save next:

newnode = 30


Reverse link:

20.next = 10


Now:

20 → 10 → null


Move pointers:

prev = 20
current = 30


State:

prev
 ↓
20 → 10

current
 ↓
30 → 40

5️⃣ Third Iteration
newnode = 40
30.next = 20


List now:

30 → 20 → 10


Move pointers:

prev = 30
current = 40

6️⃣ Fourth Iteration
newnode = null
40.next = 30


Final reversed list:

40 → 30 → 20 → 10


Move pointers:

prev = 40
current = null


Loop stops.

7️⃣ Update Head
this.head = pver


Now:

head
 ↓
40 → 30 → 20 → 10 → null

8️⃣ Final Linked List
head
 ↓
40 → 30 → 20 → 10 → null
                       ↑
                      tail

9️⃣ Why this.tail = this.head

Before reversing:

head = 10
tail = 40


After reverse:

head = 40
tail = 10


So we set:

this.tail = this.head


before reversing.

🔟 The 3 Important Pointers

Reverse always uses:

prev
current
next


Pattern:

next = current.next
current.next = prev
prev = current
current = next


This is one of the most important patterns in DSA interviews.

⏱ Complexity

Time:

O(n)


Space:

O(1)


✅ This exact question is asked in many interviews like:

Reverse Linked List

Reverse Linked List II

Reverse in K Groups

Palindrome Linked List

All use this same pointer pattern.