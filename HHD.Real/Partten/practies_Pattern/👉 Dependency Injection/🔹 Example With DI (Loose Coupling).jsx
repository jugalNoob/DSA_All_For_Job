1️⃣ Tight Coupling Example (Bad)
class MySQLDatabase {
  getUser(id) {
    return `User ${id} from MySQL`;
  }
}

class UserService {
  constructor() {
    // ❌ Tight coupling: UserService directly creates MySQLDatabase
    this.database = new MySQLDatabase();
  }

  getUserDetails(id) {
    return this.database.getUser(id);
  }
}

const service = new UserService();
console.log(service.getUserDetails(1)); // User 1 from MySQL

Problems with this approach:
Locked to MySQLDatabase
You cannot use another database without changing the UserService code.
Harder to test
You cannot easily inject a mock database for unit tests.
Violates Open/Closed Principle
To support PostgreSQL, you must modify UserService.
2️⃣ Dependency Injection Example (Good)
class PostgreSQLDatabase {
  getUser(id) {
    return `User ${id} from PostgreSQL`;
  }
}

class UserService {
  // ✅ Loose coupling: dependency is handed to the service
  constructor(database) {
    this.database = database;
  }

  getUserDetails(id) {
    return this.database.getUser(id);
  }
}

// Dependency is created OUTSIDE the service
const db = new PostgreSQLDatabase(); 
const service = new UserService(db); // Injected dependency

console.log(service.getUserDetails(1)); // User 1 from PostgreSQL

Benefits of DI:
Loose coupling
UserService doesn’t care which database it uses.

Flexibility

Swap PostgreSQLDatabase with MySQLDatabase easily:
const mysqlDb = new MySQLDatabase();
const service = new UserService(mysqlDb);


Testability

You can inject a mock database:
class MockDatabase {
  getUser(id) { return `Mock User ${id}`; }
}
const mockService = new UserService(new MockDatabase());

Follows SOLID principles
Open/Closed: can add new databases without changing UserService.