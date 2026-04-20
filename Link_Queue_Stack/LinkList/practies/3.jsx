🔁 Now your loop
let current = link.head

while (current && current.next) {
    console.log(current.value)
    current.next = current.next.next
    current = current.next
}

🚀 FULL STEP-BY-STEP EXECUTION
✅ Initial state
current = 10
List = 10 → 20 → 30 → 40

🔁 Iteration 1
Condition:
current = 10 (true)
current.next = 20 (true)

Step 1:
console.log(current.value)


Output:

10

Step 2:
current.next = current.next.next


Meaning:

10.next = 30   ❌ (20 is removed)


Now list becomes:

10 → 30 → 40

Step 3:
current = current.next


So:

current = 30

🔁 Iteration 2
Current state:
current = 30
List = 10 → 30 → 40

Condition:
30 && 40 → true

Step 1:
console.log(30)


Output:

30

Step 2:
30.next = 30.next.next


Meaning:

30.next = null   ❌ (40 is removed)


Now list becomes:

10 → 30 → null

Step 3:
current = current.next


So:

current = null

🛑 Loop stops

Condition fails:

current && current.next → false

🎯 FINAL RESULT
Printed output:
10
30

Final linked list:
10 → 30 → null

🧠 WHAT YOU ACTUALLY DID

This line is the key:

current.next = current.next.next


👉 It means:

“skip one node”

So you removed:

20 ❌
40 ❌