function perfixdata(data){

    let perif=[]
    perif[0]=data[0]

    for(let i=1; i<data.length; i++){


        perif[i]=Math.max(perif[i-1] , data[i])
    }

    return perif
}

console.log(perfixdata([3,1,4,2,5]))

🔑 Key Idea
perif[i] = Math.min(perif[i-1], data[i])

perif[i-1] → the minimum value seen so far
data[i] → the current value
perif[i] → stores the new minimum
🔁 Step-by-step Example

Input:

data = [3, 1, 4, 2, 5]

i = 0
perif[0] = data[0] = 3

i = 1
perif[1] = min(perif[0], data[1])
          = min(3, 1)
          = 1  // new minimum

i = 2
perif[2] = min(perif[1], data[2])
          = min(1, 4)
          = 1  // still 1, because 4 > 1

i = 3
perif[3] = min(perif[2], data[3])
          = min(1, 2)
          = 1  // still 1, because 2 > 1

i = 4
perif[4] = min(perif[3], data[4])
          = min(1, 5)
          = 1  // still 1, because 5 > 1

🧠 Why 1 Repeats
1 became the minimum at i = 1
Every next data[i] is larger than 1
Math.min(1, bigger number) → still 1

✅ So 1 repeats until a smaller number than 1 appears.

Visual Analogy

Think like tracking cheapest price:

Prices:   3   1   4   2   5
Cheapest: 3   1   1   1   1

Once you see the cheapest (1), it stays cheapest
Only a smaller price would update it.
// Index 0 → 3
// Index 1 → min(3,1) = 1
// Index 2 → min(1,4) = 1
// Index 3 → min(1,2) = 1
// Index 4 → min(1,5) = 1




Step-by-Step Execution

Input

arr = [2,4,6,8]

Step 1
prefix[0] = arr[0]


prefix

[2]


Console prints

[2]

Step 2 (i = 1)
prefix[1] = Math.min(prefix[0], arr[1])

Math.min(2 , 4) = 2


prefix

[2,2]

Step 3 (i = 2)
prefix[2] = Math.min(prefix[1], arr[2])

Math.min(2 , 6) = 2


prefix

[2,2,2]

Step 4 (i = 3)
prefix[3] = Math.min(prefix[2], arr[3])

Math.min(2 , 8) = 2


prefix

[2,2,2,2]

Final Output
[2,2,2,2]


Meaning:

Index	Minimum from start
0	2
1	2
2	2
3	2
Cleaner Version (Best Practice)


// Where Used

// Minimum cost calculations

// Stock buy price

// Dynamic programming problems

