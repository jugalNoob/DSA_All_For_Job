✅ 2️⃣ Delete Middle



✅ 2️⃣ Delete Middle
🎯 Meaning:

Remove any node except head and tail.

Example:
Delete 30

Code:
deleteMiddle(position){

    if(position <= 1 || position >= this.size){
        return "Use proper method"
    }

    let current = this.head
    let count = 1

    while(count < position - 1){
        current = current.next
        count++
    }

    current.next = current.next.next
    this.size--
}

🔥 How It Works

Before:

10 → 20 → 30 → 40


To delete 30:

We stop at 20.

20 → 30 → 40


Then:

20.next = 30.next


After:

10 → 20 → 40

⚡ Time Complexity
O(n)
