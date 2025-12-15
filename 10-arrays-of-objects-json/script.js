// 1️⃣ Array of Objects Example
const users = [
   { name: "Azmeraw", age: "27", Country: "Ethiopia"},
    {name: "Sara", age: "28", Country: "Kenya"},
    {name: "Jhon", age: "30", Country: "Sudan"},
];
console.log("All Users:");
console.log(users);

// 2️⃣ Accessing Object Properties in Array

console.log("First User:", users[0].name);
console.log("Second User’s Age:", users[1].age);

// 3️⃣ Looping Through Array of Objects

console.log("List of User Names:");
for (let user of users) {
  console.log(user.name);
}
 // 4️⃣ Adding a New Object
 users.push({ name: "Liya", age: 22, country: "Ethiopia" });
 console.log("After Adding Liya:", users);

 // 5️⃣ Convert Array of Objects → JSON String
 const jsonData = JSON.stringify(users);
 console.log("JSON Data:", jsonData);

 // 6️⃣ Convert JSON String → Back to JavaScript Object
 const parsedData = JSON.parse(jsonData);
 console.log("Parsed Back to JS Object:", parsedData);

 // ✅ Mini Project: Product List

 const products = [
  {id: 1, name: "Laptop", price: 40000},
  {id: 2, name: "Phone" , price: 20000},
  {id: 3, name: "Tablet" , price: 25000},

 ];
 console.log("All products:");
 for(let product of products){
  console.log(`${product.name} - ${product.price} Birr`);
 }
 //  Calculate total price

 let total = 0;
 for(let item of products) {
  total += item.price;
 }
 console.log(`Total Price: ${total} Birr`);


//  Convert JavaScript Object → JSON

const user = {
  name: "Azmeraw",
  age: 27,
  country: "Ethiopia"
};

const userJsonData = JSON.stringify(user);
console.log(userJsonData);

// Convert JSON → JavaScript Object

const jsonString = '{"name":"Sara","age":25,"country":"Kenya"}';

const jsObject = JSON.parse(jsonString);
console.log(jsObject.name);

// Practice JSON with Array of Objects

const usersJson = `
[
  {"name": "Azmeraw", "age": 27},
  {"name": "Liya", "age": 22},
  {"name": "Abel", "age": 29}
]
`;

const usersData = JSON.parse(usersJson);

for (let u of usersData) {
  console.log(u.name);
}

const product = [
  { id: 1, name: "Laptop", price: 40000 },
  { id: 2, name: "Phone", price: 20000 }
];

// Save Data as JSON → then Load It Back

const jsonProduct = JSON.stringify(product);
console.log("Saved JSON:", jsonProduct);

const loadedProduct = JSON.parse(jsonProduct);
console.log("Loaded Back:", loadedProduct);

// Create Json file

const jsonStrings = {
  "title": "Telecom Technician",
  "skills": ["Fiber", "MSAN", "GPON"],
  "experience": 4
};

console.log(jsonStrings.title);

// Search in JSON Data

const candidates = [
  { name: "Azmeraw", country: "Ethiopia" },
  { name: "Sara", country: "Kenya" },
  { name: "John", country: "USA" }
];

function findUser(name) {
  return candidates.find(candidate => candidate.name === name);
}

console.log(findUser("Sara"));







