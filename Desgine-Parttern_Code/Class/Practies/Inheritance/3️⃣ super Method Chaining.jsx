3️⃣ super Method Chaining

Meaning:

super allows a child class to call a parent class’s method inside an overridden method.

This is useful when you want both parent and child logic to run.

Example:

class User {
    deletePost() {
        console.log("User delete check");
    }
}

class Admin extends User {
    deletePost() {
        super.deletePost(); // call parent method
        console.log("Admin deleted a post");
    }
}

let admin = new Admin();
admin.deletePost();


Output:

User delete check   // parent logic
Admin deleted a post // child logic


Explanation:

super.deletePost() calls the parent’s deletePost().

Then the child continues its own logic.

This is called super method chaining.




class Linked {
    constructor(data, role) {
        this.data = data;
        this.role = role;
    }

    showData() {
        console.log('Data:', this.data);
    }
}

class LinkedTwo extends Linked {
    deletePost() {
        if (this.role === 'admin') {
            super.showData();
            console.log('Deleted:', this.data);
        } else {
            console.log('Permission denied');
        }
    }
}

let link = new LinkedTwo('jugal sharma', 'admin');
link.deletePost();
