Your code is almost correct Token Bucket, but there are a few small mistakes and unnecessary lines. I will explain how it works step-by-step and show the correct version.

1️⃣ Your Variables
let tokens = 50
let capacity = 50
let rate = 10
let last = Date.now()


Meaning:

tokens   = current tokens in bucket
capacity = maximum tokens bucket can hold
rate     = refill speed (10 tokens per second)
last     = last refill time


Start state:

tokens = 50


Bucket is full.

2️⃣ When Button Click Happens
<button onclick="CountClick()">click</button>


Each click = one request

Browser runs:

CountClick()

3️⃣ Current Time
let now = Date.now()


Example:

last = 100000
now  = 101000


Difference:

1000 ms = 1 second

4️⃣ Token Refill
tokens = Math.min(capacity, tokens + (now - last) / 1000 * rate)


Break it down.

Example:

tokens = 40
rate = 10 tokens/sec
time difference = 1 sec


New tokens added:

1 * 10 = 10


Total:

40 + 10 = 50


Check capacity:

Math.min(50,50) = 50


So bucket stays:

tokens = 50

5️⃣ Your Debug Logs

You wrote:

console.log(tokens)
console.log(last = now)
last = now


Problem:

console.log(last = now)


This assigns value and prints it.

Then you again do:

last = now


So this line is unnecessary.

6️⃣ Request Check
if(tokens >= 1){
    tokens -= 1
}


Each click consumes 1 token.

Example:

tokens = 50


After click:

tokens = 49

7️⃣ If No Tokens
else{
   return false
}


Meaning:

Rate limit exceeded


No request allowed.

8️⃣ Correct Clean Version
let tokens = 50
const capacity = 50
const rate = 10
let last = Date.now()

function CountClick(){

    const now = Date.now()

    tokens = Math.min(
        capacity,
        tokens + (now - last) / 1000 * rate
    )

    last = now

    if(tokens >= 1){
        tokens -= 1
        console.log("Request allowed | tokens left:", tokens.toFixed(2))
    }else{
        console.log("Rate limit exceeded")
    }
}

9️⃣ Example Clicks

User clicks fast:

Click1 → tokens 49
Click2 → tokens 48
Click3 → tokens 47


If bucket empty:

tokens = 0


Next click:

Rate limit exceeded


After 1 second

+10 tokens added


Requests allowed again.