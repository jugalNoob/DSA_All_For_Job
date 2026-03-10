1️⃣ Longest Substring Without Repeating Characters

function nonretap(data){

    let left = 0
    let set = new Set()
    let maxlength = 0

    for(let i = 0; i < data.length; i++){

        while(set.has(data[i])){
            set.delete(data[left])
            left++
        }

        set.add(data[i])

        maxlength = Math.max(maxlength, i - left + 1)
    }

    return maxlength
}

console.log(nonretap("abcabcbb")) // 3



Idea:

Use Set to track characters

Expand window with right

Remove duplicates by moving left

Time: O(n)
| i | char | window | max |
| - | ---- | ------ | --- |
| 0 | a    | a      | 1   |
| 1 | b    | ab     | 2   |
| 2 | c    | abc    | 3   |
| 3 | a    | bca    | 3   |
| 4 | b    | cab    | 3   |
| 5 | c    | abc    | 3   |
| 6 | b    | cb     | 3   |
| 7 | b    | b      | 3   |
