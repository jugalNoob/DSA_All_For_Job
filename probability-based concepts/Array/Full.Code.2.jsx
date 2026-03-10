Great 👍 I’ll give you a DSA Probability Practice Module (25 problems) with JavaScript code patterns. These are interview-level patterns you can practice.

I divided them into 5 important categories used in DSA.

1️⃣ Basic Probability (Array Based)
Problem 1

Probability of picking even number from array.

function probabilityEven(arr){
    let even = arr.filter(n => n % 2 === 0).length
    return even / arr.length
}

console.log(probabilityEven([1,2,3,4,5,6]))


Explanation
favorable / total

Problem 2

Probability of picking number > k

function probabilityGreater(arr,k){
    let count = arr.filter(n => n > k).length
    return count / arr.length
}

console.log(probabilityGreater([1,2,3,4,5],3))

Problem 3

Probability of picking prime number

function isPrime(n){
    if(n < 2) return false
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n % i === 0) return false
    }
    return true
}

function probabilityPrime(arr){
    let prime = arr.filter(isPrime).length
    return prime / arr.length
}

console.log(probabilityPrime([1,2,3,4,5,6]))

2️⃣ Combinatorics Problems
Problem 4

Probability of choosing 2 even numbers

function factorial(n){
 return n<=1?1:n*factorial(n-1)
}

function nCr(n,r){
 return factorial(n)/(factorial(r)*factorial(n-r))
}

let total = nCr(6,2)
let favorable = nCr(3,2)

console.log(favorable/total)

Problem 5

Probability 3 cards all hearts

let total = nCr(52,3)
let favorable = nCr(13,3)

console.log(favorable/total)

Problem 6

Probability of unique elements in array

let total = Math.pow(5,5)
let favorable = factorial(5)

console.log(favorable/total)

3️⃣ Complement Rule Problems

Used when question says “at least one”

Formula

P(A) = 1 - P(Not A)

Problem 7

Probability at least one duplicate

let total = Math.pow(3,3)
let unique = 6

console.log(1 - unique/total)

Problem 8

Probability at least one head

let total = Math.pow(2,3)
let noHead = 1

console.log(1 - noHead/total)

4️⃣ Binomial Distribution

Formula

P(X=k) = nCk * p^k * (1-p)^(n-k)

Problem 9

Exactly 2 heads in 3 flips

let n=3
let k=2
let p=0.5

let result = nCr(n,k) * Math.pow(p,k) * Math.pow(1-p,n-k)

console.log(result)

Problem 10

Exactly 3 successes out of 5

let n=5
let k=3
let p=0.5

console.log(nCr(n,k)*Math.pow(p,k)*Math.pow(1-p,n-k))

5️⃣ Expected Value Problems

Formula

E[X] = Σ value × probability

Problem 11

Expected value from array

function expected(arr){
 let p = 1/arr.length
 return arr.reduce((sum,v)=>sum + v*p ,0)
}

console.log(expected([1,2,3]))

Problem 12

Expected dice value

let dice=[1,2,3,4,5,6]

let result=dice.reduce((sum,v)=>sum + v*(1/6),0)

console.log(result)


Answer = 3.5

6️⃣ Hashing Probability

Important for system design interviews

Problem 13

Probability of hash collision

function collisionProbability(slots,keys){

 let noCollision = 1

 for(let i=0;i<keys;i++){
   noCollision *= (slots-i)/slots
 }

 return 1 - noCollision
}

console.log(collisionProbability(10,3))

7️⃣ Randomized Algorithms

Used in

Randomized QuickSort

Reservoir Sampling

Hashing

Skip Lists

Problem 14

Random array selection

function randomPick(arr){
 return arr[Math.floor(Math.random()*arr.length)]
}

console.log(randomPick([10,20,30,40]))

8️⃣ Reservoir Sampling Probability

Important for large data streams

Problem 15
function reservoirSample(stream){
 let result = stream[0]

 for(let i=1;i<stream.length;i++){
   if(Math.random() < 1/(i+1)){
     result = stream[i]
   }
 }

 return result
}


Probability each element = 1/n

9️⃣ Dice Simulation
Problem 16
function diceSumProbability(){

 let count=0
 let total=36

 for(let i=1;i<=6;i++){
  for(let j=1;j<=6;j++){
   if(i+j===7) count++
  }
 }

 return count/total
}

console.log(diceSumProbability())

🔟 QuickSort Expected Comparisons

Important interview concept

function quickSortExpected(n){

 let comparisons = 0

 for(let i=0;i<n;i++){
  for(let j=i+1;j<n;j++){
   comparisons += 2/(j-i+1)
  }
 }

 return comparisons
}

console.log(quickSortExpected(5))


Average complexity becomes

O(n log n)

⭐ 25 Practice Problems (Interview)

1 Probability even number
2 Probability prime
3 Probability greater than K
4 Probability 2 evens
5 Probability 3 cards hearts
6 Unique array probability
7 At least one duplicate
8 At least one head
9 Exactly 2 heads
10 Exactly 3 successes
11 Expected array value
12 Expected dice value
13 Hash collision
14 Random pick
15 Reservoir sampling
16 Dice sum = 7
17 Probability two numbers equal
18 Probability random index even
19 Probability array contains duplicate
20 Expected swaps in shuffle
21 QuickSort expected comparisons
22 Probability binary string has equal 0 and 1
23 Probability random substring palindrome
24 Probability random graph edge exists
25 Birthday paradox probability

✅ Important for Interviews

Focus mostly on:

Complement Rule

Combinatorics

Expected Value

Hash Collision

Randomized Algorithms

These appear in Google / Amazon system design & algorithm interviews.