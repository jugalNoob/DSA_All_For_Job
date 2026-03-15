function longest(data){

    let str = data.split(" ")

    let long = ""

    for(let i = 0; i < str.length; i++){

        if(str[i].length > long.length){
            long = str[i]
        }
    }

    return long
}

console.log(longest("i my name jugal sharma"))



4️⃣ Step-by-Step

Input:

"i my name jugal sharma"


After split:

["i","my","name","jugal","sharma"]


Loop comparison:

i → length 1
my → length 2
name → length 4
jugal → length 5
sharma → length 6 ✅


Result:

sharma