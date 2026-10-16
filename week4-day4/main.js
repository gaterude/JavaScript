// ==========================================
// TASK 1: CLOSURE COUNTER
// ==========================================

function makeCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const c1 = makeCounter();
const c2 = makeCounter();

console.log("TASK 1: CLOSURE COUNTER");
console.log(c1()); // 1
console.log(c1()); // 2
console.log(c2()); // 1
console.log(c1()); // 3


// ==========================================
// TASK 2: CLOSURE MEMOISER
// ==========================================

function memoise(fn) {
  const cache = new Map();

  return function (arg) {
    if (cache.has(arg)) {
      console.log("Returning cached result");
      return cache.get(arg);
    }

    const result = fn(arg);
    cache.set(arg, result);

    return result;
  };
}

const slowSquare = (n) => {
  console.log("computing");
  return n * n;
};

const fastSquare = memoise(slowSquare);

console.log("\nTASK 2: CLOSURE MEMOISER");
console.log(fastSquare(4)); // computing, 16
console.log(fastSquare(4)); // cached result, 16
console.log(fastSquare(5)); // computing, 25


// ==========================================
// TASK 3: SCOPE CHAIN
// ==========================================

const globalVar = "I am global";

function outer() {
  const outerVar = "I am outer";

  function inner() {
    const innerVar = "I am inner";

    console.log("\nTASK 3: SCOPE CHAIN");
    console.log(globalVar, outerVar, innerVar);
  }

  inner();
}

outer();
