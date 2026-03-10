deleteNode(position){

    if(position < 1 || position > this.size){
        return "Invalid position"
    }

    // Delete head
    if(position === 1){
        this.head = this.head.next
        this.size--

        if(this.size === 0){
            this.tail = null
        }

        return
    }

    let current = this.head
    let count = 1

    // Move to node before delete position
    while(count < position - 1){
        current = current.next
        count++
    }

    // Remove node
    current.next = current.next.next

    // If deleting last node → update tail
    if(position === this.size){
        this.tail = current
    }

    this.size--
}
