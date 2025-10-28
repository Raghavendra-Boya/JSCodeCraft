//for loop:
/*
for loop:
when we know the number of iterations in advance
syntax:
for(initialization; condition; increment/decrement){
    //code to be executed
}

WHile:

syntax:
while(condition){
    //code to be executed   
    }
    uese cases:
    1. Ligin attempts
    2. reading data until the end of file
    3. fetching data from the database until all records are fetched

    do while:
    syntax:
    do{
    //block of code
    }while(condition);
    use cases:
    1. menu driven programs
    2. input validation


*/

for(let i=1; i<=5; i++){
    console.log("hello world", i);
}

let day = document.getElementById("day");
for(let i=1; i<=31; i++){
    day.innerHTML += `<option value=${i}>${i}</option>`;
}

let fruits = ["apple", "banana", "grapes", "mango"];
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

let output = document.getElementById("output");
output.innerHTML = `<h2>Fruits List</h2>`;

let i = 1;


while(i<=5){
    console.log("while loop iteration:", i);
    i++;
}

let correctPin = 1234;
let enteredPin = "";
// while(enteredPin != correctPin){
//     enteredPin = parseInt(prompt("enter your pin:"));
//     if(enteredPin != correctPin){
//         console.log("incorrect pin, try again");
//     }
//     else{
//         console.log("pin accepted, welcome!");
//     }
// }

let attempts = 0;
do{
    document.write("Welcome to X Bank");
    enteredPin = parseInt(prompt("enter your pin:"));
    attempts++;
}while(enteredPin != correctPin && attempts<3);
if(enteredPin != correctPin){
    document.write("account locked, too many incorrect attempts");
}
else{
    document.write("pin accepted, welcome!");
}
/**
 * let i = 0;
 for(console.log("Initialization");i<=5;i++){
    console.log("hello world", i);
    }



   for (console.log("Start"); i<=5; console.log("End")) {
  console.log("Inside Loop");
}

for (let i = 1; ; i++) {
  if (i > 3){
  break;
  } 
  console.log(i);
}

let i = 1;
for (; i <= 3; i++) {
  console.log(i);
}

for (let i = 1; i <= 3; ) {
  console.log(i);
  i++;
}

for (;;) {
  console.log("Hello");
  break;
}

for (let i = 0, j = 5; i < 3; i++, j--) {
  console.log(i, j);
}

for (var i = 1; i <= 2; i++) {
  for (var i = 1; i <= 2; i++) {
    console.log("Inner:", i);
  }
}

for (let i = 1; i <= 5; i++) {
  console.log("i =", i);
  if (i === 1) break;
}

for (let i = 5; i; i--) {
  console.log(i);
}

for (let i = 0; i++ < 3; ) {
  console.log(i);
}





 */