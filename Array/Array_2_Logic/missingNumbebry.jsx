function findMissingNumber(num) {

    debugger;

    let missing = num.length;
    console.log(missing)

    for (let i = 0; i < num.length; i++) {
        missing += i - num[i];
    }

    return missing;
}


console.log(findMissingNumber([0,1,3])); // 2

function findMissingNumber(num) {
    debugger;
    let sum = 0;
    console.log(num)
    for (let i = 0; i < num.length; i++) {
    

    }
    return num.length * (num.length + 1) / 2 - sum;

    4 * 4+1 / 2 -7

    4*5 / 2 - 7

    20 / 2 - 7

    10 -7 
    3
}


For your array [0,1,2,4]:

num.length = 4

num.length + 1 = 5

Multiply: 4 * 5 = 20

Divide by 2: 20 / 2 = 10

Subtract sum of array: 10 - 7 = 3

✅ Result: 3 → the missing number

console.log(findMissingNumber([0,1,2,4])); // Output will be 3 (as 3 is the missing number in the array)





1️⃣ What each part means

num.length

This is the number of elements in your array.

Example: [0,1,2,4] → num.length = 4

num.length + 1

Since one number is missing, the full range should have num.length + 1 numbers.

Example: 4 + 1 = 5 → numbers from 0 to 4

Multiplication and division: num.length * (num.length + 1) / 2

This is the formula for sum of first n natural numbers starting from 0:
	​

Expected sum from 0 to n → 0+1+2+3+4 = 10

Subtract actual sum from expected sum → 10 - 7 = 3 ✅




    sum += num[i];

        setp first 
        i=0
        sum +=num[0]
        //sum=0

        second step 
        i=1
        sum+num[1]
        //sum =1

        threed step 
        i=2
        sum+=num[2]
        sum=3

        forur step 

        i=3
        sum+=num[4]
        sum=7

