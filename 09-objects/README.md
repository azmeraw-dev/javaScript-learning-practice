# 🧠 JavaScript Objects (Short Notes)

### 📘 Overview
Objects in JavaScript store data as **key–value pairs** and group related information together.

---

### 🔑 Key Points

- **Create an Object**

  let person = { name: "Azmeraw", age: 27, job: "Engineer" };

  - **Access Properties**

console.log(person.name);      // Dot notation
console.log(person["age"]);    // Bracket notation

- **Add or Update**

person.country = "Ethiopia";
person.age = 28;

- **Methods (Functions inside Objects)**

person.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

- **Loop Through Object**

for (let key in person) {
  console.log(key, person[key]);
}

