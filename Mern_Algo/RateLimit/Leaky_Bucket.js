Leaky Bucket: Like a faucet dripping water steadily — no matter how much water is in the tank, the drip rate is fixed.


// Leaky Bucket configuration
const bucketCapacity = 5; // Maximum capacity of the bucket
const leakRate = 1; // Number of requests allowed to be processed per second
let currentLevel = 0; // Current number of requests in the bucket

// Leak the bucket at a fixed interval
setInterval(() => {
    if (currentLevel > 0) {
        currentLevel--; // Process one request (leak one unit)
        console.log(`Leaked 1 request. Current level: ${currentLevel}`);
    }
}, 1000 / leakRate); // Leak rate in milliseconds


    if (currentLevel < bucketCapacity) {
        currentLevel++; // Add request to the bucket
        console.log(`Request added. Current level: ${currentLevel}`);
 
    } else {
        res.status(429).send("Too Many Requests. Please try again later.");
        console.log("Request rejected. Bucket overflow.");
    }

