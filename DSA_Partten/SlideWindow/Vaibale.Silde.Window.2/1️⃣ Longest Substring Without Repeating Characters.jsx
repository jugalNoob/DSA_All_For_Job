function notreplate(data){

    let left = 0
    let map = new Map()
    let max = 0

    for(let i = 0; i < data.length; i++){

        if(map.has(data[i])){
            left = Math.max(left, map.get(data[i]) + 1)
        }

        map.set(data[i], i)

        max = Math.max(max, i - left + 1)
    }

    return max
}

console.log(notreplate("abcabcbb")) // 3
console.log(notreplate("bbbbb")) // 1


Variables:
left = 0
max = 0
set = {}

Iteration 0 → i = 0, char = 'a'
Not in set → ok
set = {a:0}
max = 0-0+1 = 1
Iteration 1 → i = 1, char = 'b'
Not in set
set = {a:0, b:1}
max = 1-0+1 = 2
Iteration 2 → i = 2, char = 'c'
Not in set
set = {a:0,b:1,c:2}
max = 2-0+1 = 3
Iteration 3 → i = 3, char = 'a'
Found in set → a was at 0
left = max(left, 0+1) = 1
set = {a:3, b:1, c:2}
max = max(3, 3-1+1) = 3
Iteration 4 → i = 4, char = 'b'
Found in set → b was at 1
left = max(1,1+1)=2
set = {a:3, b:4, c:2}
max = max(3,4-2+1)=3
Iteration 5 → i = 5, char = 'c'
Found in set → c was at 2
left = max(2,2+1)=3
set = {a:3, b:4, c:5}
max = max(3,5-3+1)=3
Iteration 6 → i = 6, char = 'b'
Found in set → b was at 4
left = max(3,4+1)=5
set = {a:3,b:6,c:5}
max = max(3,6-5+1)=2
Iteration 7 → i = 7, char = 'b'
Found in set → b was at 6
left = max(5,6+1)=7
set = {a:3,b:7,c:5}
max = max(3,7-7+1)=1
✅ Final Answer
3

Longest substring without repeating characters = "abc"
🧠 Key Idea
Use Map to track last index of each character.
Left pointer moves forward if character repeats.
Window length = i - left + 1
Max length = maximum of all windows
⚡ Complexity
Time: O(n) ✅
Space: O(min(n, charset)) ✅



Perfect 🔥 — this is correct + optimized Sliding Window + HashMap (Map) implementation.

Now let’s break it in 🔍 Detailed Iterations (Story Style) so you can explain in interviews confidently.

✅ Input
data = "abcabcbb"

🔍 Detailed Iterations (Story Style)
👉 i = 0 ('a')
Not in map

Add: a → index 0
map = {a:0}

Window = "a"
length = 1

max = 1

👉 i = 1 ('b')
Not in map

Add: b → index 1
map = {a:0, b:1}

Window = "ab"
length = 2

max = 2

👉 i = 2 ('c')
Not in map

Add: c → index 2
map = {a:0, b:1, c:2}

Window = "abc"
length = 3

max = 3

👉 i = 3 ('a') ❌ duplicate
'a' last seen at index 0

Move left:
left = max(0, 0+1) = 1

Update map:
a → 3

Window = "bca"
length = 3

max = 3

👉 i = 4 ('b') ❌ duplicate
'b' last seen at 1

Move left:
left = max(1, 1+1) = 2

Update map:
b → 4

Window = "cab"
length = 3

max = 3

👉 i = 5 ('c') ❌ duplicate
'c' last seen at 2

Move left:
left = max(2, 2+1) = 3

Update map:
c → 5

Window = "abc"
length = 3

max = 3

👉 i = 6 ('b') ❌ duplicate
'b' last seen at 4

Move left:
left = max(3, 4+1) = 5

Update map:
b → 6

Window = "cb"
length = 2

max = 3

👉 i = 7 ('b') ❌ duplicate again
'b' last seen at 6

Move left:
left = max(5, 6+1) = 7

Update map:
b → 7

Window = "b"
length = 1

max = 3

✅ Final Answer
3

🧠 Why Math.max(left, lastIndex + 1) is IMPORTANT 🔥

👉 This line prevents moving left backward

Example:

left = 5
duplicate found at index = 2

WRONG → left = 3 ❌ (goes backward)
CORRECT → left = max(5, 3) = 5 ✅

⚡ Pattern Summary
If element seen before:
    move left = max(current left, lastIndex + 1)

Always:
    update index in map
    calculate window size

🚀 Your Code is Interview-Ready ✅

Time Complexity: O(n)
Space Complexity: O(n)


Idea:

Use Set to track characters

Expand window with right

Remove duplicates by moving left

Time: O(n)
| i | char | window | max |
| - | ---- | ------ | --- |
| 0 | a    | a      | 1   |
| 1 | b    | ab     | 2   |
| 2 | c    | abc    | 3   |
| 3 | a    | bca    | 3   |
| 4 | b    | cab    | 3   |
| 5 | c    | abc    | 3   |
| 6 | b    | cb     | 3   |
| 7 | b    | b      | 3   |
