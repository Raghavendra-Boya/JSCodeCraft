/*
Array Method:
1. push(parameters):--->add elements at the end of an array
    use case: add an item in to the cart
2. pop()---->removes the last element
    use case: remove the last added item
3. shift()--->removes the fisrt element of an array
    use case:

4. unshift()--->add elements to the start of an array
    use case: Notification

5. concat()--->combine two or more arrays and returnd singlr array

use case: combine product list from diffrent categories

6. indexOf():---->find sthe fisrt occurence of element index
7. lastIndexOf():---->find the last occurance
8. includes():--->checks whether an rray contains specific value

9. join()--->converts all array elements into a single string, seperate by a simbol
10. reverse()--->reverse the order of an array
11. sort()
12. slice()
13. spilce()---->






Syntax:
arrayName.methodName();



*/

let array = [1,2,3,1,4,5,1]
array.push(6,7,8);
console.log(array);

array.pop();
console.log(array);


array.unshift(0)
console.log(array);

array.shift();
console.log(array);

let array1 = [8,9,10,11,12];

let result = array.concat(array1)
console.log(result);

console.log(array.indexOf(1));
console.log(array.lastIndexOf(1));

let paymentMethods = ["upi","card","cash"];
paymentMethods.splice(1,2,)

console.log(paymentMethods);
console.log(paymentMethods.includes("PayPal"));
console.log(paymentMethods.includes("Card"));

console.log(paymentMethods.join(" "));
console.log(paymentMethods.reverse());
console.log(paymentMethods.sort());

console.log(paymentMethods.slice(1,2));
