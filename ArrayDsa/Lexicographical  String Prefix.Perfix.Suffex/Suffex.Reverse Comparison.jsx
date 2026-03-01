Reverse Comparison2️⃣ Simple Approach (Reverse Comparison from End)

Instead of comparing from index 0, we compare from the last index backward.

✅ Implementation (Two Strings)
function longestCommonSuffix(word1, word2) {
    let suffix = "";
    
    let i = word1.length - 1;
    let j = word2.length - 1;

    while (i >= 0 && j >= 0) {
        if (word1[i] === word2[j]) {
            suffix = word1[i] + suffix; // prepend character
            i--;
            j--;
        } else {
            break;
        }
    }

    return suffix;
}

console.log(longestCommonSuffix("running", "jogging")); // "ing"

🔎 How It Works (Step-by-Step)

Compare from end:

running
jogging
       ↑ compare 'g' vs 'g' ✅
      ↑ compare 'n' vs 'n' ✅
     ↑ compare 'i' vs 'i' ✅
    ↑ compare 'n' vs 'g' ❌ stop


Result → "ing"

⏱ Complexity

Let:

m = length of word1

n = length of word2

Time Complexity:
O(min(m, n))

Space Complexity:
O(min(m, n)) → for building suffix string