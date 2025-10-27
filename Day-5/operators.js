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

console.log(10>15 && 30<=12);//(false && false)---> flase
console.log(10>5 && 10<5);//(true && false)--->flase
console.log(10>5 && 20<30);//true


console.log(10>15 || 30<=12);//false
console.log(10>5 || 10<5);//true
console.log(10>5 || 20<30);//true

console.log(!(10>15 || 30<=12));//true
console.log(!(10>5 || 10<5));//false
console.log(!(10>5 || 20<30));//false


console.log(true && false || true && !false);//(false || true && !false)---->(true && !flase)--->(true && true)--->true


//5. ternary operator:
// it is a short hand form of a if-else

//condition ? expressionIfTrue : expressionIfFalse

let marks = 75;

let result = (marks >=35) ? "Pass" : "Fail";
console.log(result);//pass


let a1 = 20;
let b1 = 5;
let result1 = a1>b1 ? a1<15 ? "Between 5-15" : "Above 15" : "Below 15";
console.log(result1);//between 5-15

//unary Operator:
//+,-,++,--,typeof
//+--->converts to number
//- --->nagtes the number
//++ (incremnet)--->two types
    //post Increament(value++)--->it will prints the value then late it increases the value
    //pre increment(++value)--->first it will increment the value late it will prints the value
//--(decreament)--->two types 
    //post decrement---->it will prints the value then late it decreases the value
    //pre decrement--->first it will decrreases  the value late it will prints the value\

console.log("5");
console.log(+"5");
console.log(true);
console.log(-true)

console.log(a1++);//20----a1-->21
console.log(a1);//21
console.log(++a1);//22
console.log(a1++);//22---->23
console.log(++a1);//24

a1=24

console.log(--a1);//23
console.log(a1);//23
console.log(a1--);//23
console.log(a1);//22
console.log(a1++);//22--->23
console.log(--a1);//22


console.log("5"-"2"+"3");//523//33-->


//Type COnversion

//type conversion means changing one data type to onother data type(number-->string, string to number, number to boolean, boolean to string)

//two types of conversion

//1. implicit type conversion(type coercion)


console.log("5"-"2");//string - string // 5 - 2 // 3
console.log(5+"2");//52
//number + number --->add
//number + String --->concatinate --->String

let productPrice = parseInt(prompt("enter product Price:"))//200
console.log(productPrice);
console.log(typeof productPrice);
let quantity = parseInt(prompt("enter quantity"))//3
let totalAmount = productPrice + quantity;//200+3-->2003
console.log(totalAmount);


console.log("5"+"2"-"3");// //52-"3"//52-3//49
console.log("10"-"5"+2+"1");//521//71
//5+2-->7+"1"-->"7"+"1"-->"71"

console.log("10"-true+false+"2");//92
//10-1//9+false+"2"//9+0+"2"//9+"2"//"9"+"2"//92

//1.check operator
//2. data type
//3. perfomance

console.log("Hello"-true+false+"2");
//"hello"-true--->Hello-1--->NaN
//Nan+false-->NaN+0--->NaN+"2"--->NaN2

let a2 = 2+3*4/2-1;//2+3*2-1//2+6-1//8-1//7
//Operator precedence((),**,/,*,+,-)
console.log(a2);

let c3 = (2+3)*4 /2**2;//40 //5 // (2+3)*4/4--->(2+3)*1--->5*1--->5
console.log(c3);



