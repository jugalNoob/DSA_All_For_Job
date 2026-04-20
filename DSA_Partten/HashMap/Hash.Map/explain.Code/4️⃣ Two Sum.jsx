4️⃣ Two Sum

Problem: Given an array, find indices of two numbers that add up to a target.

Example:

function twoSum(data, target) {
    let map = {}


    for (let i = 0; i < data.length; i++) {

        let str=data[i]
        let diff = target - str
      

        if (map[diff] !== undefined) {
               result.push([diff, num])
            return [map[diff], i]
        }

        map[str] = i

    }

    return []
}

console.log(twoSum([2,7,11,15], 9)) // [0,1]

console.log(allPairs([1, 2, 3, 4, 5], 6))




function balancepar(data){

     let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for(let i=0; i<data.length; i++){


        let str=data[i]


        if(map[str]){
            stack.push(map[str])
        }else{
            if(stack.length ===0  || stack.pop() !==map[str] ){
                return false
            }
        }
    }

   return  stack.length ===0 
}

console.log(balancepar('[]')) 

You’re very close—but there’s a logical bug in your condition.

❌ Problem in your code:
stack.pop() !== map[str]
Here you're checking map[str], but str is a closing bracket (], }, )), and your map only contains opening → closing mappings.

So map[str] will be undefined, which breaks the logic.

✅ Fix:
When you encounter a closing bracket, you should compare it directly with stack.pop(), not map[str].

✔️ Correct Code:
function balancepar(data) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < data.length; i++) {
        let str = data[i];

        if (map[str]) {
            // opening bracket → push expected closing
            stack.push(map[str]);
        } else {
            // closing bracket → check with stack
            if (stack.length === 0 || stack.pop() !== str) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(balancepar('[]'));     // true
console.log(balancepar('[{}]'));   // true
console.log(balancepar('[{]'));    // false
🧠 Key Insight:
You’re using a smart trick:

Instead of pushing opening brackets, you're pushing the expected closing bracket

So later, you just match directly → very efficient 👍

🚀 Interview Tip:
You can explain it like this:

"I push expected closing brackets into stack. When I see a closing bracket, I validate it immediately against stack top."

If you want, I can show:

🔥 Optimized version (no map)

🔥 Real-world use (HTML tag validation)

🔥 Follow-up tricky interview cases

Just tell me 👍


function twopoter(data , target){

    let map={}
    for(let i=0; i<data.length; i++){


        let str=data[i]
        let diff=target-str
        
        if(map[diff]){

            return [map[diff] , i]
        }


        map[str]=i
    }

    return []
}


console.log(twopoter([1 , 2 , 3 , 4 , 5] , 5))  // 1 , 2 answer

You’re implementing Two Sum, but there’s a subtle bug that will bite you in real interviews.

❌ Problem:
if(map[diff])
This fails when the index is 0, because:

map[diff] = 0  // falsy value
So the condition becomes false even when the answer exists.

✅ Fix:
Check using !== undefined instead:

if (map[diff] !== undefined)
✔️ Correct Code:
function twopoter(data, target) {
    let map = {};

    for (let i = 0; i < data.length; i++) {
        let str = data[i];
        let diff = target - str;

        if (map[diff] !== undefined) {
            return [map[diff], i];
        }

        map[str] = i;
    }

    return [];
}

console.log(twopoter([1, 2, 3, 4, 5], 5)); // [1, 2]
🧠 Why your output [1,2]?
Array: [1, 2, 3, 4, 5], target = 5

2 + 3 = 5

Index of 2 = 1

Index of 3 = 2

👉 So result = [1, 2]

⚠️ Important Note:
This is actually HashMap approach, not true "Two Pointer".

🔥 Real Two Pointer (only works on sorted array):
function twoPointer(data, target) {
    let left = 0;
    let right = data.length - 1;

    while (left < right) {
        let sum = data[left] + data[right];

        if (sum === target) return [left, right];
        else if (sum < target) left++;
        else right--;
    }

    return [];
}

console.log(twoPointer([1, 2, 3, 4, 5], 5)); // [0, 3]
🚀 Interview Tip:
If interviewer asks:

Unsorted array → use HashMap (your approach)

Sorted array → use Two Pointer (better space)

If you want, I can push you further:

🔥 Handle duplicates case

🔥 Return all pairs

🔥 3Sum (very important interview question)

Just tell me 👍


function twopoter(data , target){

    let map={}
    for(let i=0; i<data.length; i++){



        let str=data[i]
        let diff=target-str
        
        if(map[diff] !== undefined){

            return [map[diff] , i]
        }


        map[str]=i
    }

    return []
}


console.log(twopoter([1 , 2 , 3 , 4 , 5] , 7)) /// Let me explain it slowly, line by line:
We are at i = 2
JavaScriptlet str = data[2];     // str = 3
let diff = target - str;   // diff = 5 - 3 = 2
Now the code checks:
JavaScriptif (map[diff] !== undefined) {
    return [map[diff], i];
}

map[diff] means → map[2]
When was 2 stored in the map? → In the previous step (when i=1)

Let’s go back:
Step i=1:

Current number = 2
diff = 5 - 2 = 3 (not found)
Then it saved: map[2] = 1   ←←← This is the important line

So now the map looks like this:
JavaScriptmap = {
    1: 0,
    2: 1     // ← We remembered that number 2 is at index 1
}

Now back to i=2:

Current number = 3
We need 2 to make 5
Code asks: "Have I seen 2 before?"
It looks in the map → map[2] exists and its value is 1
So it returns [map[2], i] → [1, 2]

That’s how it knows.

Think like this (very easy way):
The map is like a notebook where we write:

"I saw number 2 at position 1"

When we reach number 3, we think:

"I need 2 to make 5"
We open the notebook and ask: "Did I write down 2 somewhere?"
Yes! I wrote it at index 1

So we return [1, 2]

Full table again with extra explanation:





































iCurrent NumberNeed (diff)Is "Need" already in map?What does map say?Action014No-Save 1 at index 0123No-Save 2 at index 1232Yes2 is at index 1Return [1, 2] //how check 2 , 3

Your explanation is actually solid—but your example got mixed up, which is why you're confused at the end.

You changed the target to 7, but your explanation is still for target = 5.

🔴 First, let’s fix the confusion
You ran:

console.log(twopoter([1 , 2 , 3 , 4 , 5] , 7))
But your explanation says:

diff = 5 - 3 = 2
👉 That’s wrong for this case.

✅ Now let’s do it CORRECTLY for target = 7
Array:
[1, 2, 3, 4, 5]
target = 7
🔄 Step-by-step execution
👉 i = 0
str = 1
diff = 7 - 1 = 6
map = {}
Is 6 in map? ❌ No

Save: map[1] = 0

👉 i = 1
str = 2
diff = 7 - 2 = 5
map = {1:0}
Is 5 in map? ❌ No

Save: map[2] = 1

👉 i = 2
str = 3
diff = 7 - 3 = 4
map = {1:0, 2:1}
Is 4 in map? ❌ No

Save: map[3] = 2

👉 i = 3
str = 4
diff = 7 - 4 = 3
map = {1:0, 2:1, 3:2}
Is 3 in map? ✅ YES

map[3] = 2

👉 RETURN:

[2, 3]
🧠 How does it "check 2,3" or "3,4"?
It never checks pairs directly like:

(1,2), (1,3), (2,3) ❌
Instead, it does this:

👉 For each number:

"What number do I need to reach target?"

Then:

"Have I already seen that number?"

🔥 Simple Thinking (Best Way)
At str = 4:

Need = 3
Then:

map[3] → YES → index 2
So:

3 + 4 = 7 ✅
👉 That’s how it finds the pair.

⚡ Why this is powerful (Interview gold)
Brute force → O(n²)

Your approach → O(n)

🚀 One line summary