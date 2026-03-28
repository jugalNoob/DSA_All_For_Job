let data=[10 , 20 , 30 , 40 , 50 ,60]

let search=10

let poist=undefined

for(let i=0; i<data.length; i++){

    if(data[i] === search){

        poist=data[i]

        break
    }
}

console.log(poist)



let data = [10, 20, 30, 40, 50, 60]
let search = 40

let position = -1

for (let i = 0; i < data.length; i++) {

    if (data[i] === search) {
        position = i   // ✅ index store
        break
    }

    if (data[i] < search) {
        console.log(data[i], 'range')
    }
}

console.log("Index:", position)
