Perfect 🔥
Now let’s clearly understand the 3 delete cases in a Singly Linked List.

Assume list:

10 → 20 → 30 → 40
head = 10
tail = 40
size = 4

✅ 1️⃣ Delete Head
🎯 Meaning:

Remove first node.

Code:
deleteHead(){

    if(!this.head) return

    this.head = this.head.next
    this.size--

    if(this.size === 0){
        this.tail = null
    }
}

🔥 How It Works

Before:

head
 ↓
10 → 20 → 30 → 40


After:

head
 ↓
20 → 30 → 40


We simply move head forward.

⚡ Time Complexity
O(1) ✅
