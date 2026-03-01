🏅 4️⃣ Remove Nth Node From End

This is also very important 🔥

🎯 Problem

Remove nth node from end.

Example:

1 → 2 → 3 → 4 → 5


Remove n = 2

Output:

1 → 2 → 3 → 5

🚀 Best Approach — Two Pointers
💡 Idea:

Move fast pointer n steps ahead

Move slow + fast together

When fast reaches end → slow is before target

✅ Code
removeNthFromEnd(n){

    let dummy = { next: this.head }
    let slow = dummy
    let fast = dummy

    // Move fast n+1 steps
    for(let i = 0; i <= n; i++){
        fast = fast.next
    }

    // Move both
    while(fast){
        slow = slow.next
        fast = fast.next
    }

    // Remove node
    slow.next = slow.next.next

    this.head = dummy.next
}

🔥 Step-by-Step Example

List:

1 → 2 → 3 → 4 → 5


n = 2

Move fast 2 steps ahead

Gap created:

slow
 ↓
1 → 2 → 3 → 4 → 5
        ↑
       fast

Move both together

When fast reaches null:

slow → 3


So remove:

3.next = 5


Final:

1 → 2 → 3 → 5

⚡ Complexity
Type	Value
Time	O(n)
Space	O(1)
🧠 Why Use Dummy Node?

Because if removing head:

Example:

1 → 2 → 3
n = 3


Without dummy → complex logic
With dummy → clean handling

🏆 Now You’ve Mastered:

Find middle

Detect cycle

Find cycle start

Remove nth from end

You are now in advanced linked list level 🔥