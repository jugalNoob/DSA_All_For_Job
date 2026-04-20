class Bank {
  #balance = 0;   // private -> hidden from user

  constructor(amount) {
    this.#balance = amount;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;  // controlled access
  }
}

const user = new Bank(1000);

console.log(user.getBalance()); // 1000
console.log(user.#balance);     // ❌ ERROR
