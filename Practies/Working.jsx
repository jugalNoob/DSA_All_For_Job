Both code blocks you posted are exactly the same. There is no difference between them. So the answer is:

✅ Both are the same implementation of Token Bucket.

You only repeated the code twice.

1️⃣ What This Code Implements

This is a Token Bucket Rate Limiter.

Rules in your code:

Bucket capacity = 50 tokens
Refill rate = 10 tokens per second


Meaning:

Max burst = 50 requests
Sustained rate = 10 requests/sec

2️⃣ Variables Explained
let tokens = 50;


Bucket starts full.

tokens = 50

let last = Date.now();


Stores last refill time.

Example:

1710000000000

const capacity = 50;


Bucket cannot exceed 50 tokens.

const rate = 10;


Refill speed:

10 tokens per second

3️⃣ Token Refill Logic

This line is the core logic:

tokens = Math.min(capacity, tokens + (now - last) / 1000 * rate);


Step by step:

Example

Suppose

tokens = 20


Time difference:

now - last = 2000 ms


Convert to seconds:

2000 / 1000 = 2 seconds


Tokens to add:

2 * rate(10) = 20 tokens


New tokens:

20 + 20 = 40


Check capacity:

Math.min(50,40) = 40


Final:

tokens = 40

4️⃣ Update Time
last = now;


We store the latest refill time.

5️⃣ Request Check
if (tokens >= 1)


Each request needs 1 token.

If token exists:

tokens -= 1


Request allowed.

6️⃣ Test Loop
setInterval(() => {}, 40)


This sends request every:

40 ms


Calculate request rate:

1000 ms / 40 = 25 requests per second


So the system is trying:

25 requests/sec


But bucket allows:

10 requests/sec


So result:

Some allowed
Some rate limited

7️⃣ Example Output

Start:

tokens = 50


Requests:

Request allowed #1 (tokens:49)
Request allowed #2 (tokens:48)
Request allowed #3 (tokens:47)


After bucket empties:

Rate limited
Rate limited


Then refill:

+10 tokens/sec


Requests start again.

8️⃣ Why This Code is Good

This is a very good implementation because:

✔ Smooth refill
✔ Allows bursts
✔ O(1) complexity
✔ Used in API gateways

9️⃣ Real Systems Using Similar Logic

Large platforms use similar rate limiting:

Cloudflare

Stripe

Amazon

Example rule:

100 requests/sec
Burst = 500

🔟 Interview Tip

If interviewer asks why Token Bucket is better than Fixed Window:

You answer:

Token bucket allows burst traffic but maintains a steady refill rate, preventing sudden spikes while maximizing throughput.
