🔥 3. Leaders in Array (Amazon Favorite)
🧠 Problem
arr = [16,17,4,3,5,2]


Find elements greater than all elements to the right.

💡 Trick

👉 Use suffix max (reverse prefix max)

🚀 Code
function leaders(arr){
    let n = arr.length
    let maxRight = arr[n-1]
    let result = [maxRight]

    for(let i=n-2;i>=0;i--){
        if(arr[i] > maxRight){
            result.push(arr[i])
            maxRight = arr[i]
        }
    }

    return result.reverse()
}

🎯 Pattern

👉 Reverse loop = suffix max