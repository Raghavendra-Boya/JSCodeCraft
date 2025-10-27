//1. if -else

//SYntax
/*

if(condition){
    //code 
}
    else{
    //code
    }

    use cases:
    1. login status
    2. produv availability
    3. payments
    4. discount(bases cart amount)
    5. vote eligibility

2. else if ladder

    when we have multiple conditions 

    use cases:
    1. Grading system
    2. Ticket pricing based on the age
    3. discount price based on the purchased price

    syntax:
    if(condition-1){
        //code   
    }
        else if(condition-2){
            //code
        }
        else if(condition-3){
        //code
        }
        else{
        //code
        }


        3. switch case
        when we ant to compare a value with multiple cases

        syntax:
        switch(expression){
            case value-1:
                //code
                break;
            case value-2:
                //code
                break;
            case value-3:
                //code
                break;
            default:
                //code
        }
        use cases:
        1. menu selection
        2. day of the week
        3. role based access
        4. policies/loanes based on the type


        1. Switch expression
        2. Case values
        3. block pof code to be executed
        4. break statement
        5. default statement


*/

// let age = parseInt(prompt("enter your age:"))

// if(age>=18){
//     console.log("eligible for vote");
// }
// else{
//     console.log("not eligible for vote");
// }

// let userName = prompt("enter your user name:")
// let password = prompt("enter your password:")

// if(userName === "admin" && password === "1234"){
//     console.log("logon successful");
// }
// else{
//     console.log("invalid credentials");
// }

let div = document.getElementById("output");

let amount = 1000;
let withdraw = parseInt(prompt("enter amount"))

if(amount>=withdraw){
    amount = amount-withdraw;
  div.innerText = `withdraw amount:  ${withdraw} remaining balance :  ${amount}`
}
else{
    div.innerText = "insufficient balance"
}

let classes = "11st classes"
if(classes == "1st classes"){
    console.log("250");
}
else if(classes == "2nd classes"){
    console.log("150");
}
else if(classes == "3rd classes"){
    console.log("50");
}
else{
    console.log("free for child");
}

/**
let x = 0;
if (x) {
  console.log("hello");
} else {
  console.log("hi");
}
 
let x = 10;
if (x = 20) {
  console.log("hello");
} else {
  console.log("hi");
}

let x = 10;
if (x == 20) {
  console.log("hello");
} else {
  console.log("hi");
}

let b = false;
if (b = true) {
  console.log("hello");
} else {
  console.log("hi");
}

if (false)
  console.log("hello");
  console.log("hi");
  console.log("hi");


  if(true){
  let a = 20;
  }
  let a = 20;
 */

 

  let day = 2;
  switch(2){
    default:
        console.log("invalid day");
        break;
    case 1:
        console.log("monday");
        break;
    case 1+1:
        console.log("tuesday");

        break;
    case 3:
        console.log("wednesday");
        break;
    
  }

  let item = "starters";
  switch(item){
    case "starters":
        switch("chicken65"){
            case "chicken65":
                console.log("chicken65 selected");
                break;
            case "veg soup":
                console.log("veg soup selected");
                break;
        }
        break;
    case "main course":
        switch("biryani"){
            case "biryani":
                console.log("biryani selected");
                break;
            case "fried rice":
                console.log("fried rice selected");
                break;
        }
        break;
        case "dessert":
        switch("icecream"){
            case "icecream":
                console.log("icecream selected");
                break;
            case "gulab jamun":
                console.log("gulab jamun selected");
                break;
        }
        break;
    default:
        console.log("invalid item");
  }


  
  // div.innerText = "Hello i am from JS file";