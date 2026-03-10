function prefixMax(arr){

    let prefix = []
    prefix[0] = arr[0]

    for(let i=1;i<arr.length;i++){
        prefix[i] = Math.max(prefix[i-1], arr[i])
    }

    return prefix
}

console.log(prefixMax([3 , 1 , 5 ]))
console.log(prefixMax([3,1,4,2,5]))


Where Used

Stock price analysis

Maximum profit problems

Leader elements

Rainwater trapping problems