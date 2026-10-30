"use strict";

class BankAccount {
  constructor(owner, openingBalance = 0) {
    this._owner = owner.toUpperCase();
    this.balanceCents = openingBalance;
    this.transactions = [];
  }

  // Getter
  get balance() {
    return this.balanceCents / 100;
  }

  // Setter
  set owner(newName) {
    this._owner = newName.toUpperCase();
  }

  get owner() {
    return this._owner;
  }

  // Deposit method
  deposit(amountCents) {
    if (amountCents <= 0) {
      throw new Error("Deposit must be greater than zero");
    }

    this.balanceCents += amountCents;

    this.transactions.push({
      type: "deposit",
      amountCents,
    });
  }

  // Withdraw method
  withdraw(amountCents) {
    if (amountCents <= 0) {
      throw new Error("Withdrawal must be greater than zero");
    }

    if (amountCents > this.balanceCents) {
      throw new Error("Insufficient funds");
    }

    this.balanceCents -= amountCents;

    this.transactions.push({
      type: "withdraw",
      amountCents,
    });
  }

  // Static method
  static minimumOpeningBalance() {
    return 1000;
  }

  // Transaction history
  history() {
    return this.transactions
      .map(
        (transaction) =>
          `${transaction.type}: KSh ${transaction.amountCents / 100}`
      )
      .join("\n");
  }
}

// Create account
const account = new BankAccount("Wanjiru", 100000);

account.deposit(50000);
account.withdraw(30000);

console.log("ES6 CLASS");
console.log("Owner:", account.owner);
console.log("Balance:", account.balance);
console.log("Transactions:", account.transactions);

console.log(
  "Minimum opening balance:",
  BankAccount.minimumOpeningBalance()
);

// Demonstrate setter
account.owner = "Mary Wanjiru";
console.log("Updated owner:", account.owner);

// Demonstrate history
console.log("History:\n" + account.history());

// Demonstrate forgetting new
try {
  const incorrectAccount = BankAccount("Wanjiru", 100000);
  console.log(incorrectAccount);
} catch (error) {
  console.log("Forgetting new with class:", error.message);
}