function elemntminx(data){

    let count=0

    let candation=null

    // debugger;

    for(let i=0; i<data.length; i++){


        if(count === 0){
            candation=data[i]
            count=1
        }else if(data[i] === candation){
            count++
        }else{
            count--
        }
    }

         return candation;
    // // Step 2: Verify cand
}


// | i | data[i] | candation | count | Explanation                        |
// | - | ------- | --------- | ----- | ---------------------------------- |
// | 0 | 1       | null      | 0     | count=0 → candation = 1, count=1   |
// | 1 | 2       | 1         | 1     | 2 !== 1 → else → count-- → count=0 |
// | 2 | 3       | 1         | 0     | count=0 → candation = 3, count=1   |
// | 3 | 3       | 3         | 1     | 3 === 3 → count++ → count=2        |
// | 4 | 3       | 3         | 2     | 3 === 3 → count++ → count=3        |


