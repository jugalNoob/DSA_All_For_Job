2️⃣ Expected Value → System Capacity Planning

Your code:

let expectedValue = arr3.reduce((acc, val) => acc + val * prob3, 0);

Real use

Calculate expected system load

Example:

Users = 10,000
Probability user searches = 0.3


Expected requests:

E[requests] = 10000 × 0.3
             = 3000 requests


Node.js example:

const users = 10000
const probabilitySearch = 0.3

const expectedRequests = users * probabilitySearch

console.log(expectedRequests)


Used in capacity planning.