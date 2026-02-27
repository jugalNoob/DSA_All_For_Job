✅ Backend Example
function compactJobs(jobs) {
    let left = 0;

    for (let right = 0; right < jobs.length; right++) {
        if (jobs[right] !== 0) {
            [jobs[left], jobs[right]] = [jobs[right], jobs[left]];
            left++;
        }
    }
    return jobs;
}

let jobs = [0, 0, 101, 102, 103];
console.log(compactJobs(jobs));


Output:

[101, 102, 103, 0, 0]




function MoveZero(nums){


    let left=0
    let right=0 
    while(right < nums.length){
        if(nums[right] !== 0){

           [nums[left] , nums[right]]=[nums[right] , nums[left]]
           left++
        }
        right++
    }
    return nums
}


console.log(MoveZero([0, 0 , 1 , 2 , 3]))



🔥 Dry Run Step-by-Step

Input:

[0, 0, 1, 2, 3]


Initial:

left = 0
right = 0

Step 1:
nums[right] = 0
0 !== 0 ❌ false


So no swap
Only right++

Now:

left = 0
right = 1

Step 2:
nums[right] = 0
0 !== 0 ❌ false


Again skip
right++

Now:

left = 0
right = 2

Step 3:
nums[right] = 1
1 !== 0 ✅ true


Swap:

nums[left] <-> nums[right]


Swap index 0 and 2:

Before:

[0, 0, 1, 2, 3]


After:

[1, 0, 0, 2, 3]


Then:

left++


Now:

left = 1
right = 3

Step 4:
nums[right] = 2
2 !== 0 ✅ true


Swap index 1 and 3:

Before:

[1, 0, 0, 2, 3]


After:

[1, 2, 0, 0, 3]


left = 2
right = 4

Step 5:
nums[right] = 3
3 !== 0 ✅ true


Swap index 2 and 4:

Before:

[1, 2, 0, 0, 3]


After:

[1, 2, 3, 0, 0]


Done ✅

🎯 Final Output
[1, 2, 3, 0, 0]

🔥 Why Right Always Moves?

Because:

👉 right scans the whole array
👉 left only moves when we find non-zero

Think:

right = scanner

left = position to place next non-zero

🔥 Super Simple Analogy

Imagine:

right = person checking numbers

left = position where next non-zero should go

If number is zero → ignore
If number is non-zero → bring it to front