# AI Audit — Week 6 Day 2: Promises

## AI Usage Summary

AI assistance was used to generate and explain the Promise implementation for Tasks 1–5.

## Tasks Where AI Assisted

1. Task 1: Generated the wait(ms) utility using new Promise() and setTimeout().
2. Task 2: Generated the Promise chain using consecutive .then() calls.
3. Task 3: Generated the divide(a, b) function with resolve(), reject(), and .catch().
4. Task 4: Generated examples demonstrating Promise.all() and Promise.race().
5. Task 5: Generated the Promise.allSettled() example and result inspection.

## Human Verification

The implementation was executed using Node.js.

The observed output confirmed:

- The wait() utility resolved after its delay.
- The Promise chain printed numbers in the expected order.
- Division by zero was handled through .catch().
- Promise.all() returned all three successful results.
- Promise.race() returned the first completed result.
- Promise.allSettled() reported fulfilled and rejected outcomes.

## Limitations

The implementation was AI-assisted. The learner is responsible for reviewing the code, understanding the Promise methods, and verifying the results.

The MDN resources below are the required primary references for reviewing the concepts. AI-generated explanations and code should be checked against them.

## MDN References

1. Promise:
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

2. Using Promises:
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

3. Promise.all():
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

4. Promise.race():
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race

5. Promise.allSettled():
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
