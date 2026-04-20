function MergeSort(data) {

  if (data.length < 2) {
    return data
  }

  let mid = Math.floor(data.length / 2)

  let left = data.slice(0, mid)
  let right = data.slice(mid)
  console.log(left )
  console.log(right)

//   return merge(MergeSort(left), MergeSort(right))
} 


MergeSort([10 , 20 , 30 , 40 , 50 , 60 , 70 , 80])

//first check loop run 
(4) [10, 20, 30, 40] //first to mind 
(4) [50, 60, 70, 80] // mind to last 



[10 20 30 40 50 60 70 80]
            ↓
     [10 20 30 40]   [50 60 70 80]
        ↓               ↓
   [10 20] [30 40]   [50 60] [70 80]
     ↓        ↓         ↓        ↓
 [10] [20] [30] [40] [50] [60] [70] [80]





 [30, 40, 50, 60, 80, 10]


 🧠 STEP 2: Keep splitting

Left side:


[30, 40, 50]
→ [30] [40, 50]
→ [30] [40] [50]



🔁 STEP 3: Start MERGING

Now we combine sorted pieces.

Left merge:
[30] + [40] → [30, 40]
[30, 40] + [50] → [30, 40, 50]




Right merge:
[80] + [10] → [10, 80]
[60] + [10, 80] → [10, 60, 80]

🔥 STEP 4: Final merge

Now merge:

[30, 40, 50]
+
[10, 60, 80]




Step-by-step merge:

Compare:

30 vs 10 → 10
30 vs 60 → 30
40 vs 60 → 40
50 vs 60 → 50
(end left)
→ 60, 80 , 