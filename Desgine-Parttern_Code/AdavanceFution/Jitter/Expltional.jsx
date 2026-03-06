
// function Jitter(base, i){
//     const jitter = Math.floor(base * Math.pow(2, i));
//     const result = jitter * Math.random();
//     return result;
// }


// Redis Jitter Important 

// Jitter Max Scaling ------------------------->>


// function Jitter(base, i, min = 50){
//     const jitter = Math.floor(base * Math.pow(2, i));
//     const result = Math.floor(jitter * Math.random());
//     return Math.max(result, min);
// }


// function Jitter(base, i){
//     const jitter = Math.floor(base * Math.pow(2, i));
//     return Math.floor(base + (Math.random() - 0.5) * jitter); // ±50% of jitter
// }