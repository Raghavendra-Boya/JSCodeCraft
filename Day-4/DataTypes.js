/*
WHat is Dat type:
data tyoe defines the type of value a variable can hold. It determines the kind of data that can be stored and manipulated within a program. Different programming languages have different data types, but some common ones include:

1. Primitive Data Types:
    - Number: Represents numeric values, both integers and floating-point numbers.
        Real time use case:
        1. Age: Storing a person's age as a number.
        2. Price: Representing the price of a product in an e-commerce application.
        3. Temperature: Storing temperature values in weather applications.
    - String: Represents a sequence of characters, such as text.
        Real time use case:
        1. Name: Storing a person's name.
        2. Address: Representing a user's address in a form.
        3. Email: Storing email addresses for user accounts.
    - Boolean: Represents a logical value, either true or false.
        Real time use case:
        1. IsLoggedIn: Indicating whether a user is logged in or not.
        2. HasSubscription: Representing whether a user has an active subscription.
        3. IsAdmin: Indicating if a user has administrative privileges.
    - Null: Represents the absence of a value or a non-existent object.
        Real time use case:
        1. Optional Fields: Indicating that a field in a form is optional and may not have a value.
        2. Database Records: Representing missing or unknown values in a database.
        3. API Responses: Indicating that a particular data point is not available in an API response.
    - Undefined: Represents a variable that has been declared but not assigned a value.
        Real time use case:
        1. Uninitialized Variables: Indicating that a variable has been declared but not yet assigned a value.
        2. Function Parameters: Representing optional parameters in functions that may not be provided.
        3. Missing Object Properties: Indicating that a property does not exist on an object.
    - Bigint: Represents integers with arbitrary precision, allowing for very large numbers.
        Real time use case:
        1. Cryptography: Handling large integers in cryptographic algorithms.
        2. Financial Calculations: Performing calculations with very large monetary values.
        3. Scientific Computations: Dealing with large numbers in scientific simulations.
    2. Non-Primitive Data Types:
     we can able to store multiple values in a single variable and able to change the value(mutable)
    
    - Object: Represents a collection of key-value pairs, allowing for the storage of complex data structures.
        Real time use case:
        1. User Profiles: Storing user information such as name, age, and email in an object.
        2. Product Details: Representing product information in an e-commerce application.

        //syntax:
        varType ObjectName = {
            key1: value1,
            key2: value2,
            key3: value3
            };
    - Array: Represents an ordered list of values, allowing for the storage of multiple items in a single variable.
    

*/

// let userName;
// console.log(userName);//undefined
// userName = null;
// console.log(userName);//null
// userName = "John";
// console.log(userName);//John

let number = 42; // Number
console.log(number);
number = 50;
console.log(number);
console.log(typeof number);

let name = "Alice"; // String
console.log(name);
console.log(typeof name);

let isStudent = true; // Boolean
console.log(isStudent);
console.log(typeof isStudent);

let emptyValue = null; // Null
console.log(emptyValue);
console.log(typeof emptyValue); // Note: typeof null returns "object" due to a historical bug in JavaScript

let notAssigned; // Undefined
console.log(notAssigned);
console.log(typeof notAssigned);

let bigNumber = 9007199254741991n; // BigInt\
console.log(bigNumber);
console.log(typeof bigNumber);  

let person = { // Object
    name: "Bob",
    age: 25,
    isEmployed: false
};

console.log(person);
console.log(typeof person);

// singlr value access from object
console.log(person.name);
console.log(person.age);
console.log(person['isEmployed']);

person.age = 26; // update the value
console.log(person.age);


let numbers = [1, 2, 3, 4, 5,true,"string",{name:"nagarjuna",age:24},[100,200,300]]; // Array
console.log(numbers);
console.log(typeof numbers); // Note: typeof array returns "object"
// we can access single value from array using index, the index starts from 0 and lenght start from 1
console.log(numbers[7].name);
console.log(numbers[8]);


num = 40;
console.log(typeof num);
console.log(typeof null);
