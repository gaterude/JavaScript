"use strict";

// Constructor function
function BankAccount(owner, openingBalance = 0) {
this.owner = owner;
this.balanceCents = openingBalance;
this.transactions = [];
}

// Deposit method
BankAccount.prototype.deposit = function (amountCents) {
if (amountCents <= 0) {
throw new Error("Deposit must be greater than zero");
}

this.balanceCents += amountCents;

this.transactions.push({
type: "deposit",
amountCents,
});
};

// Withdraw method
BankAccount.prototype.withdraw = function (amountCents) {
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
};

// Get balance
BankAccount.prototype.getBalance = function () {
return this.balanceCents / 100;
};

// Create account
const acc = new BankAccount("Wanjiru", 100000);

acc.deposit(50000);
acc.withdraw(30000);

console.log("CONSTRUCTOR FUNCTION");
console.log("Owner:", acc.owner);
console.log("Balance:", acc.getBalance());
console.log("Transactions:", acc.transactions);

// Demonstrate forgetting new
try {
const incorrectAccount = BankAccount("Wanjiru", 100000);
console.log(incorrectAccount);
} catch (error) {
console.log("Forgetting new:", error.message);
}
