

🧠 What is “Palindrome Partitioning”?

👉 It means:

Split a string into parts such that EVERY part is a palindrome

🔍 Example
Input: "aab"

Valid partitions:
["a", "a", "b"]   ✅ (all are palindrome)
["aa", "b"]       ✅

Invalid:
["a", "ab"] ❌ (ab is not palindrome)

🧠 Key Idea

👉 We need to:

Try all possible splits
Keep only those where each substring is palindrome
🎯 Pattern

👉 This is Backtracking (Very Important)

🧠 Step-by-Step Thinking

For "aab":

Start:
"a" → valid → continue
   "a" → valid → continue
      "b" → valid → ✅ push ["a","a","b"]

Backtrack...

"aa" → valid → continue
   "b" → valid → ✅ push ["aa","b"]

💻 Code (Interview Ready)
function partition(s) {
    let result = [];

    function isPalindrome(str) {
        let left = 0, right = str.length - 1;

        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    function backtrack(start, path) {
        if (start === s.length) {
            result.push([...path]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            let substring = s.substring(start, end + 1);

            if (isPalindrome(substring)) {
                path.push(substring);
                backtrack(end + 1, path);
                path.pop(); // backtrack
            }
        }
    }

    backtrack(0, []);
    return result;
}

console.log(partition("aab"));

🔍 Output
[
  ["a","a","b"],
  ["aa","b"]
]

⏱️ Complexity
Time: O(2ⁿ) (all partitions)
Space: O(n) recursion
🧠 Pattern Recognition

| Problem says          | Pattern      |
| --------------------- | ------------ |
| all partitions        | Backtracking |
| palindrome check      | Two pointer  |
| generate combinations | Backtracking |


