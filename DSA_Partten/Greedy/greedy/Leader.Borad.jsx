function leaders(arr) {
    const result = [];
    let maxRight = arr[arr.length - 1];

    result.push(maxRight); // last is always leader

    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] >= maxRight) {
            maxRight = arr[i];
            result.push(arr[i]);
        }
    }

    return result.reverse();
}
🚀 EDGE CASES (IMPORTANT)

All increasing:

[1,2,3,4] → [4]


All decreasing:

[4,3,2,1] → [4,3,2,1]


Same values:

[5,5,5] → [5,5,5]

🔥 PATTERN CONNECTION

👉 This problem uses:

Greedy thinking → keep best (maxRight)

Reverse traversal trick

Similar to:

Stock span (reverse logic)

Next greater element (variation)