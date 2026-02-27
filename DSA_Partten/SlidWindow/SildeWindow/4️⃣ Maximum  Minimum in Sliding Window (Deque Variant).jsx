4️⃣ Maximum / Minimum in Sliding Window (Deque Variant)

4️⃣ Maximum / Minimum in Sliding Window (Deque Variant)

Maintains max/min in current window

Uses Deque to efficiently get max/min in O(1) per step

Window size is usually fixed

Example Problems:

Maximum of all subarrays of size k

Minimum in sliding window

Code Template:

let deque = []; // store indices
for (let i = 0; i < arr.length; i++) {
  while (deque not empty && arr[deque.back] < arr[i]) deque.pop();
  deque.push(i);

  if (deque.front < i - k + 1) deque.shift(); // remove out-of-window

  if (i >= k - 1) result.push(arr[deque.front]);
}