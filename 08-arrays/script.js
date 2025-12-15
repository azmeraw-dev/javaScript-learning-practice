// 1️⃣ Creating an Array
let fruits = [ "banna" ,"apple" ,"mango"];
console.log("fruits:" , fruits);
// 2️⃣ Accessing Elements
console.log("First fruit:" , fruits[0]);
console.log("Second fruit:" ,fruits[1]);

// 3️⃣ Modifying Elements
fruits[2] = "orange";
console.log("After modification:" , fruits);

// 4️⃣ Adding and Removing Elements

fruits.push("kiwi");
fruits.unshift("grape");
console.log("After adding:" , fruits);
fruits.pop();
fruits.shift();
console.log("After removing:" , fruits);

// 5️⃣ Checking Array Length
console.log("Number of fruits:" , fruits.length);

// 6️⃣ Looping Through an Array

console.log("List of fruits:");
for(let fruit of fruits){
    console.log(fruit);
}
//  Checking if an Item Exists
console.log("contains banana?" , fruits.includes("banana"))

// 🧩 Exercises
let foods = ["injera", "pasta", "rice", "pizza", "tibs"];
console.log("favorite food:");
for(let  food of foods){
    console.log(food.toUpperCase());
}
// 🚀 Mini Project: Shopping Cart Total
let prices = [20,15,30,10];
let total = 0;
for(let price of prices){
    total=+price;
}
console.log("Total price:" , total);

// 📝 Mini Project: To-Do List
let todos = [];
todos.push(prompt("Enter your first task:"));
todos.push(prompt("Enter your second task:"));
console.log("Your To-Do List:");
for (let task of todos){
    console.log("-" , task);
}





