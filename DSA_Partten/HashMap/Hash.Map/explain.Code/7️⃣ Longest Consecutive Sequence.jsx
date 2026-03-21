7️⃣ Longest Consecutive Sequence

Problem: Find the length of the longest consecutive elements sequence.

Example:

arr = [100,4,200,1,3,2] → 4 (sequence [1,2,3,4])


Solution using HashSet (or Map):

function longestConsecutive(nums) {
    const set = new Set(nums);
    let maxLen = 0;
    for (let num of set) {
        if (!set.has(num-1)) { // start of sequence
            let curr = num, length = 1;
            while (set.has(curr+1)) {
                curr++;
                length++;
            }
            maxLen = Math.max(maxLen, length);
        }
    }
    return maxLen;
}
console.log(longestConsecutive([100,4,200,1,3,2])); 