function windowsize(data){
    let start = 0
    let end = data.length - 1 

    while(start < end){
        while(data[start] === 0 && start < end) start++
        while(data[end] === 1 && start < end) end--

        if(start < end){
            [data[start], data[end]] = [data[end], data[start]]
            start++
            end--   // ✅ important fix
        }
    }

    return data
}

console.log(windowsize([0, 1, 0, 1, 1, 0, 0, 1]))



🧠 What this problem does

👉 Move all:

0 → left side  
1 → right side

🔍 Step-by-step
Input:
[0, 1, 0, 1, 1, 0, 0, 1]

🎯 Initial
start = 0
end   = 7

🔁 Iteration 1
data[start] = 0 → move start++
start = 1

data[end] = 1 → move end--
end = 6

🔁 Iteration 2
data[start] = 1 ❌ stop
data[end] = 0 ❌ stop


👉 Swap:

[1, 0] → swap


Array:

[0, 0, 0, 1, 1, 0, 1, 1]

start = 2
end = 5

🔁 Iteration 3
data[start] = 0 → start++
start = 3

data[end] = 0 ❌ stop


👉 Swap:

[1, 0] → swap


Array:

[0, 0, 0, 0, 1, 1, 1, 1]

start = 4
end = 4

🔚 Loop ends
✅ Final Output
[0, 0, 0, 0, 1, 1, 1, 1]

🧠 Core Idea (Very Important)




| left | right | arr               | Action     |
| ---- | ----- | ----------------- | ---------- |
| 0    | 7     | [0,1,0,1,1,0,0,1] | swap 1 & 0 |
| 1    | 6     | [0,0,0,1,1,0,1,1] | swap 1 & 0 |
| 2    | 5     | [0,0,0,1,1,1,1,1] | done       |



let arr = [0, 1, 0, 1, 1, 0, 0, 1];

let zeroCount = 0;

// Count number of 0s
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zeroCount++;
}

// Fill 0s first
for (let i = 0; i < zeroCount; i++) {
    arr[i] = 0;
}

// Fill remaining with 1s
for (let i = zeroCount; i < arr.length; i++) {
    arr[i] = 1;
}

console.log(arr);
