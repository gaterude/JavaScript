import { BankAccount } from "./BankAccount.js";

export class CurrentAccount extends BankAccount {
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