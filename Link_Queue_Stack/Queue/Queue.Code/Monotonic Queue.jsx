What is a Monotonic Queue?

A Monotonic Queue is a queue that keeps its elements in either increasing or decreasing order.

Increasing Monotonic Queue: front → smallest, rear → largest

Decreasing Monotonic Queue: front → largest, rear → smallest

Why useful:

Sliding window maximum/minimum problems

Optimization of some DP problems

Reduces complexity from O(n²) → O(n)



class MonotonicQueue {
  constructor() {
    this.queue = [];
  }

  // Push new value while maintaining decreasing order
  push(value) {
    // Remove smaller elements from the end
    while (this.queue.length && this.queue[this.queue.length - 1] < value) {
      this.queue.pop();
    }
    this.queue.push(value);
  }

  // Remove the element from the front if it equals value
  pop(value) {
    if (this.queue.length && this.queue[0] === value) {
      this.queue.shift();
    }
  }

  // Get the current maximum (front element)
  max() {
    return this.queue[0];
  }
}

// Example: Sliding window maximum
function slidingWindowMax(nums, k) {
  const mq = new MonotonicQueue();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i >= k) {
      mq.pop(nums[i - k]); // remove element moving out of window
    }

    mq.push(nums[i]);
    if (i >= k - 1) {
      result.push(mq.max());
    }
  }

  return result;
}

// Example usage
const arr = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(slidingWindowMax(arr, k)); 
// Output: [3, 3, 5, 5, 6, 7]
