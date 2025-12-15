// JavaScript Conditionals Practice
// 1️⃣ if statement
let temprature = 30;
if( temprature > 25) {
    console.log("it's a hot day!");
}
//  2️⃣ if...else statement
let age = 17;

if (age>=18){
    console.log("you can vote.");
}
else{
    console.log("You are too young to vote.");
}

// 3️⃣ if...else if...else ladder
let score = 82;
if (score >= 90){
    console.log("Grade: A");
}
else if( score>= 75) {
    console.log("Grade: B");
}
else if(score >= 60){
    console.log("Grade: C")
}
else{
    console.log("Fail");
}
// 4️⃣ Ternary operator
let number = 10;
let result = ( number%2 === 0) ?  "Even number" : "Odd number";
console.log( result);
// 5️⃣ switch statement
let day = "saturday";
switch(day) {
    case "Monday":
    console.log("Start of the week!");
    break;
    case "Friday":
    console.log("Weekend is near!");
    break;
    case "saturday":
    case "sunday":
    console.log("It's weekend!");
    break;
    default:
    console.log("just another day");
}



