class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
        else {
            console.log("The deposit amount must be positive.");
        }
    }
    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
            }
            else {
                console.log("Insufficient funds in the account.");
            }
        }
        else {
            comsole.log("The withdrawal amount must be positive.");
        }
    }
  }
  
  const account1 = new BankAccount(1000);
  
  console.log(account1.getBalance()); // 1000
  account1.deposit(500);
  console.log(account1.getBalance()); // 1500
  account1.withdraw(200);
  console.log(account1.getBalance()); // 1300