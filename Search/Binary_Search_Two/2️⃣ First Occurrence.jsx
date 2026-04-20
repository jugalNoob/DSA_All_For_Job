
let data=[10 , 20 ,30,30,30, 30 , 40 , 50 , 60]
let find=30
let firstoacc=-1
let start=0
let end=data.length-1 
let post=undefined

while(start <= end){

    let mind=Math.floor((start+end)/2)
    if(data[mind] === find){
        post=data[mind]
         firstoacc= mind
       start = mind + 1   // 🔥 go LEFT
    }else if(find > data[mind]){
        start=mind+1
    }else{
        end=mind-1
    }
}
console.log(post)
console.log(firstoacc)




First occurrence: move end = mid - 1
Last occurrence: move start = mid + 1