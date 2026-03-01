class LINK{
    constructor(data){
        this.head={
            value:data,
            next:null
        }
        this.tail=this.head
        this.size=1
    }

    AppendNode(data){
        let newnode={
            value:data,
            next:null
        }
        this.tail.next=newnode
        this.tail=newnode // last node 
        this.size++
    }
}

const link=new LINK(10)
link.AppendNode(20)
console.log(link)




✅ 1️⃣ When You Create the List
const link = new LINK(10)

What Happens Inside Constructor?
constructor(data){
    this.head = {
        value: data,
        next: null
    }
    this.tail = this.head
    this.size = 1
}

🔹 Internal Structure After Creation
head
 ↓
[ 10 | null ]
 ↑
tail

Explanation:

A node object is created:

{ value: 10, next: null }


head points to this node

tail also points to same node (because only one node exists)

size = 1

✅ 2️⃣ When You Call AppendNode
link.AppendNode(20)

Inside Method:
let newnode = {
    value: data,
    next: null
}


New node created:

[ 20 | null ]

🔹 Important Line
this.tail.next = newnode


Current tail is:

[10 | null]


After this line:

[10 | • ] ----> [20 | null]


You connected the first node to second node.

🔹 Update Tail
this.tail = newnode


Now tail becomes:

head
 ↓
[10 | • ] ---> [20 | null]
                   ↑
                  tail

🔹 Increase Size
this.size++


Now:

size = 2

✅ 3️⃣ Final Console Output
console.log(link)


Output will look like:

LINK {
  head: { value: 10, next: { value: 20, next: null } },
  tail: { value: 20, next: null },
  size: 2
}

🔥 Memory Visualization
Before Append
this = {
  head → {10 | null}
  tail → {10 | null}
  size = 1
}

After Append
this = {
  head → {10 | •} → {20 | null}
  tail → {20 | null}
  size = 2
}

⚡ Time Complexity


| Operation       | Complexity |
| --------------- | ---------- |
| Append          | O(1) ✅     |
| Insert at start | O(1)       |
| Search          | O(n)       |
| Delete          | O(n)       |



Append is O(1) because you are using tail.

If you didn’t maintain tail → append would be O(n).

🎯 Interview Important Points

Why maintain tail?

→ To make append O(1)


Why size?

→ To track list length in O(1)


Why next:null?

→ End of list marker

🧠 Real Interview Follow-up Question

👉 What if list is empty and you call AppendNode first time?

Right now your constructor always creates one node.
If someone wanted empty list support, we’d need to modify constructor.

If you want, next I can explain: