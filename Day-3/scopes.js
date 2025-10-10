/*
What is Scope:
Scope determines the accessibility or visibility of variables and functions in different parts of your code. In JavaScript, there are two main types of scope: global scope and local scope (which includes function scope and block scope).
Types of Scope:
1. Global Scope: Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the code.
2. 

*/


var a = 10;
let b = 20;
const c = 30;
console.log(a,b,c);
function test(){
    /**
     * var a;//undefined
     * let b;//ReferenceError
     * const c;//ReferenceError
     * clg(a);
     * clg(b);
     * clg(c);
     * a= 100;
     * b= 200;
     * c= 300;
     * clg(a,b,c);
     */
    console.log(a);
    console.log(b);
    console.log(c);
    var a = 100;
    let b = 200;
    const c = 300;
    console.log(a,b,c);
}
test();

const name = "John"; // Global scope

function greet() {
    console.log("Hello, " + name); // Accessing global variable
}
greet(); // Output: Hello, John
{
    console.log(name);
}
console.log(name);


function student(){
    const studentName = "Alice"; // Local scope
    console.log("Student Name: " + studentName); // Accessing local variable
    var age = 20;   
    console.log("Student Age: " + age);
    let course = "Math";
    console.log("Student Course: " + course);
}

student();
// console.log(studentName); // Error: studentName is not defined
// console.log(age); // Error: age is not defined
// console.log(course); // Error: course is not defined

{
    let city = "New York"; // Block scope
    console.log("City: " + city); // Accessing block-scoped variable
    const country = "USA";
    console.log("Country: " + country);
    var pin = 110001;
    console.log("Pin: " + pin);
}
console.log(pin);






function outerFunction() {
    let x = 15;
    {
        let x = 20;
        console.log(x);
    }
    console.log(x);
    // let x = 5;
    // console.log(x);
}outerFunction();
// console.log(x); // Error: x is not defined



var title = "JavaScript";
function displayTitle() {
    let title = "Learn JavaScript";
    console.log(title);
    {
        let title = "JavaScript Basics";
        console.log(title);
    }
    function innerFunction() {
        console.log(title);
    }
    innerFunction();
}
displayTitle();
console.log(title);
    

var company = "AIT";
let department = "Development";
console.log(company,department);

function mainOffice(){
    // var company;//undefined
    // let department;
    // console.log(......);
    // company = "goodlre";
    // department = "HR";
    // console.log(company,department);
    var company = "Google";
    let department = "HR";
    console.log(company,department);
    {
        var manager = "John";
        let floor = "5th floor";
        const team = "A-Team";
        console.log(company,department,manager,floor,team);
        {
            let department = "Finance";
            console.log(company,department,manager,floor,team);//googlr,finance,john,5th floor,a-team
        }
    }
    console.log(company,department,manager);
    function subOfiice(){
        console.log(company,department,manager);
        var company = "Microsoft";
        let department = "Sales";
        console.log(company,department,manager);
    }subOfiice();
    }
mainOffice();





/*

var a;//undefined
let b;
const c;

a= 10;
b= 20;
c= 30;

clg(a,b,c);
*/
