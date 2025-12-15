// 📘 JavaScript Data Types Practice

// 1. String
let name = "Azmeraw";
let country = "Ethiopia";
console.log("My name is " + name + " and I live in " + country);

// 2. Number
let age = 25;
let height = 1.75;
console.log("Age:", age);
console.log("Height in meters:", height);

// 3. Boolean
let isEngineer = true;
let hasCar = false;
console.log("Is Engineer:", isEngineer);
console.log("Has Car:", hasCar);

// 4. Undefined
let favoriteColor;
console.log("Favorite Color:", favoriteColor); // Output: undefined

// 5. Null
let futurePlan = null;
console.log("Future Plan:", futurePlan); // Output: null

// 6. Object
let person = {
  name: "Azmeraw",
  age: 25,
  country: "Ethiopia",
  isEngineer: true
};
console.log("Person Object:", person);

// 7. Array (special kind of object)
let skills = ["HTML", "CSS", "JavaScript"];
console.log("Skills:", skills);

// 8. Type Checking
console.log(typeof name);        // string
console.log(typeof age);         // number
console.log(typeof isEngineer);  // boolean
console.log(typeof favoriteColor); // undefined
console.log(typeof futurePlan);  // object (special case)
console.log(typeof person);      // object
console.log(typeof skills);      // object
