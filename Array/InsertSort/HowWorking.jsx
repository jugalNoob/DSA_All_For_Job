🔁 Insertion Sort – Dry Run Animation
Example array
[9, 2, 1, 5]

🔹 Rule reminder

Left part → always sorted

Pick one element (current)

Shift bigger elements right

Insert current in the correct spot

🟢 Pass 1 (i = 1)

current = 2

[9 | 2, 1, 5]
 ^   ^
sorted current

Compare

9 > 2 → shift

[9, 9, 1, 5]

Insert
[2, 9, 1, 5]


✅ Left side sorted

🟢 Pass 2 (i = 2)

current = 1

[2, 9 | 1, 5]
      ^

Compare & shift

9 > 1 → shift

2 > 1 → shift

[2, 9, 9, 5]
[2, 2, 9, 5]

Insert
[1, 2, 9, 5]


✅ Left side sorted

🟢 Pass 3 (i = 3)

current = 5

[1, 2, 9 | 5]
         ^

Compare & shift

9 > 5 → shift

[1, 2, 9, 9]

Insert
[1, 2, 5, 9]

🎉 Final Sorted Array
[1, 2, 5, 9]

🧠 Pointer Movement (important for interviews)
i → selects current element
j → moves left, comparing
j+1 → final insert position

📌 Pseudo Animation (code view)
for i = 1 → n
  current = arr[i]
  j = i - 1

  while j >= 0 and arr[j] > current
    arr[j+1] = arr[j]   // shift right
    j--

  arr[j+1] = current   // insert

🔥 One-line interview explanation

“Insertion sort grows a sorted left portion by shifting larger elements right and inserting the current element in its correct position.”