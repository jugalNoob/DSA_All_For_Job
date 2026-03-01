function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}



let workers = 12;
let jobs = 18;

let groups = gcd(workers, jobs);

console.log("Groups:", groups);
console.log("Workers per group:", workers / groups);
console.log("Jobs per group:", jobs / groups);


let requests = 1000;
let seconds = 60;

let buckets = gcd(requests, seconds);

console.log("Buckets:", buckets);
console.log("Requests per bucket:", requests / buckets);
console.log("Seconds per bucket:", seconds / buckets);
