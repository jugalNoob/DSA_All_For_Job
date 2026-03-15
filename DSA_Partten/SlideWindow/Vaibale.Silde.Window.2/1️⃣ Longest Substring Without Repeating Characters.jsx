function notreplate(data){

    let left = 0
    let map = new Map()
    let max = 0

    for(let i = 0; i < data.length; i++){

        if(map.has(data[i])){
            left = Math.max(left, map.get(data[i]) + 1)
        }

        map.set(data[i], i)

        max = Math.max(max, i - left + 1)
    }

    return max
}

console.log(notreplate("abcabcbb")) // 3
console.log(notreplate("bbbbb")) // 1

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
