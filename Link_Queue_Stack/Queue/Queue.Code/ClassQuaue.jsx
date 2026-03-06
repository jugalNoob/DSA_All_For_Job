class Queue {
    constructor(capacity = 5) {
        this.data = new Array(capacity); // initial capacity
        this.current = 0;                // next free spot
        this.size = 0;                   // current number of elements
        this.capacity = capacity;
    }

    // Enqueue / append
    append(value) {
        if (this.isFull()) {
            this.resize();              // dynamically increase capacity
        }

        this.data[this.current] = value;
        this.current++;
        this.size++;
    }

    // Dequeue / delete
    deleteQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }

        // shift elements manually
        for (let i = 0; i < this.size - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        this.data[this.size - 1] = undefined;
        this.current--;
        this.size--;
    }

    // Peek front element
    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        return this.data[0];
    }

    // Check if queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Check if queue is full
    isFull() {
        return this.size === this.capacity;
    }

    // Dynamic resizing (double the capacity)
    resize() {
        let newCapacity = this.capacity * 2;
        let newData = new Array(newCapacity);

        // copy old data manually
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[i];
        }

        this.data = newData;
        this.capacity = newCapacity;
        console.log(`Queue resized to capacity: ${this.capacity}`);
    }

    // Display queue
    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }

        let result = [];
        for (let i = 0; i < this.size; i++) {
            result.push(this.data[i]);
        }
        console.log(result.join(" -> "));
    }
}


let q = new Queue(3);

q.append(10);
q.append(20);
q.append(30);

q.display(); // 10 -> 20 -> 30
console.log("Peek:", q.peek()); // 10

q.append(40); // triggers dynamic resize
q.display();  // 10 -> 20 -> 30 -> 40

console.log("IsEmpty:", q.isEmpty()); // false
console.log("IsFull:", q.isFull());   // false

q.deleteQueue(); // removes 10
q.display();     // 20 -> 30 -> 40
