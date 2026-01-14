/////-----> Binary Search Algo start roe cvlass ---------->>


Visual diagrams to understand it deeper ---> Promot 


Index:   0      1      2      3      4      5      6
Data:  ['anku','india','jammu','japan','jugal','karan','knaika']



Start = 0
End = 6
Mid = (0+6)//2 = 3

           ↓
['anku','india','jammu','japan','jugal','karan','knaika']
                            ↑
                         target


📉 Let’s take a harder one: Search "karan"
🔁 Step 1:

Start = 0
End = 6
Mid = (0+6)//2 = 3 → 'japan'

           ↓
['anku','india','jammu','japan','jugal','karan','knaika']
                      ↑
                   data[3] = 'japan'
'japan' < 'karan' → go right


🔁 Step 2:

Start = 4
End = 6
Mid = (4+6)//2 = 5 → 'karan'

                      ↓
['anku','india','jammu','japan','jugal','karan','knaika']
                                     ↑
                                  🎯 FOUND!
✅ Found in 2 steps.



❌ Not Found Example: Search "zebra"


🔁 Step 1:

Start = 0
End = 6
Mid = 3 → 'japan'
'zebra' > 'japan' → go right


🔁 Step 2:

Start = 4
End = 6
Mid = 5 → 'karan'
'zebra' > 'karan' → go right


🔁 Step 3:
Start = 6
End = 6
Mid = 6 → 'knaika'
'zebra' > 'knaika' → go right

Now: start = 7 > end = 6 → ❌ loop ends, not found




=============================================================
let data=['anku', 'india', 'japan','jammu', 'jugal', 'karan', 'knaika', 'russia']

console.log(data.length) // len 7 why beasuce they to start 1

let search='jammu'

let start=0

  let  poist=undefined

let end=data.length -1

console.log(end)  //len 6
//Because last index in array is length - 1


while(start <= end){

let mind=Math.floor((start+end) / 2) // plues both and devide 2

//mind = Math.floor((0 + 7) / 2) = Math.floor(6 / 2) = 3
// mid = Math.floor((0 + 7) / 2) = 3

console.log(mind) // and result index number

console.log(data[mind]) // 👉 your result in array 


if(data[mind] == search){ // search a middle in array 

     
  poist=data[mind]

        break;

}else if(data[mind] < search) { // check 0 to array 

 // 🔍 'mid value' < 'search' → search in RIGHT half

    // Example:
    // mid = 3, data[3] = 'jammu', search = 'karan'
    // 'jammu' < 'karan' → Go right


  start=mind+1  // start = 4



}else{

  end =mind -1 // 6 = 3 +1
  // 🔍 'mid value' > 'search' → search in LEFT half

    // Example:
    // mid = 5, data[5] = 'knaika', search = 'karan'
    // 'knaika' > 'karan' → Go left
}

}

console.log(poist)









//// ---> Lenary Search 

let data=['jugal' , 'karan' , 'anku' , 'jugal']

let search='anku'

let comparisons = 0; 

let user=undefined

for(let i=0; i<data.length; i++){

    comparisons++;

  if(data[i] === search){  // // Example: data[0] === 'jugal' → true

   // user=data[i]  // if data found then add jugal=data[jugal]

   user=i  //  0 =0

     break; // stop loop once found
  }
}
console.log("Comparisons:", comparisons);
console.log(user)


// let i=10

// let b=i

// console.log(b)



// 🧠 What is Linear Search?
// Linear search is a simple search algorithm that:

// Starts at the first element (index 0).

// Checks each item one by one.

// Stops when it finds a match (or continues till the end if not found).




// 📈 Visual Example:
// For an array like:

// js
// Copy
// Edit
// let data = ['a', 'b', 'c', 'd', 'e'];
// let search = 'e';
// Number of comparisons:

// Best case: 1 (if search = 'a')

// Worst case: 5 (if search = 'e' or not found)


//----->>Time Complexity 

🔍 Linear Search Time Complexity
Linear search checks each element one by one from start to end.

✅ Time Complexity Breakdown:


| Case        | Description                                     | Time Complexity |
| ----------- | ----------------------------------------------- | --------------- |
| **Best**    | Target is the **first element**                 | **O(1)**        |
| **Average** | Target is **somewhere in the middle**           | **O(n)**        |
| **Worst**   | Target is the **last element** or **not found** | **O(n)**        |


let data = ['a', 'b', 'c', 'd', 'e'];
let search = 'e';
Number of comparisons:

Best case: 1 (if search = 'a')

Worst case: 5 (if search = 'e' or not found)



🧠 What Time Complexity Really Means
Time complexity tells you how many operations the algorithm performs as the input size increases.

For linear search:

js
Copy
Edit
for (let i = 0; i < data.length; i++) {
  if (data[i] === search) {
    user = i;
    break;
  }
}
It loops through the array from index 0 to n-1.

✅ Let’s Walk Through the 3 Cases
Assume:

js
Copy
Edit
let data = ['a', 'b', 'c', 'd', 'e'];
let search = 'a'; // or 'c', or 'z'
🔹 Best Case: O(1)
When?: The element is found at the very first index (0).

Example:

js
Copy
Edit
let search = 'a';
Only 1 comparison:

js
Copy
Edit
data[0] === 'a' // ✅ match → stop!
✅ This is constant time → O(1).

🔸 Average Case: O(n)
When?: On average, the element is somewhere in the middle.

Example:

js
Copy
Edit
let search = 'c';
Comparisons:

js
Copy
Edit
data[0] === 'c' ❌
data[1] === 'c' ❌
data[2] === 'c' ✅ match → stop!
Took 3 steps out of 5 → average is about n/2, but we write it as O(n).

🔻 Worst Case: O(n)
When?

The element is at the last index

Or the element is not in the array at all

Example 1: found at end

js
Copy
Edit
let search = 'e';
5 comparisons: data[0] ❌ … data[4] ✅

Example 2: not found

js
Copy
Edit
let search = 'z';
5 comparisons: none match → reach end

That’s why worst case = full scan = O(n).

🔬 General Rule for Linear Search

Let n = size of array


| Situation    | Comparisons | Time Complexity |
| ------------ | ----------- | --------------- |
| Best case    | 1           | O(1)            |
| Average case | n / 2       | O(n)            |
| Worst case   | n           | O(n)            |



Try different search values to see:

Best case: 1 comparison

Average case: 2–3 comparisons

Worst case: 5 comparisons