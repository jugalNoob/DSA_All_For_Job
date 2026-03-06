class Stack {
    constructor() {
        this.data = []
        this.top = 0
    }

    push(value) {
        this.data[this.top] = value
        this.top++
    }

    pop() {
        if (this.isEmpty()) return null

        this.top--
        const removed = this.data[this.top]
        this.data[this.top] = undefined
        return removed
    }

    peek() {
        if (this.isEmpty()) return null
        return this.data[this.top - 1]
    }

    isEmpty() {
        return this.top === 0
    }

    size() {
        return this.top
    }

    display() {
        for (let i = this.top - 1; i >= 0; i--) {
            console.log(this.data[i])
        }
    }
}


let stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

stack.display()
console.log("Popped:", stack.pop())
// console.log("Top element:", stack.peek())