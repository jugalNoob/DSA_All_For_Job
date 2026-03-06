function longestSubarray(data, target) {
    let left = 0
    let sum = 0
    let maxlength = 0

    for (let right = 0; right < data.length; right++) {

        sum += data[right]

        while (sum > target) {
            sum -= data[left]
            left++               // move window forward
        }

        maxlength = Math.max(maxlength, right - left + 1)
    }

    return maxlength
}

console.log(longestSubarray([1,2,3,4,5], 9));

📌 Output

For:

[1,2,3,4,5] , target = 9


Valid subarrays:

[2,3,4] = 9 → length 3

[4,5] = 9 → length 2

✅ Answer = 3