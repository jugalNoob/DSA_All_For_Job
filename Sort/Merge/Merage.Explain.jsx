function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;                  // base case: 0 या 1 element → पहले से sorted
    }

    // Divide
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));    // बायां हिस्सा
    const right = mergeSort(arr.slice(mid));      // दायां हिस्सा

    // Conquer + Merge
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0;   // left array का pointer
    let j = 0;   // right array का pointer

    // दोनों arrays से छोटा element लेते जाओ
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // बचे हुए elements जोड़ दो (क्योंकि एक array खत्म हो गया)
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Test
let data = [38, 27, 43, 10, 34];
console.log(mergeSort(data));  
// Output: [10, 27, 34, 38, 43]