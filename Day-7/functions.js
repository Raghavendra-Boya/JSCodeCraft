/**
 What is Function:
    A function is a block of code designed to perform a particular task. It is a reusable piece of code that can be called multiple times throughout a program. Functions help in organizing code, improving readability, and reducing redundancy.  

    Syntax:
    function functionName(){
        //code to be executed
    }

    //function call
    functionName();
 */

    document.write(`Step-1: add oil<br>`);
    document.write(`Step--2: add spices<br>`);
    document.write(`Step-3: add potato<br>`);
    document.write(`Step-4: cook for 20 min<br>`);


    document.write(`Step-1: add oil<br>`);
    document.write(`Step--2: add spices<br>`);
    document.write(`Step-3: add panner<br>`);
    document.write(`Step-4: cook for 20 min`);

    document.write(`Step-1: add oil<br> Step--2: add spices<br> Step-3: add potato<br> Step-4: cook for 20 min<br>`);
    document.write(`Step-1: add oil<br> Step--2: add spices<br> Step-3: add panner<br> Step-4: cook for 20 min`);

    function reciepe(){
        document.write(`<br>Step-1: add oil<br>`);
        document.write(`Step--2: add spices<br>`);
        document.write(`Step-3: add potato<br>`);
        document.write(`Step-4: cook for 20 min<br>`);
    }
    reciepe();
    reciepe();

    //2. function with parameter
     function reciepe(ingredent){
        document.write(`<br>Step-1: add oil<br>`);
        document.write(`Step--2: add spices<br>`);
        document.write(`Step-3: add ${ingredent}<br>`);
        document.write(`Step-4: cook for 20 min<br>`);
    }
    reciepe("panner");
    reciepe("chicken");
    reciepe("veg");

    //3. function with return type
    function sum(a, b){
        return a + b;
    }
    console.log(sum(10, 20));;
    let result = sum(30, 40);
    console.log(result);
    //4. function expression//variable functiom
    let multiply = function(x, y){
        return x * y;
    }
    console.log(multiply(5, 6));
    //5 anonymous function  
    setTimeout(function(){
        console.log("hello after 3 seconds");
    }, 3000);


    let variable = function add(a,b){
        console.log(a+b);
    }

    variable(10,20);
    add(30,40); //error: add is not defined

    console.log("Hello World");

    function outer(num,name,array){
        console.log("helllo from outer function");
    }
    outer(10,"john", [1,2,3]);
    outer("john", [1,2,3],10);
