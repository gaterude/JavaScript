// //  name (string)
// const Name = "Gaterude ";

// // Age (number)
// const age = 18;

// //  JS comfort level (boolean)
// const isComfortableWithJS = true;

// //  Let placeholder (using null)
// let futureGoal = null;
// // Using null instead of undefined because I intentionally want to represent "empty but assigned" value

// //  Array of favourite languages
// const favoriteLanguages = ["JavaScript", "CSS", "HTML"];

// // Object with city and country
// const location = {
//   city: "Nakuru",
//   country: "Kenya"
// };

// // sentence
// const sentence = `My name is ${fullName} and I live in ${location.city}.`;
// console.log(sentence);

// //  typeof checks
// console.log(typeof Name); // string
// console.log(typeof age); // number
// console.log(typeof isComfortableWithJS); // boolean

// //  Reassign let (before and after)
// console.log("Before reassignment:", futureGoal);

// futureGoal = "Become a full-stack developer";

// console.log("After reassignment:", futureGoal);

// //  Intentional const reassignment (will cause error)
// // fullName = "Another Name"; 
// // Commented out because const cannot be reassigned

// console.log(typeof null);

function buildProfile(name, age, city, languages) {
  return `Name: ${name}
Age: ${age}
City: ${city}
Languages: ${languages.join(", ")}`;
}

console.log(buildProfile("Wanjiru", 22, "Nairobi", ["English", "Kiswahili", "JavaScript"]));

// =============================
// Drill 1: Dynamic Typing
// =============================

let value = 4546;
console.log(typeof value); // number

value = "Fullstack Developer";
console.log(typeof value); // string

value = true;
console.log(typeof value); // boolean

// Observation: JavaScript is dynamically typed because the same variable can store different data types.

// =============================
// Drill 2: Concatenation vs Template Literals
// =============================

const firstName = "Gartrude";
const lastName = "Michira";

// Using +
const fullName1 = firstName + " " + lastName;
console.log(fullName1);

// Using template literals
const fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

// Observation: Template literals are easier to read because they don't require '+' signs or manually adding spaces.

// =============================
// Drill 3: Object with a Function
// =============================

const user = {
  name: "Gartrude",

  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

person.greet();

// Observation: Objects can store both data (properties) and functions (methods), which are called using dot notation.