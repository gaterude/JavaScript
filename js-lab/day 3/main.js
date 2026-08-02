const price = 56000;        // cost per item in KSh
const quantity = 4;
const taxRate = 0.16;      // 16% VAT

const subtotal = price * quantity;
const tax = subtotal * taxRate;
const total = subtotal + tax;

console.log(`Subtotal: KSh ${subtotal}`);
console.log(`Tax: KSh ${tax}`);
console.log(`Total: KSh ${total.toFixed(2)}`);

const values = [0, 1, "", "hello", null, undefined, NaN, [], {}, false, true];
values.forEach((v) => {
  console.log(`${JSON.stringify(v)} is ${Boolean(v) ? "truthy" : "falsy"}`);
});

console.log(0 == false); // true because false becomes 0
console.log(0 === false); // false because number and boolean are different types

console.log("" == 0); // true because "" becomes 0
console.log("" === 0); // false because string and number are different types

console.log(null == undefined); // true because JavaScript treats them as loosely equal
console.log(null === undefined); // false because they are different types

console.log("5" == 5); // true because the string is converted to a number
console.log("5" === 5); // false because one is a string and the other is a number

console.log(true == 1); // true because true becomes 1
console.log(true === 1); // false because boolean and number are different types


// const username = "";
// const displayName = username || "Anonymous";

// console.log(`Hello, ${displayName}`);

// const isLoggedIn = true;

// isLoggedIn && console.log("Welcome back!");
const username2 = "Gartrude";
const displayName2 = username2 || "Anonymous";

console.log(`Hello, ${displayName2}`);

const isLoggedIn2 = false;

isLoggedIn2 && console.log("Welcome back!");

// Fixed 1
const discount = 200 * 0.25;
console.log(discount);

// Fixed 2
const age = 18;

if (age >= 18) {
  console.log("You are an adult");
}

// Fixed 3
const a = "5";
const b = 3;

console.log(String(a) + String(b)); // "53"
