// function mindiff(data){

//     let minvalue=data[0]

//     let max=0

//     for(let i=1; i<data.length; i++){
      

//         if(data[i] !== data[i-1]){

//             max=Math.min(data[i] - data[i-1])
//         }

//     }

//     return max
// }

// console.log(mindiff([2 , 4 , 6 , 8 , 10]))


function findAPdiff(arr) {
    if (arr.length < 2) return 0;

    let diff = arr[1] - arr[0];

console.log(diff)

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) {
            return "Not an AP";
        }
    }

    return diff;
}

console.log(findAPdiff([2, 4, 6, 8, 10])); // 2
