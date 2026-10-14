# When Not to Use Arrow Functions

const counter = {
  count: 0,
  increment: () => {
    this.count += 1;
  },
};

counter.increment();
console.log(counter.count); // 0


Arrow functions do not have their own `this`. They inherit `this` from the surrounding scope, so `this` does not refer to the `counter` object here. The count therefore stays at 0. A regular method using `increment() { this.count += 1; }` would work correctly.
