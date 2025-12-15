// 📘 JavaScript Operators Practice

// 1. Arithmetic Operators
let a = 10;
let b = 3;

console.log("Addition:", a + b);      // 13
console.log("Subtraction:", a - b);   // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);      // 3.333...
console.log("Remainder:", a % b);     // 1
console.log("Exponentiation:", a ** b); // 1000

// 2. Assignment Operators
let x = 10;
x += 5; // x = x + 5
x -= 3; // x = x - 3
x *= 2; // x = x * 2
x /= 4; // x = x / 4
console.log("Final value of x:", x);

// 3. Comparison Operators
let num1 = 5;
let num2 = "5";

console.log(num1 == num2);  // true  (checks only value)
console.log(num1 === num2); // false (checks value + type)
console.log(num1 != num2);  // false
console.log(num1 !== num2); // true
console.log(num1 > 3);      // true
console.log(num1 <= 5);     // true

// 4. Logical Operators
let isEngineer = true;
let isMarried = false;

console.log(isEngineer && isMarried); // false (AND)
console.log(isEngineer || isMarried); // true  (OR)
console.log(!isEngineer);             // false (NOT)

// 5. String Operators
let firstName = "Azmeraw";
let lastName = "Bitew";
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// 6. Combining Operators Example
let score = 70;
let passed = score >= 50 && score <= 100;
console.log("Did the student pass?", passed);
