6️⃣ Dice Simulation → Load Simulation

Your code:

for (let i = 1; i <= 6; i++) {
 for (let j = 1; j <= 6; j++) {

Real use

Simulate:

traffic spikes

user patterns

random requests

Example:

function simulateRequests(users){

 let requests = []

 for(let i=0;i<users;i++){
   let req = Math.random() * 10
   requests.push(req)
 }

 return requests
}


Used in:

performance testing

load testing