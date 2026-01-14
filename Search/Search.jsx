:::::: Removie Number In String elemnt :::::::::::::::

let data = ["jugal", "karan", "anku", "kanika", 42543, 100, "hello", 200];

// Loop through the array from the start
for (let i = 0; i < data.length; i++) {
  if (typeof data[i] === "number") {
    data.splice(i, 1);  // Remove the number at index i
    i--;  // Adjust index after removal since elements shift left
  }
}

console.log(data);  // ["jugal", "karan", "anku", "kanika", "hello"]




::::::: Digit Array lement ::::::::::::::::::


// let data = ["jugal", "karan", "anku", "kanika"];

// for (let i = 0; i < data.length; i++) {
//     let combined = data[i][0] + data[i][1] + data[i][2]; // simple joining

//     console.log(`Combined first 3 letters of "${data[i]}" = ${combined}`);
// }



// for (let i = 0; i < data.length; i++) {
//  console.log(data[i][0])
//  console.log(data[i][1])
//  console.log(data[i][2])


// -- near linear search 

let data = ["jugal", "karan", "anku", "kanika" , "auka"];

let count = 0;
let opt = undefined;

let search = "ankj";

for (let i = 0; i < data.length; i++) {
    count++;

    // manual comparison of first 3 characters
    if (
        data[i][0] === search[0] &&
        data[i][1] === search[1] &&
        data[i][2] === search[2]
    ) {
        opt = data[i];
        break;
    }
}

console.log(count);
console.log(opt);



:::::::::::::::  Check bad word in javascript  ::::::::::::::::::::::::::


let data = ['ass', 'sexy', 'gay', 'hot', 'man', 'jugal', 'karan'];
let allowedWords = ['karan', 'man', 'jugal']; // List of "simple" words allowed for searching

let post = undefined;
let search = 'man'; // Change this value to test different searches
let found = false;

// Check if the search word is in the allowed list
if (allowedWords.includes(search)) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === search) { 
            post = data[i];
            found = true;
            break; // Stop the loop if the word is found
        }
    }
} else {
    console.log("error: searching for bad words is not allowed");
}

// Display results only if the word is allowed and found
if (found) {
    console.log(post, "search result found");
} else if (!found && allowedWords.includes(search)) {
    console.log("error: word not found in the data");
}


::::::::: Greater than ::::::::::::::::::::::::


let data = [10, 20, 30, 40, 50, 60, 80];
let op = 20;
for (let i = 0; i < data.length; i++) {
    if (data[i] > op) {
        console.log(data[i]);
    } else {
        console.log("Number is greater than ",op);
    }
}



////  ------------------>> Filter with a letter  ////////////  ------------->

function filter(str, letter) {
   let filteredStr = [];
   for (let i = 0; i < str.length; i++) {
       if (str[i][0].toLowerCase() !== letter.toLowerCase()) {  // !==  ====
           console.log(str[i]);
           filteredStr.push(str[i]);  // Add the element to filteredStr if it meets the condition
       } else {
           console.log("The first letter is not", letter);
       }
   }
   return filteredStr;
}
let str = ['jugal', 'aki', 'boy', 'cart', 'aus', 'arabic', 'body'];
let letter = "c";
let result = filter(str, letter);
console.log("Filtered array:", result);






// object serach with index number  ----> ----------------------
const objs = {
   0: {
       name: "Jugal",
       rollno: 45,
       identity: { hashPanCard: false, hashAdhaarCard: true },
   },
   1: {
       name: "Karan",
       rollno: 20,
       identity: { hashPanCard: false, hashAdhaarCard: true },
   }
};

console.log(objs)
let search = 1;
let post = undefined;

for (let i in objs) { // Looping through keys of the object
   if (i == search) { // Checking if the key matches `search`
       post = objs[i]; // Assigning the matching object to `post`
       break; // Exit loop once found
   }
}

console.log(post);








let obj = {
   name: "Jugal",
   hobbies:["walking" , "Reading"],
   age: 25,
   country: "India",
   identity:{hashPanCard:false , hashAdhaarCard:true},
   address: ["India", "USA"] // Changed {} to []
};


console.log(obj.hobbies[0])
console.log(obj.name)
console.log(obj.identity.hashPanCard)






const objArray = [
   {
       index: 0,
       details: {
           name: "jugal",
           rollno: 45,
           identity:{hashPanCard:false , hashAdhaarCard:true},
       }
   },
   {
       index: 1,
       details: {
           name: "karan",
           rollno: 20,
           identity:{hashPanCard:false , hashAdhaarCard:true},
       }
   }
];

console.log(objArray)

console.log(objArray[0])


const objs = {
    0: {
        name: "jugal",
        rollno: 45,
        identity:{hashPanCard:false , hashAdhaarCard:true},
    },
    1: {
        name: "karan",
        rollno: 20,
        identity:{hashPanCard:false , hashAdhaarCard:true},
    }
};

console.log(objs)



//////////////////////       ------------------------------------- Api Advance ::::::::::::::::::::


const apisear = async (sear) => {
    try {
        // Fetch data from the API
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        // Check if the response is OK (status 200–299)
        if (!response.ok) throw new Error("Failed to fetch data");

        console.log(response.url)
        // Parse the JSON data
        let mean = await response.json();

        console.log(mean)

        // Search for the user by name
        let userFound = false;
        for (let user of mean) {
            if (user.name === sear) {
                console.log("User found:", user.name);
                console.log("User info:", user);
                userFound = true;
                break;
            }
        }

        // If no user is found, log a message
        if (!userFound) {
            console.log("User not found:", sear);
        }
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
};

// Call the async function with a dynamic search term
apisear("Kurtis Weissnat");




   //user id Index use 


   let sears = 3; // User id to search for
   for (let user of apis) {
     if (user.id === sears) {
       console.log(user); // Logs the user object with the id of 3
       break; // Exit the loop once the user is found
     }
   }


    /// search with your name  ----------------------------->

    let sears = 'Leanne Graham'; // User id to search for
for (let user of use) {
  if (user.name === sears) {
  
    console.log(user); // Logs the user object with the id of 3
    break; // Exit the loop once the user is found
  }
}



}
apisear();



:::::::::: Advanace serach :::::::::::
Linear search
// function All() {
//     const allone = document.getElementById("check").value;
//     let array=["jugal" , "karan" , "knaika" , "anku"]
//     let pos=allone
//     for(let i=0; i<array.length; i++){
//         if(array[i]==pos){
//             alert("yes")
//             console.log(pos)
//             break;
//         }else{
//             console.log("check name")
//             break;
//         }
//     }

// }


:::::: Object serach .....................apisear
function All() {
    const allone = document.getElementById("check").value;
    let data = {
        'name1': "knaika",
        'name2': 'jugal',
        'name3': 'kanika',
        'name4': 'ridhima',
        'name5': 'anki',
        'age':'23',
        'gender': "male"

    };
    let found = false;
    for (let key in data) {
        if (data[key] === allone) {
            found = true;
            console.log(allone + " found");
            break;
        }
    }
    if (!found) {
        console.log("check name");
    }
}



let data = {
    'name1': "knaika",
    'name2': 'jugal',
    'name3': 'kanika',
    'name4': 'ridhima',
    'name5': 'anki',
    'age': '23',
    'gender': "male"
 };
 
 let search = 'age';
 let post = undefined;
 
 for (let one in data) {
    if (one === search) {
        post = data[one];
        break; // Once found, no need to continue the loop
    }
 }
 
 console.log(post);

 



 
Binary Search with Iterative approac  ::::::::::::::::::::

let data=[10 , 20 , 30 , 40 , 50 , 60]

let find=30

let start=0

let end=data.length-1

let poist=undefined

while(start <= end){

    let mind=Math.floor((start+end) / 2)

    if(data[mind] === find){ // data[30] === 30
        
        poist=mind
        break;
    }else if(data[mind] < find){

        start=mind+1
    }else{

        end=mind-1
    }
  
}

console.log(poist) // 0 index
