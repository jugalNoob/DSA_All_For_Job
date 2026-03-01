7️⃣ Interview Variants

Single missing number → use sum formula or XOR.

Multiple missing numbers → use set, sorting, or boolean array.

Numbers not starting from 0 → adjust formula (min + max) or iterate from min → max.

Large numbers → avoid sum overflow → prefer XOR or boolean array.

8️⃣ Key Tips for DSA Interviews

Always clarify range of numbers.

Handle empty array or all numbers present.

Explain time-space tradeoff: sum formula O(1) space, XOR O(1) space, Set O(n) space.

Draw step-by-step table showing actual vs expected sum → helps in whiteboard interviews.




1️⃣ Problem: Find Missing Number

Definition: Given an array of n numbers ranging from 0 to n (or 1 to n), find the missing number.

Example: [0,1,2,4] → Missing number is 3

2️⃣ Approach 1: Sum Formula (Single Missing Number)

Idea: Sum of numbers 0..n is n*(n+1)/2. Subtract sum of array → missing number.

function findMissingNumber(num) {
    let sum = 0;
    for(let i=0;i<num.length;i++) sum += num[i];
    const n = num.length;
    return n*(n+1)/2 - sum;
}

console.log(findMissingNumber([0,1,2,4])); // 3


Time Complexity: O(n)

Space Complexity: O(1)

3️⃣ Approach 2: Loop with Step-by-Step Debug
function findMissingNumber(data){
    let actualSum = 0, expectedSum = 0;
    for(let i=0;i<=data.length;i++){
        expectedSum += i;
        if(i<data.length) actualSum += data[i];
    }
    return expectedSum - actualSum;
}

console.log(findMissingNumber([0,1,2,4])); // 3


Use Case: Explains process during interviews → trace sums clearly.

4️⃣ Approach 3: XOR Method (Single Missing Number)

Idea: XOR all array elements with 0..n → result is missing number.

function findMissingNumberXOR(arr){
    let xorArr = 0, xorFull = 0;
    const n = arr.length;
    for(let i=0;i<n;i++) xorArr ^= arr[i];
    for(let i=0;i<=n;i++) xorFull ^= i;
    return xorArr ^ xorFull;
}

console.log(findMissingNumberXOR([0,1,2,4])); // 3


Time Complexity: O(n)

Space Complexity: O(1)

5️⃣ Approach 4: Find Multiple Missing Numbers

Idea: Use a Set for O(1) lookups and iterate from min → max.

function findMissingNumbers(data){
    if(data.length===0) return [];
    const unique = new Set(data);
    const missing = [];
    const min = Math.min(...data);
    const max = Math.max(...data);

    for(let i=min;i<=max;i++){
        if(!unique.has(i)) missing.push(i);
    }
    return missing;
}

console.log(findMissingNumbers([0,1,5])); // [2,3,4]


Time Complexity: O(n + range)

Space Complexity: O(n) → Set

6️⃣ Approach 5: Sorting Method

Sort array, then check for missing numbers.

function findMissingNumbersSorted(arr){
    arr.sort((a,b)=>a-b);
    let missing = [];
    for(let i=0;i<arr.length-1;i++){
        for(let j=arr[i]+1;j<arr[i+1];j++){
            missing.push(j);
        }
    }
    return missing;
}
console.log(findMissingNumbersSorted([0,1,5])); // [2,3,4]


Time Complexity: O(n log n)

Space Complexity: O(1) if in-place



//////// ------------->>>>   Find Missing Number -------------------->>>
function findMissingNumber(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return num.length * (num.length + 1) / 2 - sum;
}
console.log(findMissingNumber([0,1,2,4])); // Output will be 3 (as 3 is the missing number in the array)




function findMissingNumber(num) {
    console.log("📥 Input array:", num);

    let sum = 0;
    console.log("🔢 Calculating actual sum of elements in the array...");

    for (let i = 0; i < num.length; i++) {
        sum += num[i];
        console.log(`➡️ Adding num[${i}] = ${num[i]}, running sum = ${sum}`);
    }

    const n = num.length;
    const expectedSum = n * (n + 1) / 2;
    console.log(`✅ Expected sum from 0 to ${n}: ${expectedSum}`);

    const missing = expectedSum - sum;
    console.log(`❓ Missing number = Expected (${expectedSum}) - Actual (${sum}) = ${missing}`);

    return missing;
}

// Test case
const result = findMissingNumber([0, 1, 2, 4]);
console.log("\n🎯 Final Result: Missing Number =", result);




/// ---- >Use a Loop start row Class  ---> startty zero --------------->>


function findMissingNumber(data) {
    console.log("📥 Input array:", data);

    let actualSum = 0;
    let expectedSum = 0;

    console.log("🔁 Looping through the array to calculate sums...");

    for (let i = 0; i <= data.length; i++) {
        expectedSum += i;
        if (i < data.length) {
            actualSum += data[i];
            console.log(`i=${i} ➡️ expectedSum += ${i} => ${expectedSum}, actualSum += ${data[i]} => ${actualSum}`);
        } else {
            console.log(`i=${i} ➡️ expectedSum += ${i} => ${expectedSum}`);
        }
    }

    const missing = expectedSum - actualSum;

    console.log(`\n✅ Expected sum: ${expectedSum}`);
    console.log(`✅ Actual sum: ${actualSum}`);
    console.log(`❓ Missing number = Expected - Actual = ${missing}`);

    return missing;
}

// Test the function
let result = findMissingNumber([0, 1, 2, 4]);
console.log("\n🎯 Final Result: Missing Number =", result);



//--------->>>;;
function findMissingNumbers(data) {
    if (data.length === 0) {
        console.log("⚠️ Input array is empty. No missing numbers.");
        return [];
    }

    const unique = new Set(data);      // For O(1) lookups
    const missing = [];

    const min = Math.min(...data);
    const max = Math.max(...data);

    console.log("📥 Original Array:", data);
    console.log(`🔍 Checking range from ${min} to ${max}`);

    let current = min;

    while (current <= max) {
        if (!unique.has(current)) {
            console.log(`❌ Missing: ${current}`);
            missing.push(current);
        } else {
            console.log(`✅ Found: ${current}`);
        }
        current++;
    }

    console.log(`\n🎯 Total Missing: ${missing.length}`);
    console.log("📌 Missing Numbers:", missing);

    return missing;
}

// Example usage
let data = [0, 1, 5];
findMissingNumbers(data);


