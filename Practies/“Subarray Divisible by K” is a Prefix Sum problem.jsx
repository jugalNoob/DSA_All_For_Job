✅ YES — “Subarray Divisible by K” is a Prefix Sum problem 🔥

🧠 WHY it is Prefix Sum?

👉 Because:

You need to count subarrays

Condition is based on sum

Uses modulo + past sums

🎯 CORE IDEA

Instead of checking all subarrays ❌
We use:

prefixSum % K

🔥 KEY LOGIC

👉 If:

prefixSum[i] % K == prefixSum[j] % K


👉 Then:

subarray (i+1 → j) is divisible by K

🧠 WHY THIS WORKS?

Because:

(sum[j] - sum[i]) % K = 0


👉 So:

sum[j] % K == sum[i] % K

⚡ PATTERN

👉 This is:

✔ Prefix Sum
✔ HashMap (store frequency of mod)

🚀 CODE
function subarraysDivByK(nums, k) {
    let map = new Map();
    map.set(0, 1);

    let sum = 0;
    let count = 0;

    for (let num of nums) {
        sum += num;

        let mod = ((sum % k) + k) % k;

        if (map.has(mod)) {
            count += map.get(mod);
        }

        map.set(mod, (map.get(mod) || 0) + 1);
    }

    return count;
}

🧪 EXAMPLE
nums = [4,5,0,-2,-3,1]
k = 5


👉 Answer = 7

⚠️ IMPORTANT LINE
let mod = ((sum % k) + k) % k;


👉 Handles negative numbers correctly

🧠 PATTERN SUMMARY


| Feature         | Yes/No |
| --------------- | ------ |
| Uses sum        | ✅      |
| Uses hashmap    | ✅      |
| Uses history    | ✅      |
| Sliding window? | ❌      |


👉 ✅ Final: Prefix Sum Pattern

🎯 INTERVIEW LINE

This problem uses prefix sum with a hashmap where we
 track the frequency of prefix sum modulo K to count 
 subarrays 
divisible by K.