# Week 6 Day 2: Promises — Resolved, Rejected, and Chained

## 1. What is a Promise?

A Promise is a JavaScript object representing the eventual success or failure of an asynchronous operation.

A Promise has three states:

- Pending: The operation has not finished.
- Fulfilled: The operation completed successfully.
- Rejected: The operation failed.

## 2. Task 1: The wait() Utility

The wait(ms) function returns a Promise that resolves after the specified number of milliseconds.

It wraps setTimeout inside a Promise, allowing delays to be handled using .then() instead of nested callbacks.

## 3. Task 2: Promise Chaining

The callback hell approach uses nested callbacks, making code harder to read and maintain.

Promise chaining uses consecutive .then() methods to organize asynchronous operations in a readable sequence.

Returning wait(1000) inside each .then() ensures that the next step waits for the previous delay to finish.

The Promise chain is easier to follow because the operations are written in sequence rather than nested inside one another.

## 4. Task 3: Error Handling

The divide(a, b) function returns a Promise.

- resolve() returns the successful division result.
- reject() returns an error when the divisor is zero.
- .catch() handles rejected promises.

Both successful and unsuccessful division operations were tested.

## 5. Task 4: Promise.all() and Promise.race()

### Promise.all()

Promise.all() receives an array of promises and fulfills when all of them fulfill.

It returns their results in the same order as the original array, regardless of which promise finishes first.

If any promise rejects, Promise.all() rejects with that error.

### Promise.race()

Promise.race() settles as soon as the first promise settles.

In this exercise, the first promise to fulfill returned "one".

### Difference

Promise.all() waits for every promise to fulfill before returning the results.

Promise.race() returns the result of the first promise to settle, whether fulfilled or rejected.

## 6. Task 5: Promise.allSettled()

Promise.allSettled() waits for every promise to settle, whether fulfilled or rejected.

It returns an array containing the status and result or rejection reason of each promise.

### Promise.all() vs Promise.allSettled()

Promise.all() is useful when every operation must succeed for the overall result to be useful. It rejects when one promise rejects.

Promise.allSettled() is preferable when every result matters, even if some operations fail. It allows successful and unsuccessful results to be inspected individually.

The trade-off is that Promise.allSettled() does not reject just because one operation fails. The program must inspect each result and decide how to handle failures.

## 7. Conclusion

Promises provide a cleaner way to manage asynchronous JavaScript operations.

They support sequential execution through chaining, error handling through .catch(), and concurrent operations through Promise.all(), Promise.race(), and Promise.allSettled().

## References

- MDN Promise:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

- MDN Using Promises:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
