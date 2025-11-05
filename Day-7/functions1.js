/*
1. call back function:
passing function as argument to the another function

Syntax:
    function functionName(callBack){
        //code to be executed
        callBack();
    }

    function(){
        //code to be executed
    }
functionName();
Use Cases:
1. Event handling
2. Asynchronous programming
3. Array methods (map, filter, reduce)
4. Timers (setTimeout, setInterval)

2. self-invoking function:
A self-invoking function is a function that is executed immediately after it is defined. It is also known as an Immediately Invoked Function Expression (IIFE).
Syntax:
    (function(){
        //code to be executed
    })();

Use Cases:
1. Data privacy
2. Avoiding global scope pollution
3. Module pattern

3. recursive Function:
A recursive function is a function that calls itself in order to solve a problem. It typically has a base case to stop the recursion and a recursive case to continue the recursion.
Syntax:
    function functionName(parameters){

        if(base case){
            return value;
        }else{
            return functionName(modified parameters);
        }
            funcionName(arguments);
    }
        dunctionName(arguments);
*/

function payment(callback){
    console.log("Payment is being processed");
    callback();
}
function orderPlaced(){
    console.log("Order has been placed successfully");
}
payment(function(){
    console.log("Order has been placed successfully");
});

(function(){
    console.log("This is a self-invoking function");

})();

function showStep(step){
    if(step > 3) return;
    console.log("Step " + step);
    showStep(step + 1);
}
showStep(1);

//lexical scoping
function outer(){
    var outerVar = "I am from outer function";
    function inner(){
        console.log(outerVar);
    }
    inner();    
}
outer();
//console.log(outerVar); //error: outerVar is not defined