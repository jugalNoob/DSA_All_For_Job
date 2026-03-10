Meaning:
Inheritance allows a child class to get the properties and methods of a parent class.
The child can reuse the parent code without rewriting it.

Example:

class User {
    constructor(name) {
        this.name = name;
    }
    login() {
        console.log(`${this.name} logged in`);
    }
}

class Admin extends User {
    deletePost() {
        console.log(`${this.name} deleted a post`);
    }
}

let admin = new Admin("Jugal");
admin.login();       // inherited from User
admin.deletePost();  // own method


Explanation:

Admin inherits from User.

Admin can use login() even though we didn’t define it in Admin.

✅ This is inheritance.