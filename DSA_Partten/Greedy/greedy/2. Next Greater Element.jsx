2. Next Greater Element to the Right (classic)
Problem: For each element, find the next greater element to its right. If none → -1.
Input: [1, 3, 2, 4]
Output: [3, 4, 4, -1]
Very efficient solution uses monotonic stack (decreasing):
But first — let's see a brute force version using prefixMax intuition (though not optimal):
JavaScriptfunction nextGreaterBrute(arr) {
    const n = arr.length;
    const prefix = prefixMax(arr);
    const ans = new Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
        // look right from i+1 to end
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[i]) {
                ans[i] = arr[j];
                break;
            }
        }
    }
    return ans;
}
Best O(n) solution (monotonic stack – most asked in interviews):
JavaScriptfunction nextGreaterElement(arr) {
    const n = arr.length;
    const ans = new Array(n).fill(-1);
    const stack = [];  // will keep indices (decreasing values)

    for (let i = n - 1; i >= 0; i--) {
        // remove elements smaller than or equal to current
        while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }

        if (stack.length > 0) {
            ans[i] = arr[stack[stack.length - 1]];
        }

        stack.push(i);
    }

    return ans;
}

console.log(nextGreaterElement([1, 3, 2, 4]));     // [3, 4, 4, -1]
console.log(nextGreaterElement([4, 5, 2, 25]));    // [5, 25, 25, -1]
console.log(nextGreaterElement([13, 7, 6, 12]));   // [-1, 12, 12, -1]
Quick summary – when to think of prefixMax
You should think of prefix maximum when the question asks something about:

maximum in prefix [0…i]
whether current element is the max so far
building histograms / water trapping intuition
some sliding window maximum problems (deque version is better, but prefix helps understand)

Want to see:

Rain water trapping using prefix max + prefix min?
How to modify the code for previous greater instead of next greater?
Or something else you’re curious about?

Just tell me which direction you'd like to go next! 🚀