You're running Selection Sort.
Let me explain your exact code step-by-step using your array:

let data = [50, 40, 30, 20]

🔍 Understanding the variables

i → selects the current position where the smallest number should go

mind → (short for "minimum index") keeps track of the smallest value found in the remaining array

j → scans the rest of the array to find the smallest value

After j-loop ends → you swap data[i] ↔ data[mind]

This is exactly how Selection Sort works.

✅ Step-by-step dry run

let data=[50 , 40 , 30 , 20]


debugger;
for(let i=0; i<data.length; i++){

  let mind=i

  for(let j=i+1; j<data.length; j++){

    if(data[mind]  > data[j]){

      mind=j
    }
  }

  let temp=data[mind]
  data[mind]=data[i]
  data[i]=temp
}

console.log(data)




Initial Array
[50, 40, 30, 20]

⭐ i = 0

mind = 0 → data[mind] = 50

Now j loop runs:

j = 1

compare 50 > 40 → YES
→ mind = 1

j = 2

compare 40 > 30 → YES
→ mind = 2

j = 3

compare 30 > 20 → YES
→ mind = 3

👉 Smallest value found = 20 at index 3

Swap:
swap data[0] and data[3]


Array becomes:

[20, 40, 30, 50]

⭐ i = 1

mind = 1 → data[mind] = 40

j = 2

40 > 30 → YES
→ mind = 2

j = 3

30 > 50 → NO
→ mind stays 2

Swap:
swap data[1] and data[2]


Array becomes:

[20, 30, 40, 50]

⭐ i = 2

mind = 2 → value = 40

j = 3

40 > 50 → NO

mind stays same → points to 40

Swap:

Numbers are same position, so no effect.

Array remains:

[20, 30, 40, 50]

⭐ i = 3

Last element left → already sorted → loop ends.

🎉 FINAL OUTPUT
[20, 30, 40, 50]

🧠 What is Selection Sort doing?
