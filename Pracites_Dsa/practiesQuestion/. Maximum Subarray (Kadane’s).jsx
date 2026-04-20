⚡ Your Version (Minimal Fix)

If you want to keep your style:

function kadam(data) {
    let maxEnding = data[0];
    let maxSoFar = data[0];

    for (let i = 1; i < data.length; i++) {
        maxEnding = Math.max(data[i], maxEnding + data[i]);
        maxSoFar = Math.max(maxSoFar, maxEnding);
    }

    return maxSoFar;
}