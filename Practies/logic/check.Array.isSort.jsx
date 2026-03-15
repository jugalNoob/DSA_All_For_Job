let arr = [1,2,3,4,5]

let sorted = true

for(let i = 0; i < arr.length - 1; i++){

    if(arr[i] > arr[i+1]){
        sorted = false
        break
    }

}

if(sorted){
    console.log("Array is sorted")
}else{
    console.log("Array is not sorted")
}



Bonus (1 Line JavaScript Trick)
let arr=[1,2,3,4]

let sorted = arr.every((v,i)=> i===0 || v>=arr[i-1])

console.log(sorted)


Output

true
