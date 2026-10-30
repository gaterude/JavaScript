# Week 5 Day 1 AI Audit

## What I worked on

I created product objects, accessed properties using different techniques, copied objects using the spread operator, destructured objects, and built a simple inventory system.

## AI assistance

I used ChatGPT to help explain the implementation, understand shallow versus deep copying, and review the inventory operations.

## What I learned

* Objects store related information as properties and methods.
* Dot and bracket notation access object properties.
* Spread creates a shallow copy rather than a deep copy.
* Destructuring extracts values from objects.
* Object.keys(), Object.values(), and Object.entries() help work with object data.

## Code review decisions

1. Accepted: Deep cloning is necessary when nested arrays or objects must be independent.
2. Accepted: Using Object.values() makes listing inventory products straightforward.
3. Accepted: Optional chaining and nullish coalescing help handle missing values safely.

## Testing

I ran the JavaScript file using Node.js and checked the object operations, copying behaviour, destructuring, inventory management, and optional stretch goals.

## Reflection

I learned how JavaScript objects can represent real-world data and how to manipulate collections of objects.
