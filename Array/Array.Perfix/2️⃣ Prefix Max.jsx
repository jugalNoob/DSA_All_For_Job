function prefixMax(arr){
let prefix=[arr[0]]

for(let i=1;i<arr.length;i++){
prefix[i]=Math.max(prefix[i-1],arr[i])
}

return prefix
}



Where Used

Stock price analysis

Maximum profit problems

Leader elements

Rainwater trapping problems