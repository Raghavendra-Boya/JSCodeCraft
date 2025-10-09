/*
What is Variable:
A variable is a named container that stores a value. It allows you to reference and manipulate that value throughout your code. Variables can hold different types of data, such as numbers, strings, booleans, objects, and more.

Syntax:
VarType variableName = value;

Types of Variables:
1. var: The var keyword is used to declare a variable with function scope. Variables declared with var can be re-declared and updated within the same scope.
2. let: The let keyword is used to declare a variable with block scope. Variables declared with let can be updated but not re-declared within the same scope.
3. const: The const keyword is used to declare a variable with block scope that cannot be updated or re-declared. The value assigned to a const variable must be initialized at the time of declaration.

Declaration:
VarType variableName = value;//declaration and assign
var a;//declaration
a=10;//assign


Var:
1. functional / global scope
2. can be re-declared and updated
3. re-assign and re-declare
4. can be accessed before declaration (undefined)
5. var can be hoisted

let:
1. block scope
2. can be updated but not re-declared
3. re-assign
4. cannot be accessed before declaration (ReferenceError)
5. let cannot be hoisted
const:
1. block scope
2. cannot be updated or re-declared
3. must be initialized at the time of declaration
4. cannot be accessed before declaration (ReferenceError)
5. const cannot be hoisted


*/

var a = 10;//declaration and assign
console.log(a);
a = 20;//re-assign
console.log(a);
var a = 30;//re-declare and re-assign
console.log(a);


{
    var b = 40;//re-declare and re-assign
    console.log(b);
}
console.log(b);


// console.log(c);
// var c = 100;
// console.log(c);

var c;
console.log(c);
c= 100;
console.log(c);


let greet = "Hello";
console.log(greet);
greet = "Hi";
console.log(greet);

//let greet = "Hey";

{
    let greet2 = "Hey";
    console.log(greet2);
    //let greet2 = "Hola";
    greet2 = "Hola";
    console.log(greet2);
    {
        let greet2 = "Ciao";
    }
}

console.log(greet3);
let greet3="Bonjour";
console.log(grret2);


const pi = 3.14;
console.log(pi);
//pi = 3.14159;
//console.log(pi);
//const pi = 3.14159;

const x ;
x = 50;
console.log(x);