class User{
    constructor(name, role){
        this.name = name
        this.role = role
    }

    login(){
        console.log(`${this.name} logged in`)
    }
    // optional: deletePost() removed because Admin overrides it
}

class Admin extends User{
    deletePost(){
        if(this.role === 'admin'){
            console.log(`${this.name} deleted a post`)
        } else {
            console.log('Permission denied')
        }
    }
}

class Moderator extends Admin{
    banUser(){
        if(this.role === 'admin'){   // fixed typo
            console.log(`${this.name} banned a user`)
        } else {
            console.log('Permission denied')
        }
    }
}

// Admin object
let admin = new Admin("Jugal", "admin")
admin.login()          // Jugal logged in
admin.deletePost()     // Jugal deleted a post

// Moderator object
let mod = new Moderator('Sharma', 'admin')
mod.login()            // Sharma logged in
mod.deletePost()       // Sharma deleted a post
mod.banUser()          // Sharma banned a user



//         User
//        /    \
//    Admin   Moderator
