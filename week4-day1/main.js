// 1. Square
function square(n) {
  return n * n;
}
console.log(square(4));
console.log(square(7));

// 2. Greet
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alex"));
console.log(greet("Mary"));

// 3. Is Even
function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));

// 4. Maximum
function max(a, b) {
  return a > b ? a : b;
}
console.log(max(10, 5));
console.log(max(3, 8));

// 5. Sum
function sum(arr) {
  let total = 0;
  for (const n of arr) {
    total += n;
  }
  return total;
}
console.log(sum([1, 2, 3]));
console.log(sum([10, 20, 30]));

// 6. First Word
function firstWord(sentence) {
  return sentence.trim().split(/\s+/)[0] || "";
}
console.log(firstWord("JavaScript is fun"));
console.log(firstWord("Hello world"));

// 7. Reverse String
function reverseString(s) {
  return s.split("").reverse().join("");
}
console.log(reverseString("hello"));
console.log(reverseString("world"));

// 8. Count Vowels
function countVowels(s) {
  const matches = s.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
console.log(countVowels("hello"));
console.log(countVowels("JavaScript"));

// 9. Range
function range(start, end) {
  const numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
}
console.log(range(1, 5));
console.log(range(3, 7));

// 10. Clamp
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
console.log(clamp(15, 0, 10));
console.log(clamp(-5, 0, 10));

// 1. Square — Declaration
function squareDecl(n) {
  return n * n;
}

// Square — Expression
const squareExpr = function (n) {
  return n * n;
};

// Declarations are hoisted, but function expressions assigned to const
// cannot be used before the assignment is executed.


// 2. Greet — Declaration
function greetDecl(name) {
  return `Hello, ${name}!`;
}

// Greet — Expression
const greetExpr = function (name) {
  return `Hello, ${name}!`;
};

// Function expressions can be assigned to variables and passed as values.


// 3. Is Even — Declaration
function isEvenDecl(n) {
  return n % 2 === 0;
}

// Is Even — Expression
const isEvenExpr = function (n) {
  return n % 2 === 0;
};

// Both forms work the same when called after their definitions.


// Test the three pairs
console.log(squareDecl(5), squareExpr(5));
console.log(greetDecl("Alex"), greetExpr("Alex"));
console.log(isEvenDecl(4), isEvenExpr(4));
// Task 3: DOM Manipulation

const title = document.getElementById("title");
const message = document.getElementById("message");
const shoutButton = document.getElementById("btn-shout");
const resetButton = document.getElementById("btn-reset");
const colorButton = document.getElementById("btn-color");

shoutButton.addEventListener("click", function () {
  message.textContent = "HELLO WORLD";
});

resetButton.addEventListener("click", function () {
  message.textContent = "Welcome";
});

colorButton.addEventListener("click", function () {
  title.classList.toggle("highlight");
});
// Task 4: querySelectorAll and forEach

const actions = document.querySelectorAll(".action");

actions.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    console.log(`Action button ${i + 1} clicked`);
  });
});
// Task 5: Count vowels and consonants
function countLetters(s) {
  const vowels = s.match(/[aeiou]/gi) || [];
  const consonants = s.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];

  return {
    vowels: vowels.length,
    consonants: consonants.length
  };
}

console.log(countLetters("Hello World"));