2️⃣ Method Overriding

Meaning:
When a child class defines a method with the same name as the 
parent, the child’s method replaces the parent’s method when 
called on a child object.

Example:

class User {
    deletePost() {
        console.log("User cannot delete posts");
    }
}

class Admin extends User {
    deletePost() {
        console.log("Admin deleted a post");
    }
}

let admin = new Admin();
admin.deletePost();  // Output: "Admin deleted a post"


Explanation:

Parent (User) had deletePost().

Child (Admin) overrides it.

Calling deletePost() on Admin uses the child version.

✅ This is method overriding.