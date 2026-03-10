Insert(index, data) {
    let newnode = { value: data, next: null }

    // Case 1: Insert at position 1 (beginning of list)
    if (index === 1) {
        newnode.next = this.head
        this.head = newnode
        // Note: if list was empty, tail will still be correct after this
    } 

    // Case 2: Insert anywhere else (position 2,3,4...)
    else {
        let count = 1
        let current = this.head

        // Move to the node **just before** where we want to insert
        while (count < index - 1) {
            current = current.next
            count++
        }

        // Now current is the node before insertion point

        // Connect new node
        newnode.next = current.next          // new node points to whatever was after current
        current.next = newnode               // current now points to new node

        // Very important: if we inserted at the end
        if (!newnode.next) {                 // if newnode.next is null → we are at the end
            this.tail = newnode
        }
    }
}



Visual Explanation – 3 common cases
1. Insert at position 1 (beginning)
Before:
texthead → [10] → [20] → [30]    tail = [30]
After Insert(1, 5):
texthead → [5] → [10] → [20] → [30]    tail = [30]
       ↑
     newnode
2. Insert in the middle – say position 3
Before:
texthead → [10] → [20] → [40] → [50]    tail = [50]
Insert(3, 99)
We stop at count = 2 (index-1 = 2)
textcurrent
            ↓
[10] → [20] → [40] → [50]

Insert 99:

[10] → [20] → [99] → [40] → [50]
               ↑
             newnode
3. Insert at the end – position 4 (when list has 3 nodes)
Before:
texthead → [10] → [20] → [30]          tail = [30]
Insert(4, 77)
We stop at count = 3 (index-1 = 3)
textcurrent
                     ↓
[10] → [20] → [30] → null

After:

[10] → [20] → [30] → [77] → null
                            ↑
                          newnode
                   (newnode.next === null → so tail = newnode)



                   Line,Meaning in simple words
newnode.next = current.next,"The new node ""steals"" what was after current"
current.next = newnode,Current now points to the new node instead of old next
if (!newnode.next),If new node is pointing to nothing → it became the last node
this.tail = newnode,So we update tail pointer