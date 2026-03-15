1️⃣ Encapsulation

Meaning:

Encapsulation is about hiding internal data and exposing only what is necessary.

You protect object properties and only allow access through methods (getters/setters).

Example in JavaScript:

class User {
    #password; // private property (ES2022+)

    constructor(name, password) {
        this.name = name;
        this.#password = password;
    }

    login(inputPassword) {
        if (inputPassword === this.#password) {
            console.log(`${this.name} logged in`);
        } else {
            console.log("Invalid password");
        }
    }

    // Optional getter (read-only)
    getPassword() {
        return "Access Denied"; // never return real password
    }
}

let user = new User("Jugal", "1234");
user.login("1234");  // Jugal logged in
console.log(user.#password); // ❌ Error, cannot access private field


✅ Key points:

Internal data (#password) is hidden.

Access is only through controlled methods.