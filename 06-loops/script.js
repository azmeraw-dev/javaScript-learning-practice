// 1.FOR LOOP 
console.log ("for loop: counting 1 to 5");
for (let i = 0; i<5 ; i++){
    console.log("Number:" , i);
}
// 2. WHILE LOOP
console.log("While loop: counting 1 to 3");
let count = 1;
while(count <= 3){
    console.log("Count is:" , count)
    count++;
}


// 3.DO...WHILE LOOP 
console.log("Do...while loop: Runs at least once.");
let num = 1;
do{
    console.log("Number:" , num);
    num++;
}
while(num<=3);

// 4. FOR...OF LOOP
const fruits = [ "apple", "banana" , "mango"];
console.log( "for...of loop through array.");
for (let fruit of fruits) {
  console.log(fruit);
}

// Exercise 
// ✅ 1. Print all even numbers between 1–20
console.log("Even number between 1 to 20:");
for (let i=1; i<=20;i++) {
    if(i%2 === 0)
        console.log(i);
}
// ✅ 2. Multiplication Table (Browser)
let number = prompt("Enter a number to display to display its multiplication table:");
for(let i=0; i<= 10; i++){
    console.log(`${number}*{i} = ${number*i}`);
}
// 4️⃣ Count Vowels in a Word
let word = prompt("Enter a word");
let vowels = 0;
for(let letter of word.toLowerCase()){
    if("aeiou" .includes(letter)) {
        vowels++;
}
}
alert(`The word "${word}" contains ${vowels} vowels.`);

 // 5️⃣ Sum of Even Numbers (1–100)
 let sum = 0;
 for(let i = 1;i<= 100; i++){
    if(i % 2 === 0){
        sum += i;
    }
 }
 console.log("The sum of all even numbers from 1 to 100 is:", sum);

// 6️⃣ Reverse a Word

 word = prompt("Enter a word to reverse:");
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversed += word[i];
}

alert(`The reverse of "${word}" is "${reversed}"`);


