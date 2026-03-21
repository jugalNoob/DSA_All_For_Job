🧪 5. SUBARRAY SUM DIVISIBLE BY K
🧠 Pattern:

👉 Prefix Sum + Modulo

✅ Code
function subarraysDivByK(nums, k) {
    let map = new Map();
    map.set(0, 1);

    let sum = 0, count = 0;

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

⚡ FINAL PATTERN SUMMAR