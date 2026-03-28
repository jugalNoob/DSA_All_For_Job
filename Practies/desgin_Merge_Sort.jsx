Here’s a clean ASCII recursion tree for your Merge Sort 🔥
Input:

[30, 40, 50, 60, 80, 10]

🌳 RECURSION TREE (DIVIDE PHASE)
                          [30,40,50,60,80,10]
                         /                  \
              [30,40,50]                    [60,80,10]
              /        \                    /        \
         [30]        [40,50]            [60]      [80,10]
                        /   \                         /   \
                     [40] [50]                    [80]  [10]

🔄 MERGE PHASE (BOTTOM → UP)
Step 1:
[40] + [50] → [40,50]
[80] + [10] → [10,80]

Step 2:
[30] + [40,50] → [30,40,50]
[60] + [10,80] → [10,60,80]

Step 3 (FINAL):
[30,40,50] + [10,60,80]
→ [10,30,40,50,60,80]

🔥 FULL FLOW (COMBINED VIEW)
                          [30,40,50,60,80,10]
                         /                  \
              [30,40,50]                    [60,80,10]
              /        \                    /        \
         [30]        [40,50]            [60]      [80,10]
                        /   \                         /   \
                     [40] [50]                    [80]  [10]
                        \   /                         \   /
                     [40,50]                        [10,80]
                      /    \                        /    \
                 [30,40,50]                   [10,60,80]
                         \                    /
                    [10,30,40,50,60,80]

🧠 KEY INSIGHT (VISUAL MEMORY)
Top → Divide (break into halves)
Bottom → Merge (sorted combine)

⚡ INTERVIEW ONE-LINER

👉 “Merge sort is a top-down divide-and-conquer algorithm visualized as a binary tree where leaves are single elements and merging happens bottom-up.”

If you want next 🔥
I can give:

Quick Sort recursion tree (compare both visually)
Dry run with indices (i, j pointers)
In-place merge (advanced DSA)