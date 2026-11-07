// TASK 1: Wrap setTimeout in a Promise

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

wait(1000).then(() => console.log("1 second passed"));


// TASK 2: Rewrite callback hell using Promise chaining

wait(1000)
  .then(() => {
    console.log(1);
    return wait(1000);
  })
  .then(() => {
    console.log(2);
    return wait(1000);
  })
  .then(() => {
    console.log(3);
    return wait(1000);
  })
  .then(() => {
    console.log(4);
    return wait(1000);
  })
  .then(() => {
    console.log(5);
  })
  .catch((error) => console.error("Chain error:", error));


// TASK 3: Error handling with .catch

function divide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(new Error("Cannot divide by zero"));
      return;
    }

    resolve(a / b);
  });
}

divide(10, 2)
  .then((result) => console.log("Result:", result))
  .catch((err) => console.error("Error:", err.message));

divide(10, 0)
  .then((result) => console.log("Result:", result))
  .catch((err) => console.error("Error:", err.message));


// TASK 4: Promise.all and Promise.race

const p1 = wait(1000).then(() => "one");
const p2 = wait(2000).then(() => "two");
const p3 = wait(3000).then(() => "three");

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log("All done:", results);
  })
  .catch((error) => console.error("Promise.all error:", error));

Promise.race([p1, p2, p3])
  .then((first) => {
    console.log("First done:", first);
  })
  .catch((error) => console.error("Promise.race error:", error));


// TASK 5: Promise.allSettled

const mixed = [
  divide(10, 2),
  divide(10, 0),
  divide(8, 4),
];

Promise.allSettled(mixed).then((results) => {
  results.forEach((result, index) => {
    console.log(
      index,
      result.status,
      result.status === "fulfilled"
        ? result.value
        : result.reason.message
    );
  });
});
// Compare Promise.all() with Promise.allSettled()

Promise.all(mixed)
  .then((results) => {
    console.log("Promise.all results:", results);
  })
  .catch((error) => {
    console.error("Promise.all rejected:", error.message);
  });