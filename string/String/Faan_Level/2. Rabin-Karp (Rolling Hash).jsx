🔥 2. Rabin-Karp (Rolling Hash)
🧠 Idea

Compare hash values instead of strings

💡 Think like:

Instead of:

"abc" === "abc"


We do:

hash("abc") === hash("abc")

✅ Code (Simple Version)
function rabinKarp(text, pattern) {
    let n = text.length;
    let m = pattern.length;

    let patternHash = 0;
    let textHash = 0;
    let base = 256;

    for (let i = 0; i < m; i++) {
        patternHash += pattern.charCodeAt(i);
        textHash += text.charCodeAt(i);
    }

    for (let i = 0; i <= n - m; i++) {
        if (patternHash === textHash) {
            if (text.substr(i, m) === pattern) {
                return i;
            }
        }

        if (i < n - m) {
            textHash = textHash - text.charCodeAt(i) + text.charCodeAt(i + m);
        }
    }

    return -1;
}

⚡ Complexity
Average: O(n)
Worst: O(n × m) (hash collision)
🧠 Interview Line

“Uses rolling hash to reduce string comparisons.”