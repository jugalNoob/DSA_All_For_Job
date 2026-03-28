✅ Fixed Version (Clean Queue)
class QUEUE {

    constructor() {
        this.data = [];   // ✅ initialize properly
        this.current = 0;
        this.first = 0;
    }

    add(value) {
        this.data[this.current] = value;
        this.current++;
    }

    remove() {
        if (this.first === this.current) {
            console.log("Queue is empty");
            return;
        }

        let result = this.data[this.first];
        this.first++;
        return result;
    }

    display() {
        for (let i = this.first; i < this.current; i++) {
            console.log(this.data[i]);
        }
    }
}

let link = new QUEUE();

link.add(10);
link.add(20);
link.add(30);

link.display();   // 10 20 30

console.log("Removed:", link.remove()); // 10
link.display();   // 20 30

🔥 Output
10
20
30
Removed: 10
20
30

🧠 Concept (IMPORTANT for interview)

This is:
👉 Queue using Array (without shift)

Why NOT use .shift()?
arr.shift()

❌ O(n) (shifts all elements)
Your approach → ✅ O(1)
⚡ Advanced Optimization (VERY IMPORTANT 🔥)

Memory leak issue:

first keeps increasing
Old elements stay in memory
Fix → Reset when empty
remove() {
    if (this.first === this.current) {
        return "Queue is empty";
    }

    let result = this.data[this.first];
    this.first++;

    // 🔥 Reset pointers
    if (this.first === this.current) {
        this.first = 0;
        this.current = 0;
        this.data = [];
    }

    return result;
}
