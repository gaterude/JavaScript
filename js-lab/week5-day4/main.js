import { BankAccount } from "./accounts/BankAccount.js";
import { SavingsAccount } from "./accounts/SavingsAccount.js";
import { CurrentAccount } from "./accounts/CurrentAccount.js";
import { formatCurrency } from "./accounts/format.js";
import settings from "./accounts/defaults.js";

// 1. Test BankAccount
console.log("========== BANK ACCOUNT ==========");

const regular = new BankAccount("Wanjiru", 200000);
regular.deposit(50000);

console.log("Owner:", regular.owner);
console.log("Balance:", formatCurrency(regular.balanceCents));
console.log("Transactions:", regular.transactions);

// 2. Test SavingsAccount
console.log("\n========== SAVINGS ACCOUNT ==========");

const savings = new SavingsAccount(
  "Amina",
  500000,
  settings.interestRate
);

savings.deposit(100000);
savings.addInterest();

console.log("Owner:", savings.owner);
console.log("Balance:", formatCurrency(savings.balanceCents));
console.log("Transactions:", savings.transactions);

// 3. Test CurrentAccount
console.log("\n========== CURRENT ACCOUNT ==========");

const current = new CurrentAccount("Brian", 100000);

current.withdraw(300000);

console.log("Owner:", current.owner);
console.log("Balance:", formatCurrency(current.balanceCents));
console.log("Transactions:", current.transactions);

try {
  current.withdraw(400000);
} catch (error) {
  console.log("Overdraft test:", error.message);
}

// 4. Test named and default exports
console.log("\n========== MODULE EXPORTS ==========");

console.log("Default settings:", settings);
console.log("Formatted currency:", formatCurrency(648000));