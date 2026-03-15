const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("orderCreated", (order) => {
  console.log("Email service:", order);
});

emitter.on("orderCreated", (order) => {
  console.log("SMS service:", order);
});

emitter.emit("orderCreated", { id: 10 });
