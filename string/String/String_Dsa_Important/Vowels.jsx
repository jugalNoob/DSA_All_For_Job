✅ Count Vowels in a String (Simple + Clear)
Logic

Vowels = a, e, i, o, u (both upper & lower case)

✅ Basic version
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("jugal sharma")); // 4

🔥 Optimized (ASCII based – no includes)
function countVowels(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();

        if (
            ch === 'a' ||
            ch === 'e' ||
            ch === 'i' ||
            ch === 'o' ||
            ch === 'u'
        ) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("JUGAL")); // 2

⚡ One-liner (not for interviews 😄)
const countVowels = s => s.match(/[aeiou]/gi)?.length || 0;

🧠 Interview explanation

Time Complexity: O(n)

Space Complexity: O(1)

Traverses string once

Checks each character against vowels


⚡ One-liner (not for interviews 😄)
const countVowels = s => s.match(/[aeiou]/gi)?.length || 0;