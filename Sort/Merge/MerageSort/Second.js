🧠 Now your question:

“run left side first 40 and 50?”

👉 YES — left side is always processed first in recursion

But not like a loop.

It happens because of the call stack (LIFO).

🔥 How recursion actually runs
 
Input:

[30, 40, 50, 60, 80, 10]

🧠 STEP 1: First call
MergeSort([30, 40, 50, 60, 80, 10])


Splits:

left  = [30, 40, 50]
right = [60, 80, 10]


👉 Function first goes into LEFT

🧠 STEP 2: LEFT side recursion
MergeSort([30, 40, 50])


Splits:

[30] and [40, 50]


Now again LEFT first:

MergeSort([40, 50])


Splits:

[40] and [50]

🔥 IMPORTANT MOMENT

Now:

[40] and [50]


👉 These are base cases → returned immediately

Then merge happens:

merge([40], [50]) → [40, 50]

🧠 Then it goes back up

Now:

merge([30], [40, 50]) → [30, 40, 50]

🔁 Now RIGHT side starts

Only AFTER left is fully done:

MergeSort([60, 80, 10])


Same process happens there.

🧠 FINAL MERGE
[30, 40, 50]
+
[10, 60, 80]


→ final sorted array:

[10, 30, 40, 50, 60, 80]

🧠 ANSWER TO YOUR QUESTION

“run left side first 40 and 50?”

✔ YES — recursion always goes LEFT first
✔ So [40, 50] is processed before right side [60, 80, 10]

But it is NOT a loop—it is call stack depth-first execution

💡 Simple rule to remember

👉 MergeSort =

Go LEFT → Go LEFT → Go LEFT → then BACKTRACK → then RIGHT

🔥 One-line memory trick

“Recursion always dives left first, then comes back and processes right.”