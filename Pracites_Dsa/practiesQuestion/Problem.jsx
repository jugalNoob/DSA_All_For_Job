🟢 1. ARRAY (15 Questions)
1. Two Sum
function twoSum(arr, target) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (map.has(diff)) return [map.get(diff), i];
        map.set(arr[i], i);
    }
}

2. Maximum Subarray (Kadane’s)
function maxSubArray(arr) {
    let max = arr[0], sum = 0;

    for (let num of arr) {
        sum += num;
        max = Math.max(max, sum);
        if (sum < 0) sum = 0;
    }
    return max;
}

3. Best Time to Buy & Sell Stock
function maxProfit(prices) {
    let min = prices[0], profit = 0;

    for (let p of prices) {
        min = Math.min(min, p);
        profit = Math.max(profit, p - min);
    }
    return profit;
}

4. Remove Duplicates (Sorted Array)
function removeDuplicates(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

5. Move Zeros
function moveZeroes(arr) {
    let j = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }
}

6. Missing Number
function missingNumber(arr) {
    let n = arr.length;
    let sum = n * (n + 1) / 2;
    return sum - arr.reduce((a, b) => a + b, 0);
}

7. Rotate Array
function rotate(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}

8. Merge Sorted Arrays
function merge(a, b) {
    return [...a, ...b].sort((x, y) => x - y);
}

9. Contains Duplicate
function containsDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}

10. Product Except Self
function productExceptSelf(arr) {
    let res = Array(arr.length).fill(1);

    let left = 1;
    for (let i = 0; i < arr.length; i++) {
        res[i] = left;
        left *= arr[i];
    }

    let right = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        res[i] *= right;
        right *= arr[i];
    }

    return res;
}

11. Subarray Sum = K
function subarraySum(arr, k) {
    let map = new Map();
    map.set(0, 1);
    let sum = 0, count = 0;

    for (let num of arr) {
        sum += num;
        if (map.has(sum - k)) count += map.get(sum - k);
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}

12. Maximum Product Subarray
function maxProduct(arr) {
    let max = arr[0], min = arr[0], res = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let temp = max;
        max = Math.max(arr[i], arr[i] * max, arr[i] * min);
        min = Math.min(arr[i], arr[i] * temp, arr[i] * min);
        res = Math.max(res, max);
    }
    return res;
}

13. Sort 0s,1s,2s (Dutch Flag)
function sortColors(arr) {
    let low = 0, mid = 0, high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++; mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
}

14. Longest Consecutive Sequence
function longestConsecutive(arr) {
    let set = new Set(arr);
    let max = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let curr = num;
            let count = 1;

            while (set.has(curr + 1)) {
                curr++;
                count++;
            }
            max = Math.max(max, count);
        }
    }
    return max;
}

15. Trapping Rain Water
function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0, water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
            right--;
        }
    }
    return water;
}

🟡 2. STRING (10 Questions)
16. Valid Anagram
function isAnagram(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
}

17. Longest Substring Without Repeating
function longestSubstring(s) {
    let set = new Set();
    let left = 0, max = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left++]);
        }
        set.add(s[right]);
        max = Math.max(max, right - left + 1);
    }
    return max;
}

18. Reverse String
const reverse = s => s.split('').reverse().join('');

19. Palindrome
const isPalindrome = s => s === s.split('').reverse().join('');

20. First Unique Character
function firstUnique(s) {
    let map = {};

    for (let ch of s) map[ch] = (map[ch] || 0) + 1;

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) return i;
    }
    return -1;
}

🔵 3. LINKED LIST (5 Questions)
21. Reverse Linked List
function reverse(head) {
    let prev = null;

    while (head) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

22. Detect Cycle
function hasCycle(head) {
    let slow = head, fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}