

:::::::::::: ---- Loop In javascript -------------

let one=['jugal' , 'karan' , 'anku' , 'kanika']
::Reverse Looping
let one = [1 , 2  , 3 , 4];

for(let i=one.length-1; i>=0; i--){
   console.log(one[i])
}

::Loop
for(let i=0; i<one.length; i++){
   console.log(one[i])
}
::: While
let i = 0;
while (i < one.length) {
    console.log(one[i]);
    i++;
}

 :::Do while
let ii = 0;
do {
    console.log(one[ii]);
    ii++;
} while (ii < one.length);


:::setInterval and  clearInterval
let i=0
let one =setInterval(()=>{
   console.log(i)
   i++
   if(i >3){
      clearInterval(i)
   }
},3000)


:::



function fat(x) {
    if (x > 3) return;   // stop when x > 3
    console.log(x);      // print current value
    fat(x + 1);          // recursive call with next value

  }


  let x=0
fat(x);


Recursive Approach
   function fat(x){
    if(x  < 3){
        fat(x+1)
   }
   console.log(x)
}
let data=0
fat(data)