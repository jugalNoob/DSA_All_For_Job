📊 7. Time-based grouping (Analytics)
const logs = [
  { time: 1710000000000, user: "A" },
  { time: 1710000001000, user: "A" },
  { time: 1710000050000, user: "B" },
];

function groupByMinute(logs) {
  const map = {};

  for (let log of logs) {
    const minute = Math.floor(log.time / 60000);

    map[minute] = (map[minute] || 0) + 1;
  }

  return map;
}

🧠 Use cases:
real-time dashboard
Kafka analytics
logs aggregation