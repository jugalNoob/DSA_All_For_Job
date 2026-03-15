App
 |
 |---- Database Connection (1 instance)
 |
 |---- All services use same connection

️⃣ Simple JavaScript Example
class Singleton {
    constructor(name) {
        if (Singleton.instance) {
            return Singleton.instance; // return existing instance
        }
        this.name = name;
        Singleton.instance = this;   // save the instance
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// Usage
const a = new Singleton('Alice');
const b = new Singleton('Bob');

a.sayHello(); // Hello, my name is Alice
b.sayHello(); // Hello, my name is Alice

console.log(a === b); // true → same instance


✅ What happened:

First time new Singleton('Alice') → creates the instance

Second time new Singleton('Bob') → returns same instance

So the name remains Alice, not Bob

3️⃣ Practical Examples

Logger

class Logger {
    constructor() {
        if (Logger.instance) return Logger.instance;
        Logger.instance = this;
    }

    log(msg) {
        console.log(`[LOG] ${msg}`);
    }
}

const logger1 = new Logger();
const logger2 = new Logger();

logger1.log('Hello'); // [LOG] Hello
console.log(logger1 === logger2); // true


Database Connection



class DBCointect {
    static instance = null;

    constructor(connection) {
        if (DBCointect.instance) return DBCointect.instance; // return existing instance
        this.connection = connection;
        DBCointect.instance = this; // save this object as singleton
    }

    GetDbLog() {
        console.log(this.connection);
    }
}

// Usage
const link = new DBCointect('DataConnection1');
const link2 = new DBCointect('DataConnection2');

link.GetDbLog();   // DataConnection1
link2.GetDbLog();  // DataConnection1
console.log(link2)

console.log(link === link2); // true ✅



4️⃣ Key Takeaways

Singleton prevents multiple instances

Provides global access

Good for DB, Logger, Cache, Config

Easy to implement in JS with static property or instance check




class Logger {
    static instance = null;

    constructor() {
        if (Logger.instance) return Logger.instance;
        this.createdAt = new Date();
        Logger.instance = this;
    }

    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(msg) {
        console.log(`[LOG] ${msg} | Created At: ${this.createdAt}`);
    }
}

// Usage
const loggerA = Logger.getInstance();
const loggerB = Logger.getInstance();
console.log(loggerA === loggerB); // true
