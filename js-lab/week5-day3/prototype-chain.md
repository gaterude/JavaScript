# Prototype Chain in JavaScript

## Prototype Chain Diagram

```text
s (SavingsAccount instance)
        |
        v
SavingsAccount.prototype
        |
        v
BankAccount.prototype
        |
        v
Object.prototype
        |
        v
null
```

## Explanation

The prototype chain allows JavaScript objects to inherit properties and methods from other objects.

The `s` object is an instance of `SavingsAccount`.

Because `SavingsAccount` extends `BankAccount`, it inherits methods such as `deposit()`, `withdraw()`, and `getBalance()` from `BankAccount`.

The `SavingsAccount` prototype contains its own methods, including `constructor` and `addInterest()`.

The chain continues through `BankAccount.prototype` to `Object.prototype`, which is the base prototype for ordinary JavaScript objects.

The chain eventually ends at `null`.

## Verification

The following checks were used:

- `s instanceof SavingsAccount` returned `true`.
- `s instanceof BankAccount` returned `true`.
- `Object.getPrototypeOf(s)` returned `SavingsAccount.prototype`.
- The next prototype was `BankAccount.prototype`.