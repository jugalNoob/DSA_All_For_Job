isPalindrome(){

    let arr = []
    let current = this.head

    while(current){
        arr.push(current.value)
        current = current.next
    }

    let left = 0
    let right = arr.length - 1

    while(left < right){
        if(arr[left] !== arr[right]){
            return false
        }
        left++
        right--
    }

    return true
}



Complexity:

Time: O(n)

Space: O(n) ❌

🎯 Important Interview Edge Cases

Empty list → true

Single node → true

Even length list

Odd length list

🔥 Advanced Interview Question

After checking palindrome, restore original list.

Why?

Because interviewer may say:

Do not modify the original list.

Then you reverse second half again.

🧠 Visualization Trick

Think like this:

Forward  → 1 2 3
Backward → 1 2 3


If both match → palindrome.