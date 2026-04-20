let queue = [];

function hit(time) {
    queue.push(time);
}

function getHits(now) {

    // debugger;

    while (queue.length && now - queue[0] >= 300) {
        queue.shift();
    }
    return queue.length;
}

hit(1);
hit(2);
hit(300);


console.log(getHits(3));   // 3
console.log(getHits(301))


/// 3 - 1 >= 300 

//return length


// At getHits(3) → 3 is correct
// Your comment // 3 - 1 >= 300 is wrong because 3-1 = 2, not 300.
// The condition now - queue[0] >= 300 is correct.
// Nothing should be removed at time 3.

// async function testYour(){

//     try {
//         let controller = new AbortController();
//         let signal = controller.signal;

//         // Abort after 500ms
//         setTimeout(() => {
//             controller.abort();
//         }, 200);

//         let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             signal
//         });

//         let data = await res.json();
//         console.log(data);

//     } catch (error) {
//         console.log("Aborted or Error:", error.message);
//     }
// }

// testYour();
