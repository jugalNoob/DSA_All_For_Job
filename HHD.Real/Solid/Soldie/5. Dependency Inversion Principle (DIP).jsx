5. Dependency Inversion Principle (DIP)
"High-level modules should not depend on low-level modules. Both should depend on abstractions."
JavaScript// ❌ Bad - Direct Dependency (Tight Coupling)
class UserService {
    constructor() {
        this.repository = new MySQLRepository(); // Direct dependency on concrete class
    }
    
    getUser(id) {
        return this.repository.findById(id);
    }
}

// ✅ Good - Depend on Abstraction
class UserRepository {          // Abstraction (Interface)
    findById(id) {
        throw new Error("Method must be implemented");
    }
}

class MySQLRepository extends UserRepository {
    findById(id) {
        // MySQL logic
        return { id, name: "Jugal" };
    }
}

class MongoRepository extends UserRepository {
    findById(id) {
        // MongoDB logic
        return { id, name: "Jugal" };
    }
}

class UserService {
    constructor(repository) {           // Dependency Injection
        this.repository = repository;   // Depends on abstraction
    }
    
    getUser(id) {
        return this.repository.findById(id);
    }
}

// Usage
const service = new UserService(new MySQLRepository());
// or
const service2 = new UserService(new MongoRepository());