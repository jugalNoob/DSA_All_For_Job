let sentence = "JavaScript is very powerful"
let word = "powerful"

if(sentence.includes(word)){
    console.log("Word found")
}else{
    console.log("Word not found")
}



let sentence = "JavaScript is very powerful"
let word = "very"

let words = sentence.split(" ")

let found = false

for(let i=0;i<words.length;i++){

    if(words[i] === word){
        found = true
        break
    }

}

if(found){
console.log("Word found")
}else{
console.log("Word not found")
}
