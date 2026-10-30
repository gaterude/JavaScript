const product = {
id: 1,
name: "Notebook",
priceCents: 35000,
inStock: true,
tags: ["stationery", "paper"],
dimensions: {
width: 14,
height: 21,
unit: "cm",
},

describe() {
return `${this.name} -- KSh ${this.priceCents / 100}`;
},
};

// Four different property access patterns
console.log("Dot notation:", product.name);
console.log("Bracket notation:", product["priceCents"]);
console.log("Nested property:", product.dimensions.width);
console.log("Object method:", product.describe());

// ==========================================
// TASK 2: SPREAD AND MERGE
// ==========================================

// Create a shallow copy using spread
const product2 = {
...product,
id: 2,
name: "Pen",
};

console.log("\nTASK 2: SPREAD AND MERGE");
console.log("Original product:", product);
console.log("Copied product:", product2);

// Demonstrate the shallow-copy problem
product2.tags.push("ink");

console.log("Original tags after modifying product2:", product.tags);
console.log("Copied tags:", product2.tags);

// The spread operator only makes a shallow copy.
// Nested arrays and objects are still shared.

// Fix the problem with a deep clone
const product3 = JSON.parse(JSON.stringify(product));

product3.tags.push("school");

console.log("Deep cloned tags:", product3.tags);
console.log("Original tags remain:", product.tags);

// ==========================================
// TASK 3: DESTRUCTURING WITH RENAME AND DEFAULT
// ==========================================

function summarise({
name: productName,
priceCents,
inStock = false,
}) {
return `${productName}: ${
    inStock ? "available" : "out of stock"
  } at KSh ${priceCents / 100}`;
}

console.log("\nTASK 3: DESTRUCTURING");
console.log(summarise(product));
console.log(summarise({
name: "Pen",
priceCents: 5000,
}));

// ==========================================
// TASK 4: SIMPLE INVENTORY
// ==========================================

const inventory = {};

function addProduct(p) {
inventory[p.id] = p;
}

function removeProduct(id) {
delete inventory[id];
}

function listProducts() {
return Object.values(inventory);
}

// Create two additional products
const product4 = {
id: 3,
name: "School Bag",
priceCents: 250000,
inStock: true,
tags: ["school", "bags"],
dimensions: {
width: 30,
height: 40,
unit: "cm",
},
};

const product5 = {
id: 4,
name: "Pencil",
priceCents: 2000,
inStock: true,
tags: ["stationery", "writing"],
dimensions: {
width: 1,
height: 18,
unit: "cm",
},
};

// Add three products
addProduct(product);
addProduct(product4);
addProduct(product5);

console.log("\nTASK 4: INVENTORY");

console.log("All product IDs:", Object.keys(inventory));
console.log("All product values:", Object.values(inventory));
console.log("All inventory entries:", Object.entries(inventory));

// Remove one product
removeProduct(3);

console.log("Remaining products:", listProducts());
console.log("Remaining product count:", listProducts().length);

// ==========================================
// STRETCH GOAL 1: CALCULATE INVENTORY TOTAL
// ==========================================

// Quantity is optional; products without it count as 1.
function calculateTotal(inventory) {
return Object.values(inventory).reduce((total, item) => {
const quantity = item.quantity ?? 1;
return total + item.priceCents * quantity;
}, 0);
}

console.log(
"\nInventory total: KSh",
calculateTotal(inventory) / 100
);

// ==========================================
// STRETCH GOAL 2: COMPUTED PROPERTY NAMES
// ==========================================

const key = "name";
const obj = {
[key]: "Notebook",
};

console.log("\nComputed property:", obj);

// ==========================================
// STRETCH GOAL 3: OBJECT FREEZE
// ==========================================

const frozenProduct = Object.freeze({
id: 10,
name: "Ruler",
});

console.log("\nFrozen product:", frozenProduct);

try {
frozenProduct.name = "Eraser";
} catch (error) {
console.log("Mutation error:", error.message);
}

console.log("Frozen product after attempted change:", frozenProduct);
