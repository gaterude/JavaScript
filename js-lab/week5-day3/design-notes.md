\# Inheritance vs Composition



Inheritance is useful when one class is a specialised version of another class and can reuse its behaviour. In my example, SavingsAccount and CurrentAccount extend BankAccount because both are types of bank accounts that share deposits, withdrawals, and balance calculations. Composition is useful when an object needs to use another object without necessarily being a specialised version of it. I would model a LoanAccount as a separate class that has a BankAccount rather than extending BankAccount because a loan represents money owed, not necessarily a normal deposit account. This keeps the responsibilities of the two classes separate and makes the system easier to maintain.



