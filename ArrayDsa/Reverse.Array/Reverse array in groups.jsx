def reverseInGroups(arr, k):
    n = len(arr)
    
    # Step through the array in chunks of 'k'
    for i in range(0, n, k):
        left = i
        
        # Ensure 'right' doesn't go out of bounds
        right = min(i + k - 1, n - 1)
        
        # Standard array reversal using two pointers
        while left < right:
            arr[left], arr[right] = arr[right], arr[left]
            left += 1
            right -= 1
            
    return arr

# Example usage:
# arr = [1, 2, 3, 4, 5], k = 3
# Output: [3, 2, 1, 5, 4]