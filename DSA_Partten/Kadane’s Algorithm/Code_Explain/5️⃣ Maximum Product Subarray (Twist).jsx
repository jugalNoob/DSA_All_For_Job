Problem

Given an array, find the maximum product of a contiguous subarray.

Example: [2, 3, -2, 4]

Maximum product = 6 → subarray [2,3]

Example with negatives: [2, 3, -2, 4, -1]

Maximum product = 48 → subarray [2,3,-2,4,-1] (negative × negative = positive!)

Observation / Idea

Unlike sum, product can change drastically with negative numbers:

A negative × negative = positive → can become the new max

A positive × negative = negative → can destroy the current max

So we need two states at each index:

maxEndingHere → maximum product ending at current index

minEndingHere → minimum product ending at current index (because a large negative × negative can become max)

Transition Formula

At each element arr[i]:

tempMax = max(arr[i], arr[i] * maxEndingHere, arr[i] * minEndingHere)
minEndingHere = min(arr[i], arr[i] * maxEndingHerePrev, arr[i] * minEndingHere)
maxEndingHere = tempMax


Update maxSoFar = max(maxSoFar, maxEndingHere)

JavaScript Implementation
function maxProductSubarray(arr) {
    if (arr.length === 0) return 0;

    let maxEndingHere = arr[0];
    let minEndingHere = arr[0];
    let maxSoFar = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let tempMax = Math.max(arr[i], arr[i] * maxEndingHere, arr[i] * minEndingHere);
        minEndingHere = Math.min(arr[i], arr[i] * maxEndingHere, arr[i] * minEndingHere);
        maxEndingHere = tempMax;

        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

// Examples
console.log(maxProductSubarray([2, 3, -2, 4]));       // Output: 6 ([2,3])
console.log(maxProductSubarray([2, 3, -2, 4, -1]));   // Output: 48 ([2,3,-2,4,-1])

Step-by-Step Example [2,3,-2,4,-1]

| i | arr[i] | maxEndingHere                 | minEndingHere | maxSoFar |
| - | ------ | ----------------------------- | ------------- | -------- |
| 0 | 2      | 2                             | 2             | 2        |
| 1 | 3      | 6                             | 3             | 6        |
| 2 | -2     | 6*-2 = -12? max(-2,-12,3*-2?) | ...           | 6?       |



Better to compute carefully:

i=2, arr[i] = -2

tempMax = max(-2, -26 = -12, -23= -6) = -2

minEndingHere = min(-2, -26=-12, -23=-6) = -12

maxSoFar = max(6, -2) = 6

i=3, arr[i]=4

tempMax = max(4, 4*-2=-8, 4*-12=-48) = 4

minEndingHere = min(4, 4*-2=-8, 4*-12=-48) = -48

maxSoFar = max(6,4) = 6

i=4, arr[i]=-1

tempMax = max(-1, -14=-4, -1-48=48) = 48 ✅

minEndingHere = min(-1, -4, -48) = -48

maxSoFar = max(6,48) = 48 ✅

✅ Maximum product = 48

Key Insight

Must track both max and min at each step due to negative numbers.

Single negative number can flip min → max.

Works with positives, negatives, and zeros.

If you want, I can draw a visual diagram showing how max/min changes with each element, which makes this tricky product variation very intuitive for interviews.