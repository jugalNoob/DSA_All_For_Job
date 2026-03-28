🔹 5. Dependency Injection (Loose coupling)
class NotificationController {
  constructor(service) {
    this.service = service;
  }

  send(message, type) {
    this.service.notifyAll(message, type);
  }
}

// Inject dependency
const service = new NotificationService();
const controller = new NotificationController(service);
