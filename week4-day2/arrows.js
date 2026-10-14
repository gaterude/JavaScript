
// Task 1: Convert the 10 functions to arrow functions

// 1. Square
const square = (n) => n * n;
console.log(square(4));
console.log(square(7));

// 2. Greet
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Alex"));
console.log(greet("Mary"));

// 3. Is Even
const isEven = (n) => n % 2 === 0;
console.log(isEven(4));
console.log(isEven(7));

// 4. Maximum
const max = (a, b) => a > b ? a : b;
console.log(max(10, 5));
console.log(max(3, 8));

// 5. Sum
const sum = (arr) => {
  let total = 0;

  for (const n of arr) {
    total += n;
  }

  return total;
};
console.log(sum([1, 2, 3]));
console.log(sum([10, 20, 30]));

// 6. First Word
const firstWord = (sentence) => sentence.trim().split(/\s+/)[0] || "";
console.log(firstWord("JavaScript is fun"));
console.log(firstWord("Hello world"));

// 7. Reverse String
const reverseString = (s) => s.split("").reverse().join("");
console.log(reverseString("hello"));
console.log(reverseString("world"));

// 8. Count Vowels
const countVowels = (s) => (s.match(/[aeiou]/gi) || []).length;
console.log(countVowels("hello"));
console.log(countVowels("JavaScript"));

// 9. Range
const range = (start, end) => {
  const numbers = [];

  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }

  return numbers;
};
console.log(range(1, 5));
console.log(range(3, 7));

// 10. Clamp
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
console.log(clamp(15, 0, 10));
console.log(clamp(-5, 0, 10));


// Task 2: Map drill

const products = [
  { name: "Notebook", price_cents: 35000 },
  { name: "Pen", price_cents: 5000 },
  { name: "Laptop Stand", price_cents: 120000 },
];

// 1. Get product names
const productNames = products.map((product) => product.name);
console.log(productNames);

// 2. Get prices in shillings
const productPrices = products.map((product) => product.price_cents / 100);
console.log(productPrices);

// 3. Add formatted prices
const formattedProducts = products.map((product) => ({
  ...product,
  priceFormatted: `KSh ${product.price_cents / 100}`,
}));
console.log(formattedProducts);


// Task 3: Filter drill

// 1. Products costing less than KSh 1000
const affordableProducts = products.filter(
  (product) => product.price_cents < 100000
);
console.log(affordableProducts);

// 2. Products whose names have more than 5 characters
const longNames = products.filter(
  (product) => product.name.length > 5
);
console.log(longNames);

// 1. Calculate the total price in cents
const totalPrice = products.reduce(
  (total, product) => total + product.price_cents,
  0
);
console.log(totalPrice);

// 2. Create an object mapping product names to prices
const priceMap = products.reduce((result, product) => {
  result[product.name] = product.price_cents;
  return result;
}, {});
console.log(priceMap);
