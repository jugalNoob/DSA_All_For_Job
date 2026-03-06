class CircularQueue {
    constructor(size) {
        this.max = size
        this.items = new Array(size)
        this.current = 0   // number of elements
        this.rear = -1
        this.front = -1
    }

    enqueue(value) {
        if (this.current === this.max) {
            console.log("Queue is full")
            return
        }

        // First element
        if (this.front === -1) {
            this.front = 0
        }

        // Move rear
        this.rear = (this.rear + 1) % this.max
        this.items[this.rear] = value
        this.current++
    }

    dequeue() {
        if (this.current === 0) {
            console.log("Queue is empty")
            return null
        }

        const removed = this.items[this.front]
        this.items[this.front] = undefined
        this.front = (this.front + 1) % this.max
        this.current--

        // If queue becomes empty, reset pointers
        if (this.current === 0) {
            this.front = -1
            this.rear = -1
        }

        return removed
    }

    display() {
        if (this.current === 0) {
            console.log("Queue is empty")
            return
        }

        let i = this.front
        let count = 0

        while (count < this.current) {
            console.log(this.items[i])
            i = (i + 1) % this.max
            count++
        }
    }
}
let cq = new CircularQueue(5)

cq.enqueue(10)
cq.enqueue(20)
cq.enqueue(30)
cq.display()

console.log("Dequeue:", cq.dequeue())
cq.display()

cq.enqueue(40)
cq.enqueue(50)
cq.enqueue(60)
cq.enqueue(70) // Should print "Queue is full"
cq.display()
