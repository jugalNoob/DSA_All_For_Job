class Stack {
    constructor() {
        this.head = null
        this.size = 0
    }

    push(value) {
        let newNode = {
            value: value,
            next: this.head
        }

        this.head = newNode
        this.size++
    }

    pop() {
        if (!this.head) return null

        const removed = this.head.value
        this.head = this.head.next
        this.size--
        return removed
    }

    peek() {
        return this.head ? this.head.value : null
    }

    isEmpty() {
        return this.size === 0
    }
}




Top
 ↓
30
20
10

