function bubbleSortOptimized(arr) {
    let n = arr.length;
    let swapped;
    
    do {
        swapped = false;
        
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // modern swap
                swapped = true;
            }
        }
        
        n--;  // After each pass, last element is in correct position
    } while (swapped);
    
    return arr;
}

let data=[60 , 40 , 20]

console.log(bubbleSortOptimized(data))