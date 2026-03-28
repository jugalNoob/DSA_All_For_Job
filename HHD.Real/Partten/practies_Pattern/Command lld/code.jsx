✅ Full Code Example (Clean)
1. Receiver (Actual logic)
class Light {
    on() {
        console.log("Light ON");
    }

    off() {
        console.log("Light OFF");
    }
}

2. Command Interface (concept)
class Command {
    execute() {}
}

3. Concrete Commands
class LightOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.on();
    }
}

class LightOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.off();
    }
}

4. Invoker (who triggers)
class RemoteControl {
    constructor() {
        this.command = null;
    }

    setCommand(command) {
        this.command = command;
    }

    pressButton() {
        this.command.execute();
    }
}

🚀 Usage
let light = new Light();

let lightOn = new LightOnCommand(light);
let lightOff = new LightOffCommand(light);

let remote = new RemoteControl();

remote.setCommand(lightOn);
remote.pressButton();   // Light ON

remote.setCommand(lightOff);
remote.pressButton();   // Light OFF

🔥 Flow (IMPORTANT)
Remote → LightOnCommand → Light.on()


👉 Remote doesn’t know HOW light works
👉 It just calls execute()

🧠 Why This is Powerful
✅ Decoupling
Invoker ≠ Receiver
✅ Flexibility
Swap commands anytime
✅ Queue / Delay
Store commands → execute later
🔥 Real World (VERY IMPORTANT)
1. Kafka / Job Queue
queue.push(new SendEmailCommand(user))
queue.push(new PaymentCommand(order))

2. Undo / Redo
history.push(command)
command.undo()

3. API Layer
createUserCommand.execute()
deleteUserCommand.execute()


class LightOnCommand {
    constructor(light) {
        this.light = light;
    }

    execute() {
        this.light.on();
    }

    undo() {
        this.light.off();
    }
}
