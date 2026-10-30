# Week 5 Day 2 AI Audit

## What I worked on

I implemented a BankAccount using a constructor function and an ES6 class. I added deposit, withdrawal, balance and transaction history functionality.

## AI assistance

I used ChatGPT to help implement and explain constructor functions, prototype methods, ES6 classes, getters, setters and static methods.

## What I learned

* Constructor functions create objects using the `new` keyword.
* Prototype methods are shared between instances.
* ES6 classes provide a cleaner syntax for object-oriented programming.
* Getters allow properties to be accessed like normal values.
* Setters allow controlled property updates.
* Static methods belong to the class rather than individual instances.

## Code review decisions

1. Accepted: Validate deposit amounts to prevent zero or negative deposits.
2. Accepted: Validate withdrawal amounts and prevent withdrawals exceeding the available balance.
3. Accepted: Keep methods on the prototype or inside the class instead of recreating them for every instance.

## Testing

I tested deposits, withdrawals, balance calculations, transaction history, the owner setter, the static method and forgetting the `new` keyword.

## Reflection

I now understand how constructor functions and ES6 classes create objects and how JavaScript uses prototypes to share methods.
