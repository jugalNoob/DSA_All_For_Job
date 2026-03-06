class Queue {
    constructor(capacity) {
        this.data = new Array(capacity); // fixed max size
        this.current = 0;                // next free spot
        this.size = 0;                   // number of elements
        this.capacity = capacity;
    }

    // Enqueue / append
    append(value) {
        if (this.size === this.capacity) {
            console.log("Queue is full");
            return;
        }

        this.data[this.current] = value;
        this.current++;
        this.size++;
    }

    // Dequeue / delete
    deleteQueue() {
        if (this.size === 0) {
            console.log("Queue is empty");
            return;
        }

        // shift all elements left
        for (let i = 0; i < this.size - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        this.data[this.size - 1] = undefined; // clear last spot
        this.current--;                        // update next free spot
        this.size--;
    }

    // Display elements
    display() {
        if (this.size === 0) {
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

let q = new Queue(10); // max 10 elements

q.append(10);
q.append(20);
q.append(30);
q.append(40);

q.display(); // 10 -> 20 -> 30 -> 40

q.deleteQueue(); // removes 10
q.deleteQueue(); // removes 20

q.display(); // 30 -> 40

q.append(50);
q.display(); // 30 -> 40 -> 50

