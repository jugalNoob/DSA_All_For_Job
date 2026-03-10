Problem

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

Rules:

Each character must map to exactly one character.

No two characters may map to the same character.

Examples:

Input: s = "egg", t = "add"
Output: true
Explanation: e → a, g → d

Input: s = "foo", t = "bar"
Output: false
Explanation: f → b, o → a? But second 'o' cannot map to 'r' → false

Input: s = "paper", t = "title"
Output: true
Explanation: p → t, a → i, p → t (ok), e → l, r → e

Approach / Core Logic

Idea: Maintain mappings from s → t and t → s to ensure one-to-one mapping.

Iterate over strings:

If s[i] is already mapped → check it matches t[i]

If t[i] is already mapped → check it matches s[i]

Otherwise → add mapping.

Data Structures:

Two hash maps (Map in JS or dict in Python) for bidirectional mapping.


function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    const mapST = new Map(); // s -> t
    const mapTS = new Map(); // t -> s

    for (let i = 0; i < s.length; i++) {
        const c1 = s[i];
        const c2 = t[i];

        if (mapST.has(c1)) {
            if (mapST.get(c1) !== c2) return false;
        } else {
            mapST.set(c1, c2);
        }

        if (mapTS.has(c2)) {
            if (mapTS.get(c2) !== c1) return false;
        } else {
            mapTS.set(c2, c1);
        }
    }

    return true;
}


| i | s[i] | t[i] | mapST                    | mapTS                    | Check |
| - | ---- | ---- | ------------------------ | ------------------------ | ----- |
| 0 | p    | t    | {p→t}                    | {t→p}                    | OK    |
| 1 | a    | i    | {p→t, a→i}               | {t→p, i→a}               | OK    |
| 2 | p    | t    | Already mapped → matches | Already mapped → matches | OK    |
| 3 | e    | l    | {p→t, a→i, e→l}          | {t→p, i→a, l→e}          | OK    |
| 4 | r    | e    | {p→t, a→i, e→l, r→e}     | {t→p, i→a, l→e, e→r}     | OK    |



✅ All checks pass → return true

Time & Space Complexity

Time: O(n) → iterate strings once.

Space: O(n) → two hash maps.

Node.js / Backend Relevance

Useful in data normalization / mapping tasks.

Can be used in string encoding / pattern checking scenarios.

Interview favorite for hash maps, one-to-one mapping, and bidirectional logic.


Perfect! Let’s do this step by step. I’ll show the shorter elegant version of Isomorphic Strings and then explain real-world use cases in Node.js / backend systems.

1️⃣ Short Elegant Version (Single Map + Set)

Instead of two maps, we can use one map for s → t and a Set to track used characters in t.

function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    const map = new Map();
    const used = new Set();

    for (let i = 0; i < s.length; i++) {
        const c1 = s[i];
        const c2 = t[i];

        if (map.has(c1)) {
            if (map.get(c1) !== c2) return false; // existing mapping mismatch
        } else {
            if (used.has(c2)) return false; // t char already mapped
            map.set(c1, c2);
            used.add(c2);
        }
    }

    return true;
}


Explanation:

map → tracks which s character maps to which t character.

used → ensures no two s characters map to the same t character.

Single loop → O(n) time, O(n) space.

Cleaner and elegant for interviews.

2️⃣ Step-by-Step Example

s = "paper", t = "title"


| i | s[i] | t[i] | map                      | used         | Check |
| - | ---- | ---- | ------------------------ | ------------ | ----- |
| 0 | p    | t    | {p→t}                    | {t}          | OK    |
| 1 | a    | i    | {p→t, a→i}               | {t, i}       | OK    |
| 2 | p    | t    | already mapped → matches | OK           | OK    |
| 3 | e    | l    | {p→t, a→i, e→l}          | {t, i, l}    | OK    |
| 4 | r    | e    | {p→t, a→i, e→l, r→e}     | {t, i, l, e} | OK    |


3️⃣ Where Use This in Real Projects / Node.js Backend

Isomorphic string logic may sound abstract, but practical uses include:

A. Pattern Matching / Input Validation

Check if two strings follow the same pattern.

Example: mapping user roles to allowed actions.

roles = "abc", actions = "xyz" → valid if a→x, b→y, c→z

B. Data Transformation / Mapping

Transform legacy system codes → new system codes.

Ensure one-to-one mapping, no duplicates.

oldIDs = "1123", newIDs = "AABC" → verify mapping integrity

C. String Encoding / Compression

Useful in algorithms that normalize text.

Detect patterns in strings for hashing / anonymization.

D. Backend / Microservices

Mapping API request params → internal DB fields.

Ensures no collisions, safe data transformation.

4️⃣ Key Points for FAANG / Interviews

Tests hash map + set usage.

Checks understanding of one-to-one mapping, collisions, uniqueness.

Can be extended to pattern matching, resource allocation, or code conversion tasks.