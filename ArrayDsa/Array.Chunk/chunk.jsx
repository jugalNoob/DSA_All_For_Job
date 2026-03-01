function chunkArray(arr, k) {
    let result = [];
    let temp = [];

    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);

        if (temp.length === k) {
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length > 0) {
        result.push(temp);
    }

    return result;
}

console.log(chunkArray([1,2,3,4,5,6,7], 3));




 function chunkArray(arr, k) {
    let result = [];

    for (let i = 0; i < arr.length; i += k) {
        result.push(arr.slice(i, i + k));
    }

    return result;
}

console.log(chunkArray([1,2,3,4,5,6,7], 2));
 
 

function chunkRecursive(arr, k) {
    if (arr.length === 0) return [];
    return [arr.slice(0, k), ...chunkRecursive(arr.slice(k), k)];
}

console.log(chunkRecursive([1,2,3,4,5,6,7], 3));