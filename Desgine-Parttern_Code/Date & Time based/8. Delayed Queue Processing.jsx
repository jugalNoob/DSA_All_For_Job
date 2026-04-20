⏲️ 8. Delayed Queue Processing
const queue = [];

function addTask(task, delay) {
  setTimeout(() => {
    queue.push(task);
    console.log("Task added:", task);
  }, delay);
}

addTask("email", 3000);
addTask("sms", 1000);

🧠 Use cases:
job scheduler
notification system