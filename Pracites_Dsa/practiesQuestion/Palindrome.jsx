⚡ If you actually meant Two Sum

Then correct version is:

function twoSum(arr, target) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];

        if (map.has(diff)) {
            return [map.get(diff), i];
        }

        map.set(arr[i], i);
    }
}

👉 What do you want next?
✅ Palindrome deep (LPS full solution)
✅ Two Sum variations (sorted, unsorted, all pairs)
✅ Sliding window + string DSA roadmap