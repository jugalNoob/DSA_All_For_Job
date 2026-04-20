function dutchFlag(arr) {
    let low = 0, mid = 0, high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else if (arr[mid] === 2) {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }

    return arr;
}

console.log(dutchFlag([0, 2, 1, 2, 0, 0, 1]));



🧠 Explanation
low → boundary for 0s
mid → current index
high → boundary for 2s

Steps:

If arr[mid] == 0 → swap with low, increment low & mid
If arr[mid] == 1 → just increment mid
If arr[mid] == 2 → swap with high, decrement high
