export class BankAccount {
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

