8. Looping with Dynamic Conditions :::::::::::::::::::::::::
Loops can be dynamically controlled using changing conditions, based on values in 
other data structures or states. This is useful in AI, simulations, or event-driven systems.

Example: Dynamic Condition

let isRunning = true;
let i = 0;

while (isRunning) {
    console.log(i);
    i++;
    if (i >= 5) {
        isRunning = false; // Dynamically stop the loop based on logic
    }
}


4. Infinite Loops with Break Conditions ::::::::::::::::::::::

let count = 0;
while (true) {
  count++;
  if (count === 5) {
    console.log('Stopping at 5');
    break;  // Exits the loop when count reaches 5
  }
}
