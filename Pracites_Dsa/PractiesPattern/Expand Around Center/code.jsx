


🧠 6. Expand Around Center (🔥 VERY IMPORTANT)

👉 Use when:

longest palindrome substring
Idea:

Expand from center → left & right

function expand(l, r, s) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
    }
    return s.slice(l + 1, r);
}

🔥 Problem:
Longest Palindromic Substring





function longestPalindrome(s) {
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        // Odd length palindrome
        let odd = expand(i, i, s);
        // Even length palindrome
        let even = expand(i, i + 1, s);

        // Pick the longer one
        let candidate = odd.length > even.length ? odd : even;

        if (candidate.length > longest.length) {
            longest = candidate;
        }
    }

    return longest;
}

// Test
console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // "bb"
