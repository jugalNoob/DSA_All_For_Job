🔁 Left Rotation (just small change)
function rotateLeft(arr, k){
    let n = arr.length
    k = k % n

    reverse(arr, 0, k-1)
    reverse(arr, k, n-1)
    reverse(arr, 0, n-1)

    return arr
}
