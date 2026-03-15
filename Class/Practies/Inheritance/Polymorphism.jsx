1️⃣ Polymorphism

Meaning:

Polymorphism literally means “many forms”.

In OOP, it means an object can behave differently depending on the context, even if the method name is the same.

Example:

class User {
    login() {
        console.log("User logged in");
    }
}

class Admin extends User {
    login() {
        console.log("Admin logged in with full access");
    }
}

let user = new User();
let admin = new Admin();

user.login();   // User logged in
admin.login();  // Admin logged in with full access


✅ Both objects call login(), but behavior changes based on the object type → this is polymorphism.