3️⃣ Optimized Trick (Interview Smart Answer)

Instead of prepending (which is slightly costly), you can:

Count matching length

Return substring at end

function longestCommonSuffix(word1, word2) {
    let count = 0;

    while (
        count < word1.length &&
        count < word2.length &&
        word1[word1.length - 1 - count] === word2[word2.length - 1 - count]
    ) {
        count++;
    }

    return word1.slice(word1.length - count);
}


Cleaner. Faster in practice.