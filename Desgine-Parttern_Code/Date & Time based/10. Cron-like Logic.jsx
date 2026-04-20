⚡ 10. Cron-like Logic (manual version)
function cronJob() {
  const now = new Date();

  if (now.getSeconds() === 0) {
    console.log("Run every minute");
  }
}

setInterval(cronJob, 1000);

🧠 Use cases:
background jobs
reporting systems
🧩 11. Event timestamp comparison (real systems)
function isNewEvent(eventTime, lastProcessed) {
  return eventTime > lastProcessed;
}

🧠 Use cases:
Kafka deduplication
event ordering
🚀 Final Interview Summary