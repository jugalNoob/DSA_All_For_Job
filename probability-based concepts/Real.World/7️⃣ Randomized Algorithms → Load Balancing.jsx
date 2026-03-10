7️⃣ Randomized Algorithms → Load Balancing

Random selection:

Math.random()


Used in:

Random load balancing


const servers = [
 "server1",
 "server2",
 "server3"
]

function pickServer(){

 return servers[Math.floor(Math.random()*servers.length)]
}


Used in:

NGINX

Kubernetes

microservices routing