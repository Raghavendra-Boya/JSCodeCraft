//for loop:
/*
for loop:
when we know the number of iterations in advance
syntax:
for(initialization; condition; increment/decrement){
    //code to be executed
}


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