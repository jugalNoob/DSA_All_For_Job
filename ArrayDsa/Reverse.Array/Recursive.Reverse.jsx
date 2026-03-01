function reverseRecursive(arr, start = 0, end = arr.length - 1) {

  if (start >= end) return arr;
  [arr[start], arr[end]] = [arr[end], arr[start]];
  return reverseRecursive(arr, start + 1, end - 1);
}

