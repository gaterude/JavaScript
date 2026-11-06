"use strict";

// ==========================================
// BASE CLASS: BANK ACCOUNT
// ==========================================

class BankAccount {
constructor(owner, openingBalance = 0) {
this.owner = owner;
this.balanceCents = openingBalance;
this.transactions = [];
}

deposit(amountCents) {
if (!Number.isFinite(amountCents) || amountCents <= 0) {
throw new Error("Deposit must be greater than zero");
}

 
this.balanceCents += amountCents;

this.transactions.push({
  type: "deposit",
  amountCents,
});
 

}

withdraw(amountCents) {
if (!Number.isFinite(amountCents) || amountCents <= 0) {
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

getBalance() {
return this.balanceCents / 100;
}
}

// ==========================================
// TASK 1: SAVINGS ACCOUNT
// ==========================================

class SavingsAccount extends BankAccount {
constructor(owner, openingBalance, interestRate = 0.05) {
super(owner, openingBalance);
this.interestRate = interestRate;
}

addInterest() {
const interest = Math.floor(
this.balanceCents * this.interestRate
);

 
this.balanceCents += interest;

this.transactions.push({
  type: "interest",
  amountCents: interest,
});
 

}
}

// ==========================================
// TASK 2: CURRENT ACCOUNT
// ==========================================

class CurrentAccount extends BankAccount {
constructor(owner, openingBalance) {
super(owner, openingBalance);
this.overdraftLimit = 500000;
}

withdraw(amountCents) {
if (!Number.isFinite(amountCents) || amountCents <= 0) {
throw new Error("Withdrawal must be greater than zero");
}

 
if (amountCents > this.balanceCents + this.overdraftLimit) {
  throw new Error("Overdraft limit exceeded");
}

this.balanceCents -= amountCents;

this.transactions.push({
  type: "withdraw",
  amountCents,
});
 

}
}

// ==========================================
// TASK 1 TEST: SAVINGS ACCOUNT
// ==========================================

console.log("========== SAVINGS ACCOUNT ==========");

const savings = new SavingsAccount("Wanjiru", 500000, 0.08);

savings.deposit(100000);
savings.addInterest();

console.log("Owner:", savings.owner);
console.log("Balance:", savings.getBalance());
console.log("Transactions:", savings.transactions);

// ==========================================
// TASK 2 TEST: CURRENT ACCOUNT
// ==========================================

console.log("\n========== CURRENT ACCOUNT ==========");

const current = new CurrentAccount("Amina", 100000);

current.withdraw(300000);

console.log("Owner:", current.owner);
console.log("Balance:", current.getBalance());
console.log("Transactions:", current.transactions);

// Test exceeding the overdraft limit
try {
current.withdraw(400000);
} catch (error) {
console.log("Overdraft test:", error.message);
}

// ==========================================
// TASK 3: PROTOTYPE CHAIN
// ==========================================

console.log("\n========== PROTOTYPE CHAIN ==========");

const s = new SavingsAccount("Amina", 100000);

console.log(
"Is SavingsAccount:",
s instanceof SavingsAccount
);

console.log(
"Is BankAccount:",
s instanceof BankAccount
);

console.log(
"First prototype:",
Object.getPrototypeOf(s).constructor.name
);

console.log(
"Second prototype:",
Object.getPrototypeOf(
Object.getPrototypeOf(s)
).constructor.name
);

// ==========================================
// EXTRA: SUBCLASS METHODS
// ==========================================

console.log(
"\nSavingsAccount own methods:",
Object.getOwnPropertyNames(SavingsAccount.prototype)
);

console.log(
"CurrentAccount own methods:",
Object.getOwnPropertyNames(CurrentAccount.prototype)
);
