 Week 5 Day 3 AI Audit

I implemented a BankAccount base class and created SavingsAccount and CurrentAccount subclasses using inheritance.

# AI assistance
I used ChatGPT to help implement the subclasses, explain the prototype chain, understand super(), and review the inheritance structure.

# What I learned
The prototype chain allows objects to inherit properties and methods.
The extends keyword creates a subclass.
The super() function calls the parent constructor.
Subclasses can override inherited methods.
Composition can be a better choice when objects have separate responsibilities.

## Code review decisions

 Accepted: Validate withdrawal amounts to prevent invalid transactions.
 Accepted: Keep shared account functionality in BankAccount to avoid unnecessary duplication.
 Accepted: Use composition for a LoanAccount because a loan does not necessarily behave like a normal bank account.


## Testing

I tested savings deposits, interest calculations, current account overdrafts, overdraft limits, instanceof checks, and prototype relationships.

# Reflection

I learned how JavaScript classes inherit methods through the prototype chain and how to choose between inheritance and composition when designing applications.
