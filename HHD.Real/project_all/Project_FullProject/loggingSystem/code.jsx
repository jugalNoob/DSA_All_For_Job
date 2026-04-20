class ConsoleLogger {
    log(message) {
        console.log("Console:", message);
    }
}

class FileLogger {
    log(message) {
        console.log("File:", message); // simulate file write
    }
}

class DBLogger {
    log(message) {
        console.log("DB:", message); // simulate DB write
    }
}




class Logger {
    static instance = null;

    constructor(strategy) {
        this.strategy = strategy;
    }

    static getInstance(strategy) {
        if (!Logger.instance) {
            Logger.instance = new Logger(strategy);
        }
        return Logger.instance;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    log(message) {
        this.strategy.log(message);
    }
}


let logger = Logger.getInstance(new ConsoleLogger());

logger.log("Hello World");  
// Console: Hello World

// Change strategy at runtime
logger.setStrategy(new DBLogger());

logger.log("Save to DB");
// DB: Save to DB
