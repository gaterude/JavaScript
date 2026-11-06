import { BankAccount } from "./BankAccount.js";

export class SavingsAccount extends BankAccount {
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