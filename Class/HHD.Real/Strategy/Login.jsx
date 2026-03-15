2️⃣ Example with Login (Very Common Backend Use)

Yes 👍 login systems often use Strategy Pattern.

Example login methods:

Email Login
Google Login
Facebook Login

Strategies
class EmailLogin{

    login(user){
        console.log("Login with Email:", user)
    }

}

class GoogleLogin{

    login(user){
        console.log("Login with Google:", user)
    }

}

Context
class LoginContext{

    constructor(strategy){
        this.strategy = strategy
    }

    login(user){
        this.strategy.login(user)
    }

}

Use
const google = new GoogleLogin()

const login = new LoginContext(google)

login.login("Jugal")


Output:

Login with Google: Jugal


If user chooses email:

login.strategy = new EmailLogin()

3️⃣ Simple Rule

Strategy Pattern means:

Multiple algorithms
        ↓
Choose one at runtime


Examples:

Sorting algorithms
Payment methods
Login methods
Rate limiting
Compression

4️⃣ Visual Understanding
Context
   │
   ▼
Strategy Interface
 ┌───────┼────────┐
 ▼       ▼        ▼
Bubble  Quick   Merge

5️⃣ Interview One-Line Answer

You can say:

Strategy Pattern allows selecting different algorithms or behaviors at runtime without changing the main code.