/**
 * Calculates a delay for exponential backoff with jitter
 * @param {number} baseDelay - minimum delay in ms
 * @param {number} previousDelay - previous delay in ms
 * @param {number} maxDelay - maximum delay in ms
 * @returns {number} delay in ms
 */
function calu(baseDelay, previousDelay, maxDelay) {
    const min = baseDelay;
    const max = previousDelay * 3; // exponential growth
    const randomDelay = Math.random() * (max - min) + min; // jitter
    return Math.min(randomDelay, maxDelay);
}

/**
 * Loop to generate delays using calu
 * @param {number} iterations - number of loop iterations
 * @param {number} baseDelay - minimum delay
 * @param {number} maxDelay - maximum delay
 */
function loop(iterations = 10, baseDelay = 100, maxDelay = 1000) {
    let previousDelay = baseDelay;

    for (let i = 0; i < iterations; i++) {
        const delay = calu(baseDelay, previousDelay, maxDelay);
        console.log(`Iteration ${i + 1}: delay = ${Math.floor(delay)} ms`);
        previousDelay = delay; // update for next iteration
    }
}

// Run the loop
loop(10, 100, 5000);
