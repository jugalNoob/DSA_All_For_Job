✅ 3️⃣ Delete Tail
🎯 Meaning:

Remove last node.

Example:
Delete 40

Code:
deleteTail(){

    if(!this.head) return

    if(this.size === 1){
        this.head = null
        this.tail = null
        this.size = 0
        return
    }

    let current = this.head

    while(current.next !== this.tail){
        current = current.next
    }

    current.next = null
    this.tail = current
    this.size--
}

🔥 How It Works

Before:

10 → 20 → 30 → 40
                     ↑
                    tail


We stop at 30.

Then:

30.next = null
tail = 30


After:

10 → 20 → 30

⚠️ Why Delete Tail is O(n)?

Because singly linked list has no backward pointer.
We must traverse to second last node.

🧠 Summary Table
Case	What Changes	Time
Delete Head	Move head pointer	O(1)
Delete Middle	Change prev.next	O(n)
Delete Tail	Traverse + update tail	O(n)