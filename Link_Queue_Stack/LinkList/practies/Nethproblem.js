Good question — the confusion is coming from what fast actually is at that moment.

🔑 First, understand this line
let dummy = { next: this.head };
let fast = dummy;


👉 So initially:

fast = dummy
dummy.next = 10


List:

dummy → 10 → 20 → 30 → 40

🔍 Now your logs
1️⃣
console.log(current.next)

current = 10
current.next = 20 ✅

2️⃣
console.log(fast.next.next)


👉 IMPORTANT: at this moment fast = dummy

So:

fast.next = 10
fast.next.next = 20


👉 That’s why output is:

20 ✅

❌ Why NOT 30?

Because you’re thinking:

10 → 20 → 30


But actually:

fast = dummy (not 10)


So path is:

dummy → 10 → 20


👉 Stops at 20, not 30

🧠 Visual (this will fix your confusion)
fast (dummy)
   ↓
[dummy] → [10] → [20] → [30] → [40]

fast.next        = 10
fast.next.next   = 20

🔥 Key Rule (VERY IMPORTANT)

Always check where your pointer is pointing from

⚠️ Another bug in your code
this.size++


👉 You are deleting → should be:

this.size--  ❌➡️✅

⚠️ Safety improvement (recommended)
for (let i = 0; i <= n; i++) {
  if (!fast) return this;
  fast = fast.next;
}

🧠 One-line clarity

fast.next.next depends on where fast is — not where you think it is.

💬 Simple analogy

Think:

fast = your position
next.next = 2 steps forward

If you start from dummy, 2 steps = 20
If you start from 10, 2 steps = 30

👉 Starting point changes everything.