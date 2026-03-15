5️⃣ Maximum Sum Subarray of Size K

5️⃣ Maximum Sum Subarray of Size K
function maxSumSubarray(nums, k) {
    let sum = 0;
    let maxSum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    maxSum = sum;

    for (let i = k; i < nums.length; i++) {
        sum = sum + nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}

console.log(maxSumSubarray([1,4,2,10,23,3,1,0,20], 4)); // 39


Idea:

Fixed window size K

Add next element and remove first element


Let's understand your function step by step with a dry run.
Input:

"abcabcbb"


Goal: find the length of the longest substring without repeating characters.

Your code uses Sliding Window + HashMap.

1️⃣ Initial State
s = "abcabcbb"

left = 0
maxlength = 0
map = {}


Window:

[left → i]

2️⃣ Iteration 1
i = 0
char = 'a'


Check map:

map.has('a') → false


Add to map:

map = { a:0 }


Window size:

i - left + 1
0 - 0 + 1 = 1


Update:

maxlength = 1


Window:

[a]

3️⃣ Iteration 2
i = 1
char = 'b'


Not in map.

Add:

map = { a:0 , b:1 }


Window size:

1 - 0 + 1 = 2


Update:

maxlength = 2


Window:

[a b]

4️⃣ Iteration 3
i = 2
char = 'c'


Add:

map = { a:0 , b:1 , c:2 }


Window size:

2 - 0 + 1 = 3


Update:

maxlength = 3


Window:

[a b c]

5️⃣ Iteration 4 (Duplicate)
i = 3
char = 'a'


Map already contains:

a:0


Move left pointer:

left = Math.max(0 , 0+1)
left = 1


Update map:

map = { a:3 , b:1 , c:2 }


Window size:

3 - 1 + 1 = 3


Window:

[b c a]


maxlength remains:

3

6️⃣ Iteration 5
i = 4
char = 'b'


Duplicate:

b:1


Move left:

left = Math.max(1 , 1+1)
left = 2


Update map:

map = { a:3 , b:4 , c:2 }


Window:

[c a b]


Window size:

4 - 2 + 1 = 3


maxlength:

3

7️⃣ Iteration 6
i = 5
char = 'c'


Duplicate:

c:2


Move left:

left = Math.max(2 , 2+1)
left = 3


Window:

[a b c]


maxlength:

3

8️⃣ Iteration 7
i = 6
char = 'b'


Duplicate:

b:4


Move left:

left = Math.max(3 , 4+1)
left = 5


Window:

[c b]


maxlength:

3

9️⃣ Iteration 8
i = 7
char = 'b'


Duplicate again.

Move left:

left = Math.max(5 , 6+1)
left = 7


Window:

[b]


maxlength still:

3

🔟 Final Result
maxlength = 3


Longest substring:

"abc"

Visual Sliding Window
abcabcbb

[a]        size=1
[a b]      size=2
[a b c]    size=3
  [b c a]
    [c a b]
      [a b c]
        [c b]
          [b]


Maximum window = 3

Complexity (Interview Important)

Time:

O(n)


Space:

O(k)  (unique characters)

⭐ Interview Explanation (Best Answer)

You can say:

I use a sliding window with a hashmap to store the last index of characters. When a duplicate character appears, I move the left pointer to the position after the previous occurrence of that character.

If you want, I can also show the complete sliding window pattern (10 most asked interview problems) like:

Longest substring
Minimum window substring
Permutation in string
Longest repeating replacement
Sliding window maximum


These cover ~40% of FAANG string question