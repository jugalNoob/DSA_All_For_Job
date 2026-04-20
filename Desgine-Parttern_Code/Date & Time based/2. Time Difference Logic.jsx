⏱️ 2. Time Difference Logic
const start = Date.now();

// some process
setTimeout(() => {
  const end = Date.now();

  console.log("Time taken:", end - start, "ms");
}, 2000);

🧠 Logic:
measure performance / latency