1️⃣ Your Constructor
constructor(data){

    this.head={
        value:data,
        next:null
    }
    this.tail=this.head
    this.size=1
}


This runs when you create a new Linked List.

Example:

let link = new LINKED(10)


Now the constructor executes.

2️⃣ this.head
this.head = {
   value: data,
   next: null
}


You created the first node of the linked list.

This node is just a JavaScript object.

Result:

{
   value: 10,
   next: null
}


So:

head
 ↓
[10 | null]

3️⃣ this.tail
this.tail = this.head


At the start head and tail are the same node.

Because there is only one element.

Memory visualization:

head ----┐
         ↓
       [10 | null]
         ↑
tail ----┘


Both point to the same object.

4️⃣ this.size
this.size = 1


You store the number of nodes in the list.

So now:

size = 1

5️⃣ Full Object After Creation

When you run:

let link = new LINKED(10)


JavaScript creates an object like this:

link = {

  head: {
        value:10,
        next:null
       },

  tail: {
        value:10,
        next:null
       },

  size:1
}


But head and tail point to the same node in memory.