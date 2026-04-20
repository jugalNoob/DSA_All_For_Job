maxConsecutivefunction maxConsecutive(arr) {
    let max = 1;
    let count = 1;

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] === arr[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        max = Math.max(max, count);
    }

    return max;
}


console.log(maxConsecutive([1, 1, 3, 2, 3, 1, 1, 1])); // 3



function maxconsective(data)
{

    let count=0

    let max=0

    for(let i=0; i<data.length; i++){

        if(data[i] === data[i-1]){

            count++
        }else{

            count=1
        }
    }

    return max=Math.max(count , max)
}

console.log(maxconsective([1, 1, 3, 2, 3, 1, 1, 1])); // 3



| i | value | compare prev | count | max |
| - | ----- | ------------ | ----- | --- |
| 1 | 1     | 1 == 1 ✅     | 2     | 2   |
| 2 | 3     | 3 != 1 ❌     | 1     | 2   |
| 3 | 2     | 2 != 3 ❌     | 1     | 2   |
| 4 | 3     | 3 != 2 ❌     | 1     | 2   |
| 5 | 1     | 1 != 3 ❌     | 1     | 2   |
| 6 | 1     | 1 == 1 ✅     | 2     | 2   |
| 7 | 1     | 1 == 1 ✅     | 3     | 3   |
