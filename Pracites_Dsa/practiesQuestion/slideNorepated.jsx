function notreplate(data){

    let left = 0
    let map = new Map()
    let max = 0

    for(let i = 0; i < data.length; i++){

        if(map.has(data[i])){
            left = Math.max(left, map.get(data[i]) + 1)
        }

        map.set(data[i], i) // store index

        max = Math.max(max, i - left + 1)
    }

    return max
}

console.log(notreplate("abcabcbb")) // 3
console.log(notreplate("bbbbb")) // 1


Variables:
left = 0
max = 0
set = {}

Iteration 0 → i = 0, char = 'a'
Not in set → ok
set = {a:0}
max = 0-0+1 = 1
Iteration 1 → i = 1, char = 'b'
Not in set
set = {a:0, b:1}
max = 1-0+1 = 2
Iteration 2 → i = 2, char = 'c'
Not in set
set = {a:0,b:1,c:2}
max = 2-0+1 = 3
Iteration 3 → i = 3, char = 'a'
Found in set → a was at 0
left = max(left, 0+1) = 1
set = {a:3, b:1, c:2}
max = max(3, 3-1+1) = 3
Iteration 4 → i = 4, char = 'b'
Found in set → b was at 1
left = max(1,1+1)=2
set = {a:3, b:4, c:2}
max = max(3,4-2+1)=3
Iteration 5 → i = 5, char = 'c'
Found in set → c was at 2
left = max(2,2+1)=3
set = {a:3, b:4, c:5}
max = max(3,5-3+1)=3
Iteration 6 → i = 6, char = 'b'
Found in set → b was at 4
left = max(3,4+1)=5
set = {a:3,b:6,c:5}
max = max(3,6-5+1)=2
Iteration 7 → i = 7, char = 'b'
Found in set → b was at 6
left = max(5,6+1)=7
set = {a:3,b:7,c:5}
max = max(3,7-7+1)=1
✅ Final Answer