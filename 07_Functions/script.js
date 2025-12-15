// 1️⃣ Basic Function
function great () {
    console.log("Hello, Welcome to JavaScript functions!");
}
great();
// 2️⃣ Function with Parameters
function add (a,b){
    console.log("sum:" , a+b);
}
add(5,3);
// 3️⃣ Function with Return Value
function Multiply(x,y){
return x*y;
}
let result = Multiply(5,3);
console.log("Multiplication result:", result);
// 4️⃣ Function Expression
const substract = function(a,b){
    return a-b;
};
console.log("substraction result:" , substract(10,4));
// 5️⃣ Arrow Function
const divide = (a,b) => a/b;
console.log("Divission result:" , divide(20,5));

// 6️⃣ Function Scope Example

let globalVar = "I'm global";
function showScope(){
    let localVar = "I'm local";
    console.log(globalVar);
    console.log(localVar);
}
showScope();
console.log(globalVar);


 // 🧩 Exercises
 // ✅ 1. Function that Squares a Number

 function square(num) {
    return num * num;
}

console.log(square(5)); 
console.log(square(9)); 

// ✅ 2. Function that Greets a User by Name
function greetUser(name) {
    console.log(`Hello, ${name}! Welcome to JavaScript.`);
}

greetUser("Azmeraw"); 

// ✅ 3. Function that Converts Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(0));   
console.log(celsiusToFahrenheit(25)); 

function maxNumber(a,b) {
    if(a>b){
        return a;
     } else {
            return b;
        }
    }
console.log(maxNumber(10,4));
console.log(maxNumber(10,17));

// Simple Calculator Using Functions

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divideNumbers(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Cannot divide by zero";
  }
}

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");


if (operator === "+") result = add(num1, num2);
else if (operator === "-") result = subtract(num1, num2);
else if (operator === "*") result = multiply(num1, num2);
else if (operator === "/") result = divideNumbers(num1, num2);
else result = "Invalid operator!";

alert(`Result: ${result}`);










