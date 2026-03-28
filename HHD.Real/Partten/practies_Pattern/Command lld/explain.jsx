🚀 1. What is Command Pattern (LLD)

👉 Definition:
Command Pattern converts a request into an object so you can:

Queue it

Log it

Undo it

Execute later

👉 Simple:

“Turn function call into object”

🧠 2. Real-World Understanding
🎮 Example: Remote Control

Button → Command

TV → Receiver

Remote → Invoker

👉 Press button → command object executes

🏗️ 3. Structure (VERY IMPORTANT)
Client → Command → Receiver
            ↑
         Invoker

Components:
1. Command (Interface)
class Command {
  execute() {}
}

2. Concrete Command
class LightOnCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.on();
  }
}

3. Receiver (Real Logic)
class Light {
  on() {
    console.log("Light ON");
  }

  off() {
    console.log("Light OFF");
  }
}

4. Invoker (Trigger)
class Remote {
  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

5. Client (Wiring)
const light = new Light();

const onCommand = new LightOnCommand(light);

const remote = new Remote();
remote.setCommand(onCommand);

remote.pressButton();


🔥 4. WHY Command Pattern? (INTERVIEW GOLD)
❌ Without Command
button.click(() => light.on());


👉 Tight coupling ❌

✅ With Command

Decoupled

Flexible

Extendable


🔥 8. WHEN TO USE (IMPORTANT)

Use Command when:

✅ Need undo/redo
✅ Need queue (Kafka)
✅ Need decoupling
✅ Need logging actions
✅ Need retry mechanism

