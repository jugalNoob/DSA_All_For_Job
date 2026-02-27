





// Timer()


// ttl = 5000; // 5 seconds
// cachedData.time = 1000000000000
// now = 1000000004000
// now - cachedData.time = 4000 < 5000 → cache is valid


// TTL Check Explained

// TTL = 5000 ms → cache should stay valid for 5 seconds.

// cachedData.time = 1000000000000 → the time when the cache was set.

// now = 1000000004000 → current time.

// Step 1: Calculate cache age

// now - cachedData.time = 1000000004000 - 1000000000000
//                        = 4000 ms


// Step 2: Compare with TTL

// 4000 < 5000 → true


// ✅ Result: Cache is still valid.

// If now - cachedData.time became ≥ 5000, the cache would be expired.


// // function NameCache() {
//     let cache = new Map();
//     let count = 0;
//     const ttl = 5000; // cache valid for 5 seconds

//     setInterval(() => {
//         const now = Date.now();

//         if (cache.has('name')) {
//             const cachedData = cache.get('name');

//             // Check if TTL has expired
//             if (now - cachedData.time < ttl) {
//                 count++;
//                 console.log('Cache hit:', cachedData.value, 'count:', count);
//                 return;
//             } else {
//                 // TTL expired → delete cache
//                 cache.delete('name');
//                 console.log('Cache expired, deleted');
//             }
//         }

//         // Set new cache
//         cache.set('name', { value: 'jugal', time: now });
//         count = 0; // reset usage count
//         console.log('Cache set in map:', cache.get('name'));
//     }, 2000);
// }

// NameCache();


// https://basescripts.com/100-advanced-javascript-multiple-choice-questions-with-answers-and-explanations

// function foo() {

// return{ message:'hi jugal'}

// }

// console.log(foo());


// function test() {

// console.log(a); // hostimg 

// console.log(foo()); // hhosting

// var a = 1;

// function foo() {

// return 2; // this is return only 2 

// }

// }

// test();



// var a = 5;

// (function() {

// var a = 6;

// console.log(a);

// a = 10;

// console.log(a);

// })();

// console.log(a);

// var a = 1;

// function b() {

// a = 10;

// return a

// function a() {}

// }

// b();

// console.log(b);