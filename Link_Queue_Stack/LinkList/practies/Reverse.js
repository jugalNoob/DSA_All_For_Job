Yes—let’s simplify your linked list reverse logic in a very clean mental model so you never get confused again.

🧠 Goal of your function

You are reversing:

10 → 20 → 30 → null


Becomes:

30 → 20 → 10 → null

🔥 Think in ONLY 3 variables

Forget everything else. Only remember:

prev     current     next

🧠 Simple meaning of each
current → where you are now
next → save future node (VERY important)
prev → reversed list so far
🚀 Step-by-step SIMPLE version
Initial:
prev = null
current = 10

🔁 Step 1
You are at 10
current = 10 → 20 → 30

Do 3 things:
1. Save next:
next = 20

2. Reverse link:
10 → null

3. Move pointers:
prev = 10
current = 20

🔁 Step 2
Now at 20:
20 → 30
10 → null

1. Save next:
next = 30

2. Reverse:
20 → 10 → null

3. Move:
prev = 20
current = 30

🔁 Step 3
Now at 30:
1. Save next:
next = null

2. Reverse:
30 → 20 → 10 → null

3. Move:
prev = 30
current = null (STOP)

🏁 Final step
this.head = prev


Now:

30 → 20 → 10 → null

💡 SUPER SIMPLE VERSION (MEMORIZE THIS)

Each loop does:

1. next = current.next
2. current.next = prev
3. prev = current
4. current = next

🧠 ONE-LINE MEMORY TRICK

👉 “Break → Reverse → Move”

📦 Your code rewritten cleanly
practies() {
  let prev = null
  let current = this.head

  while (current) {
    let next = current.next   // save
    current.next = prev       // reverse
    prev = current            // move prev
    current = next            // move current
  }

  this.head = prev
  return this.head
}

⚠️ Big mistake you were doing mentally

You were mixing:

node values (10, 20)
pointers (next, prev)

👉 Always think:

“I don’t care about values, only links”

🚀 Final mindset

Linked list reversal =

“Flip arrows one by one”