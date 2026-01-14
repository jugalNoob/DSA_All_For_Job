{/* <button onclick="Clicknum()">clickButton</button> */}
// let one = 0;
// let canClick = true;

// function Clicknum() {
//     if (!canClick) return; // Prevents further clicks when disabled

//     one += 1;

//     if (one < 6) {
//         console.log(one);
//     } else {
//         console.log("stop");
//         canClick = false; // Disable clicks until reset

//         setTimeout(() => {
//             one = 0;
//             canClick = true; // Re-enable clicks
//             console.log("Counter reset to 0");
//         }, 2000);
//     }
// }







// Simulating multiple clicks
// Clicknum(); // stop (one = 1)
// Clicknum(); // stop (one = 2)
// Clicknum(); // stop (one = 3)
// Clicknum(); // stop (one = 4)
// Clicknum(); // stop (one = 5)
// Clicknum(); // 6 (one > 5, so logs the number)
// Clicknum(); // 7
// Clicknum(); // 8
\



🔍 Key Differences
Feature	Token Bucket	      Leaky Bucket
Request Queue	No (relies on tokens)	Yes (queue-based)
Output Rate	Can be bursty	Smooth, constant
Allows Bursts	✅ Yes	     ❌ No
Traffic Shaping	Flexible (bursty-friendly)	Strict (fixed rate)
Usage	APIs, network shaping with bursts	Routers, switches (strict shaping)