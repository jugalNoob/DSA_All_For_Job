1️⃣ First Code → Delete Element (Shift Left)

Your first code:

let data=[5 ,10 , 20 , 30 , 40 , 50 , 60]

let del=0

for(let i=del; i<data.length-1; i++){
    data[i]=data[i+1]
}

data.length=data.length-1

console.log(data)

🔹 What it does

It deletes an element from the array by shifting all elements one step left.

Example

Original array

[5,10,20,30,40,50,60]


del = 0 → delete index 0

Loop shifts values:

data[0] = data[1] → 10
data[1] = data[2] → 20
data[2] = data[3] → 30
data[3] = data[4] → 40
data[4] = data[5] → 50
data[5] = data[6] → 60


Array becomes

[10,20,30,40,50,60,60]


Then:

data.length=data.length-1


Removes last element.

✅ Final Output
[10,20,30,40,50,60]

📌 Logic Pattern
Shift elements left


Used in:

Delete element in array

Remove item manually

Array compression