function VisualQuickSort(arr, indent = "") {
  // 1. Log what we are working on currently
  console.log(`${indent}👉 Sorting array: [${arr}]`);

  // --- BASE CASE ---
  if (arr.length < 2) {
    console.log(`${indent}✅ Stop! [${arr}] is too small to sort.`);
    return arr;
  }

  // --- PREPARE VARIABLES ---
  let pivot = arr[arr.length - 1]; // Pick the last number
  let smaller = [];                // Was "left"
  let larger = [];                 // Was "right"

  console.log(`${indent}🎯 Pivot is: ${pivot}`);

  // --- THE LOOP (Sorting into buckets) ---
  for (let i = 0; i < arr.length - 1; i++) {
    
    let num = arr[i];
    if (num < pivot) {
      smaller.push(num);
    } else {
      larger.push(num);
    }
  }

  console.log(`${indent}   Split into: Smaller [${smaller}] & Larger [${larger}]`);

  // --- RECURSION (Do it again for the buckets) ---
  // We add spaces ("  ") to the indent so the logs look like a tree
  let sortedSmaller = VisualQuickSort(smaller, indent + "   ");
  let sortedLarger  = VisualQuickSort(larger,  indent + "   ");

  // --- COMBINE ---
  let result = [...sortedSmaller, pivot, ...sortedLarger];
  console.log(`${indent}🎉 Finished merging: [${result}]`);
  
  return result;
}

const data = [9, 2, 1];
VisualQuickSort(data);