Good choice 🔥
Palindrome Linked List is a very common interview question.

🎯 Problem

A linked list is palindrome if:

1 → 2 → 2 → 1 ✅
1 → 2 → 3 → 2 → 1 ✅
1 → 2 → 3 ❌


It reads same forward and backward.

🚀 Best Interview Approach (O(n) time, O(1) space)
💡 Idea:

Find middle of list (fast & slow pointer)

Reverse second half

Compare first half and second half

(Optional) Restore list

✅ Implementation
isPalindrome(){

    if(!this.head || !this.head.next) return true

    // 1️⃣ Find middle
    let slow = this.head
    let fast = this.head

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }

    // 2️⃣ Reverse second half
    let prev = null
    let current = slow

    while(current){
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }

    // prev is new head of reversed half
    let left = this.head
    let right = prev

    // 3️⃣ Compare both halves
    while(right){
        if(left.value !== right.value){
            return false
        }
        left = left.next
        right = right.next
    }

    return true
}

🔥 Step-by-Step Example

List:

1 → 2 → 3 → 2 → 1

1️⃣ Find Middle

Using fast & slow:

slow → 3

2️⃣ Reverse Second Half

Reverse from 3:

Before:

3 → 2 → 1


After:

1 → 2 → 3


Now structure conceptually:

First Half: 1 → 2 → 3
Second Half: 1 → 2 → 3

3️⃣ Compare

Compare:

1 === 1 ✅
2 === 2 ✅
3 === 3 ✅


Palindrome ✅

🧠 Why This Works

Because palindrome means:

First half == Reverse(second half)

⚡ Complexity
Type	Value
Time	O(n)
Space	O(1) ✅