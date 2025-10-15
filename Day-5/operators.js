/*
WHat is Operator:
An operator is a special symbol or keyword that performs a specific operation on one or more operands (values or variables) and produces a result. Operators are used in programming languages to manipulate data, perform calculations, and make decisions.

they will allow us to manipulate the data, comparisions, make logical decision

Why do we use operators:
1. to perform calculations
2. make comaparisons(true or false)
3. logical decision making(AND, OR, NOT)
4. assign values to variables(=, +=, -=, etc)

Types of Operators:
1. Arithmetic Operators: Used to perform mathematical operations like addition, subtraction, multiplication, division, and modulus.
   Examples: +, -, *, /, %
2. Assignment Operators: Used to assign values to variables.
    Examples: =, +=, -=, *=, /=, %=




var add = 10 + 20;//addition operator

*/

let a = 10;
let b = 20;

let add = a + b;//addition operator
console.log("Addition: ", add);

let sub = b - a;//subtraction operator
console.log("Subtraction: ", sub);
let mul = a * b;//multiplication operator
console.log("Multiplication: ", mul);
let div = b / a;//division operator
console.log("Division: ", div);

let mod = b % a;//modulus operator
console.log("Modulus: ", mod);

let c = 100;
c= c+50;
console.log(c);//150
c += 50;//c = c + 50;

c -= 30;//c = c - 30;
console.log(c);
c *= 2;//c = c * 2;
console.log(c);
c /= 4;
console.log(c);
c %= 7;
console.log(c);

//3. Comparison Operators: Used to compare two values and return a boolean result (true or false).
// Examples: ==, ===, !=, !==, >, <, >=, <=

let x = 10;//number
let y = '10';//string
//== equality operator (value)
//=== strict equality operator (value and type)
//!= not equal operator (value)
//!== strict not equal operator (value and type)


console.log(x == y);
console.log(x === y);
console.log(x != y);//(10 != 10) false
console.log(x !== y);//(10 !== '10') true

console.log(x > 5);//true
console.log(x<5);//false
console.log(x>=10);
console.log(x<=10);

// 4. logical operators: used to combine multiple condition
//&& : it will returns true if both conditions gets true, if any condition gets false it will returns the false
// || : it will returns the true if any one condition gets true, if both conditions gets fals ethen it will returnds the false
// ! : it will returns true as false and false as a true





