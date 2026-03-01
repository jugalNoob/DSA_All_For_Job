HeadAppend(data){

    let newnode = {
        value: data,
        next: this.head
    }

    this.head = newnode

    if(this.size === 0){
        this.tail = newnode
    }

    this.size++
}




✅ Your Method
HeadAppend(data){

    let newnode = {
        value: data,
        next: this.head
    }

    this.head = newnode
    this.size++
}

🧠 Step-by-Step Working

Assume current list is:

const link = new LINK(10)
link.AppendNode(20)

Current Structure:
head
 ↓
[10 | •] ---> [20 | null]
                     ↑
                    tail
size = 2

🔹 Now Call:

link.HeadAppend(5)

🔥 Step 1: Create New Node
let newnode = {
    value: 5,
    next: this.head
}


Important part:

next: this.head


this.head currently points to:

[10 | •]


So new node becomes:

[5 | •] ----> [10 | •] ----> [20 | null]


BUT ⚠️ this connection is temporary until we update head.

🔥 Step 2: Move Head Pointer
this.head = newnode


Now head shifts to new node.

Final structure:

head
 ↓
[5 | •] ---> [10 | •] ---> [20 | null]
                                ↑
                               tail

🔥 Step 3: Increase Size
this.size++


Now:

size = 3