Love this table 👌 — this is binary search mastery thinking.
Let me explain each pattern in simple words + when to use it + tiny example.

1️⃣ Find element → Classic Binary Search

Question says: “Find X in sorted array”

🧠 Idea

Cut the array in half again and again.

🧪 Example
[10, 20, 30, 40, 50]
find = 40

🧩 Logic

mid == target → done

target > mid → right

target < mid → left

⏱

Time: O(log n)

2️⃣ First / Last → Boundary Binary Search

Question says: “First / Last occurrence of X”

🧠 Idea

Don’t stop when found → push left or right.

🧪 Example
[10, 20, 50, 50, 50, 60]

Goal	Move


| Goal  | Move                      |
| ----- | ------------------------- |
| First | left (`end = mid - 1`)    |
| Last  | right (`start = mid + 1`) |



📌 Use when

duplicates exist

counting elements

3️⃣ Count → Boundaries

Question says: “How many times X appears?”

🧠 Formula
count = lastIndex - firstIndex + 1

🧪 Example
[50, 50, 50]
count = 3

📌 Use when

sorted array

frequency query

4️⃣ Rotated → Sorted-half Binary Search

Question says: “Search in rotated sorted array”

🧠 Idea

One half is always sorted → decide which side to go.

🧪 Example
[4,5,6,7,0,1,2]

🧩 Key logic
Left sorted OR Right sorted
Target in sorted half? → go there
Else → go other side

📌 Very common interview question
5️⃣ Peak → Neighbor Compare

Question says: “Find peak element”

🧠 Idea

Compare with neighbors.

🧪 Example
[1, 3, 20, 4, 1]


Peak → 20

🧩 Logic

mid > mid+1 → go left

mid < mid+1 → go right

📌 Used in

mountain array

bitonic array

6️⃣ Minimum / Maximum → Answer-based Binary Search

Question says:

“Min capacity”

“Max distance”

“Smallest possible answer”

🧠 Idea

Binary search on answer, not index.

🧪 Example

“Minimum ship capacity to ship packages in D days”

🧩 Logic
Is this capacity possible?
Yes → try smaller
No  → try bigger

📌 Real-world use

load balancing

optimization problems

7️⃣ Insert Position → Lower Bound

Question says: “Where should X be inserted?”

🧠 Idea

Find first element ≥ target

🧪 Example
[10, 20, 30, 40]
insert 25 → index 2

📌 Used in

maintaining sorted data

scheduling

8️⃣ Infinite Array → Range Expand

Question says: “Array size unknown”

🧠 Idea

1️⃣ Expand range exponentially
2️⃣ Apply binary search

🧪 Example
1 → 2 → 4 → 8 → 16 ...

📌 Used in

streams

APIs

paginated data

🧠 Big Interview Trick

👉 Don’t memorize code
👉 Recognize the pattern from the question

🧾 One-glance cheat sheet
Find X              → Classic
First / Last        → Boundary
Count               → Boundaries
Rotated array       → Sorted-half
Peak element        → Neighbor compare
Min / Max answer    → Answer-based
Insert position     → Lower bound
Infinite array      → Range expand


If you want next:

🔥 one template that fits all

🧠 decision flowchart

⚡ 10 interview questions with pattern mapping

🧪 dry-run everything like whiteboard