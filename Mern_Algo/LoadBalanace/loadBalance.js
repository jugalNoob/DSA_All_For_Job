const { hash } = require("bcryptjs")

 1:: static algorithms 

 2::Round Robin algorithms

 3::Round Robin algorithms Demo 

 4::Weighted Round Robin algorithms

 5::Dens Round Robin algorithms

 6::Ip hash algorithms

 7::Url hash algorithms 

 8::Random alloaction 

 9::Dynamic algorithms

 10::Least connection 

 11:Weighted Least connection algorithms

 12::least Respones Time algorithms

 13::Resourse based algorithms

 14Geo loaction based load balancing 

 15::Rate limiting 

 16::session persistence 




 ⚙️ Load Balancing Strategies Overview (Node.js Context)
1. Static Algorithms
Definition: Hardcoded rules for routing (e.g., always send user type A to server 1).

Use case: Controlled environments with predictable traffic.

Node.js: Manual if checks, e.g., route /admin to a dedicated server.

2. Round Robin
Definition: Distributes requests in circular order.

Use case: Uniform worker performance.

Node.js: Use cluster or custom counter to rotate between workers.

3. Round Robin Demo (Simple)
js
Copy
Edit
const servers = ["3001", "3002", "3003"];
let index = 0;

function getNextServer() {
  const server = servers[index];
  index = (index + 1) % servers.length;
  return server;
}
4. Weighted Round Robin
Definition: Assigns a "weight" to each server.

Use case: Server 1 (powerful) gets more requests than Server 2.

js
Copy
Edit
const weightedServers = ["3001", "3001", "3002"]; // Server 1 has double weight

function getNextServer() {
  return weightedServers[Math.floor(Math.random() * weightedServers.length)];
}
5. Dens Round Robin
Definition: Variation of weighted RR with optimized scheduling.

Note: Rarely used in Node.js natively, but load balancers like HAProxy support it.

6. IP Hash
Definition: Hash client's IP to consistently route to the same server (session persistence).

Node.js:

js
Copy
Edit
const crypto = require("crypto");
const servers = ["3001", "3002", "3003"];

function getServer(ip) {
  const hash = crypto.createHash("md5").update(ip).digest("hex");
  const index = parseInt(hash, 16) % servers.length;
  return servers[index];
}
7. URL Hash
Definition: Hash the requested URL to decide the server.

Use case: Cache locality or data sharding.

js
Copy
Edit
function getServerByUrl(url) {
  const hash = crypto.createHash("md5").update(url).digest("hex");
  const index = parseInt(hash, 16) % servers.length;
  return servers[index];
}
8. Random Allocation
Definition: Pick a server randomly.

Simple but not efficient for heavy traffic.

js
Copy
Edit
const randomServer = servers[Math.floor(Math.random() * servers.length)];
9. Dynamic Algorithms
Definition: Choose based on real-time metrics (CPU, memory).

Node.js: Requires monitoring + decision logic (e.g., using os.loadavg()).

10. Least Connections
Definition: Pick the server with the fewest current connections.

Requires tracking live connections per server.

js
Copy
Edit
const workers = [{id: 1, conn: 2}, {id: 2, conn: 1}];
const selected = workers.reduce((a, b) => a.conn < b.conn ? a : b);
11. Weighted Least Connections
Definition: Like least connections but accounts for server capacity.

Score = active connections / weight

12. Least Response Time
Definition: Route to the server that replies the fastest.

Requires: Response time tracking for each node.

13. Resource-Based
Definition: Use system stats like CPU, RAM to route.

Node.js:

js
Copy
Edit
const os = require("os");
console.log(os.loadavg()); // Real-time server load info
14. Geo Location-Based Load Balancing
Definition: Route based on user location → nearest server.

Use case: CDNs, global apps.

Node.js: Use IP geolocation libraries like geoip-lite.

js
Copy
Edit
const geoip = require("geoip-lite");
const ip = "207.97.227.239";
console.log(geoip.lookup(ip)); // Returns { country, region, city, etc. }
15. Rate Limiting
Definition: Limit number of requests per IP/session.

Node.js: Use express-rate-limit, or implement custom token bucket.

js
Copy
Edit
const rateLimit = require("express-rate-limit");
app.use(rateLimit({ windowMs: 60000, max: 100 }));
16. Session Persistence (Sticky Sessions)
Definition: Ensure the same user hits the same server each time.

Can be implemented using:

IP hash

Session token mapping (e.g., store user-session → server map)

Sticky session configs in Nginx or HAProxy

🔚 Final Tips
🧠 For simple apps → Round Robin or PM2 cluster is usually enough.

🔥 For scaling → use Nginx, Redis (for session sharing), and PM2/NATS/Kafka for smart routing.

📊 For performance-based balancing → integrate monitoring (e.g., Prometheus) and act on it.

