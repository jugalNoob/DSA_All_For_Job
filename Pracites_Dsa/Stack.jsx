💻 Stack Class in JS
class STACK {
    constructor() {
        this.data = [];
        this.top = 0; // index for next push
    }

    // Push value onto stack
    push(value) {
        this.data[this.top] = value;
        this.top++;
    }

    // Pop value from stack
    pop() {
        if (this.top === 0) return null; // stack empty
        this.top--;
        return this.data[this.top];
    }

    // Peek top element without removing
    peek() {
        if (this.top === 0) return null;
        return this.data[this.top - 1];
    }

    // Display stack
    display() {
        for (let i = this.top - 1; i >= 0; i--) {
            console.log(this.data[i]);
        }
    }
}

// Test stack
let stack = new STACK();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log("Pop:", stack.pop()); // 40
console.log("Peek:", stack.peek()); // 30
console.log("Stack content:");
stack.display(); // 30, 20, 10

🔍 Output
Pop: 40
Peek: 30
Stack content:
30
20
10

🧠 Notes
top points to next empty position (like current in your queue)
pop decreases top and returns value
peek returns top without removing
display prints from top → bottom (LIFO order)
✅ Bonus: Comparison with your QUEUE
QUEUE → append / dequay → FIFO
STACK → push / pop → LIFO