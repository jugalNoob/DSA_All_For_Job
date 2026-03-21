function findMajorityElement(nums) {
    let count = 0;
    let candidate = null;

    // Phase 1: Find candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Phase 2: Verify (very important!)
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    if (count > nums.length / 2) {
        return candidate;
    }

    return null;   // or -1, or throw error — depending on problem
}



⚠️ IMPORTANT NOTE


👉 This gives candidate only

👉 To be 100% correct, verify:

function majorityElement(data) {
    let candidate = null;
    let count = 0;

    for (let num of data) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // 🔍 Verify
    let freq = 0;
    for (let num of data) {
        if (num === candidate) freq++;
    }

    return freq > data.length / 2 ? candidate : -1;
}

🧠 PATTERN TYPE

👉 ✅ Greedy Algorithm

⚡ WHY GREEDY?

👉 Because:

Take local decision (vote)

Works globally


🎯 INTERVIEW GOLD LINE

This uses Boyer-Moore Voting Algorithm, a greedy approach where elements cancel each other out, and the majority element remains as the final candidate.

🧠 MEMORY TRICK
Same → +1
Different → -1
Zero → reset