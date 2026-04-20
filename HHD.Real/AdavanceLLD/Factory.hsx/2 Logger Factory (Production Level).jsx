✅ Example 2: Logger Factory (Production Level)
class ConsoleLogger {
  log(msg) { console.log(msg); }
}

class FileLogger {
  log(msg) { console.log("Write to file:", msg); }
}

class LoggerFactory {
  static create(type) {
    switch(type) {
      case "console": return new ConsoleLogger();
      case "file": return new FileLogger();
      default: throw new Error("Invalid logger");
    }
  }
}
