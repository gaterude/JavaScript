# AI Audit - Week 5 Day 4

## 1. AI Assistance Used

I used AI to review the ES6 module structure, explain named and default exports, and help identify issues during implementation.

AI also assisted with code examples for separating the account classes into individual modules and connecting them through imports.

## 2. Suggestions Reviewed

### Suggestion 1: Separate Each Class into Its Own Module

Decision: ACCEPTED

Reason: This improves code organization, readability and reusability. Each account class has its own file.

### Suggestion 2: Use Named Exports for Classes

Decision: ACCEPTED

Reason: Named exports make it clear which class is being imported and allow multiple named exports from a module.

### Suggestion 3: Use a Default Export for Configuration

Decision: ACCEPTED

Reason: The settings object is the main value exported by defaults.js, so a default export is appropriate.

### Suggestion 4: Add a Barrel File (index.js)

Decision: DEFERRED

Reason: Direct imports make the module relationships easier to understand while learning ES6 modules. A barrel file can be introduced later.

## 3. Testing

- Tested BankAccount import and instantiation.
- Tested SavingsAccount inheritance and interest calculation.
- Tested CurrentAccount inheritance and overdraft validation.
- Tested named export formatCurrency.
- Tested default export settings.
- Confirmed modules loaded successfully in the browser.

## 4. Reflection

This exercise helped me understand how JavaScript modules separate responsibilities and allow different files to share functionality. I also learned the difference between named exports and default exports and how to load modules in a browser using script type="module".