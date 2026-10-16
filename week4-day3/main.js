// ==========================================
// TASK 1: DEFAULT PARAMETERS
// ==========================================

function greet(name = "friend") {
  return `Hello, ${name}!`;
}

function raiseToPower(base, exponent = 2) {
  return base ** exponent;
}

function formatPrice(amount, currency = "KSh") {
  return `${currency} ${amount.toLocaleString("en-KE")}`;
}

function joinWords(words, separator = ", ") {
  return words.join(separator);
}

function makeUser(name, { age = 18, city = "Nairobi" } = {}) {
  return { name, age, city };
}

console.log("\n========== TASK 1: DEFAULT PARAMETERS ==========");

console.log(greet("Alex"));
console.log(greet());

console.log(raiseToPower(3, 3));
console.log(raiseToPower(5));

console.log(formatPrice(1500));
console.log(formatPrice(1500, "USD"));

console.log(joinWords(["red", "green", "blue"]));
console.log(joinWords(["red", "green", "blue"], " - "));

console.log(makeUser("Alex", { age: 21, city: "Nakuru" }));
console.log(makeUser("Sam"));


// ==========================================
// TASK 2: REST PARAMETERS
// ==========================================

function sumAll(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

function concat(...strings) {
  return strings.join("");
}

function maxOf(...values) {
  if (values.length === 0) {
    return undefined;
  }

  return Math.max(...values);
}

console.log("\n========== TASK 2: REST PARAMETERS ==========");

console.log("Zero arguments:");
console.log(sumAll());
console.log(concat());
console.log(maxOf());

console.log("One argument:");
console.log(sumAll(5));
console.log(concat("Hello"));
console.log(maxOf(7));

console.log("Two arguments:");
console.log(sumAll(5, 10));
console.log(concat("Hello", " World"));
console.log(maxOf(7, 12));

console.log("Five arguments:");
console.log(sumAll(1, 2, 3, 4, 5));
console.log(concat("I", " ", "love", " ", "JavaScript"));
console.log(maxOf(7, 12, 3, 25, 9));


// ==========================================
// TASK 3: DESTRUCTURING
// ==========================================

// Array destructuring
const [red, green, blue] = [255, 128, 64];

console.log("\n========== TASK 3: DESTRUCTURING ==========");

console.log("Red:", red);
console.log("Green:", green);
console.log("Blue:", blue);

// Object destructuring in function parameters
function displayUser({ name, age, city }) {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("City:", city);
}

const user = {
  name: "Alex",
  age: 21,
  city: "Nairobi",
};

displayUser(user);

// Rename a destructured property
const { name: fullName } = user;
console.log("Full name:", fullName);

// Default value during destructuring
const preferences = {};
const { theme = "light" } = preferences;

console.log("Theme:", theme);


// ==========================================
// TASK 4: RECEIPT BUILDER
// ==========================================

function buildReceipt(
  { name, phone },
  taxRate = 0.16,
  ...items
) {
  const subtotal = items.reduce(
    (total, product) => total + product.price * product.qty,
    0
  );

  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const itemLines = items.map((product) => {
    const lineTotal = product.price * product.qty;

    return `${product.item} x${product.qty}: KSh ${lineTotal.toLocaleString("en-KE")}`;
  });

  return `
========== CUSTOMER RECEIPT ==========
Customer: ${name}
Phone: ${phone}

${itemLines.join("\n")}

Subtotal: KSh ${subtotal.toLocaleString("en-KE")}
Tax (${(taxRate * 100).toFixed(0)}%): KSh ${tax.toLocaleString("en-KE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}
Total: KSh ${total.toLocaleString("en-KE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}
======================================
`;
}

console.log("\n========== TASK 4: RECEIPT BUILDER ==========");

const customer1 = {
  name: "Alex",
  phone: "0712345678",
};

console.log(
  buildReceipt(
    customer1,
    0.16,
    { item: "Notebook", price: 150, qty: 2 },
    { item: "Pen", price: 50, qty: 3 }
  )
);

console.log(
  buildReceipt(
    { name: "Mary", phone: "0723456789" },
    0.16,
    { item: "School bag", price: 1200, qty: 1 },
    { item: "Ruler", price: 80, qty: 2 },
    { item: "Pencil", price: 20, qty: 5 }
  )
);

console.log(
  buildReceipt(
    { name: "John", phone: "0734567890" },
    undefined,
    { item: "Calculator", price: 850, qty: 1 }
  )
);


// ==========================================
// TASK 5: RECEIPT WITH CUSTOMER DISCOUNT
// Discount is applied before tax.
// ==========================================

function buildDiscountedReceipt(
  { name, phone },
  discountPercent = 0,
  taxRate = 0.16,
  ...items
) {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error("Discount must be between 0 and 100 percent.");
  }

  const subtotal = items.reduce(
    (total, product) => total + product.price * product.qty,
    0
  );

  const discount = subtotal * (discountPercent / 100);
  const discountedSubtotal = subtotal - discount;
  const tax = discountedSubtotal * taxRate;
  const total = discountedSubtotal + tax;

  const money = (amount) =>
    `KSh ${amount.toLocaleString("en-KE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const itemLines = items.map((product) => {
    const lineTotal = product.price * product.qty;
    return `${product.item} x${product.qty}: ${money(lineTotal)}`;
  });

  return `
========== DISCOUNTED RECEIPT ==========
Customer: ${name}
Phone: ${phone}

${itemLines.join("\n")}

Subtotal: ${money(subtotal)}
Discount (${discountPercent}%): -${money(discount)}
After discount: ${money(discountedSubtotal)}
Tax (${(taxRate * 100).toFixed(0)}%): ${money(tax)}
TOTAL: ${money(total)}
=======================================
`;
}

console.log("\n========== TASK 5: DISCOUNT EXTENSION ==========");

console.log(
  buildDiscountedReceipt(
    { name: "Grace", phone: "0700111222" },
    10,
    0.16,
    { item: "Shoes", price: 2500, qty: 1 },
    { item: "Socks", price: 200, qty: 2 }
  )
);
