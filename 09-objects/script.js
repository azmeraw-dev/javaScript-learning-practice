// 1. Creating an Object

let person = {
    name:"Azmeraw",
    age:"27",
    profession:"Engineer",
    greet:function() {
        console.log(`Hello, my name is ${this.name}`);
        console.log(`my profession is ${this.profession}`);
    }
};

// ✅ 2. Accessing and Modifying Properties
console.log("Name:" , person.name);
person.age = "28";
console.log("Updated Age:", person.age);

 // ✅ 3.Adding a New Property

 person.country = "Ethiopia";
 console.log("Country:" , person.country);

 //  ✅ 4. Object Method Example

 let calculator = {
    add: function(a,b) {
            return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};
console.log("add:" ,calculator.add(10,5));
console.log("subtract:" , calculator.subtract(10,5));

// ✅ 5. Looping Through Object Keys
let car = {
    brand: "Toyota",
    model: "crolla",
    year: 2020,
};
for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

    
 