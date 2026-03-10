function lengthOfLongestSubstringNoDelete(s){

    let map=new Map()

    let left=0 

    let maxlength=0


    for(let i=0; i<s.length; i++){

        if(map.has(s[i])){
            left=   Math.max(left , map.get(s[left])+1)
        }

      console.log(  map.set(s[i] , i))

        maxlength=Math.max(maxlength , i-left+1)
    }

    return maxlength
}


console.log(lengthOfLongestSubstringNoDelete("abcabcbb")); // 3 -> "abc"
console.log(lengthOfLongestSubstringNoDelete("bbbbb"));    // 1 -> "b"

console.log(lengthOfLongestSubstring("abcabcbb")); // 3 -> "abc"
console.log(lengthOfLongestSubstring("bbbbb"));    // 1 -> "b"


| right | char | map           | left | window | maxLength |
| ----- | ---- | ------------- | ---- | ------ | --------- |
| 0     | a    | {a:0}         | 0    | a      | 1         |
| 1     | b    | {a:0,b:1}     | 0    | ab     | 2         |
| 2     | c    | {a:0,b:1,c:2} | 0    | abc    | 3         |
| 3     | a    | {a:3,...}     | 1    | bca    | 3         |
| 4     | b    | {b:4,...}     | 2    | cab    | 3         |
