4️⃣ Variant: Array of Strings (Multiple Strings)

Same idea as prefix — but compare from end.

Approach:

Take first string as reference.

Compare ending with every other string.

Shrink suffix until it matches all.

function longestCommonSuffixArray(strs) {
    if (strs.length === 0) return "";

    let suffix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].endsWith(suffix)) {
            suffix = suffix.slice(1); // remove first character
            if (suffix === "") return "";
        }
    }

    return suffix;
}

console.log(longestCommonSuffixArray(["running","jogging","walking"])); // "ing"

5️⃣ Real-World Use Cases (Suffix)

Just like prefix has autocomplete, suffix has real production uses too 👇

✅ 1. File Extensions
"photo.jpg"
"document.jpg"


Common suffix → ".jpg"

Used in:

File filtering systems

Upload validation

✅ 2. Domain Matching
"api.example.com"
"mail.example.com"


Common suffix → "example.com"

Used in:

Multi-tenant SaaS systems

DNS resolution logic

✅ 3. NLP / Word Analysis
"running"
"jumping"


Common suffix → "ing"

Used in:

Stemming algorithms

Language processing