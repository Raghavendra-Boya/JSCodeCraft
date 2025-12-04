/*
WHat is EVents:
Events in JS are actions or occurences that happens in the browser or user interface which the JS can respond to.

Why do we use events:
1. To make web pages interactive.
2. form handling
3. Dynamic content updates

whys to apply events:
1. Inline Event Handlers
     Directlt inside the HTML element using the "on" attribute.
     synatx: <element onEvent="JavaScript code">

     advantages:
        1. Simple to implement for small tasks.
        disadvantages:
        1. Mixes HTML and JS, making code harder to maintain.
        2. Limited to one event handler per event per element.

    best for: small projects or simple tasks.
    not best for: large applications or complex interactions.

2. Event properties:
        Assigning a function to an element's event property in JS.
        syntax: element.event = function;
        advantages:
        1. Keeps HTML and JS separate.
        2. Allows multiple event handlers for different events on the same element.
        disadvantages:
        1. Still limited to one handler per event per element.
        best for: moderate complexity tasks.
        not best for: scenarios requiring multiple handlers for the same event.
    
3. addEventListener method:
        Using the addEventListener method to attach event handlers.
        syntax: element.addEventListener("event", function);
        advantages:
        1. Allows multiple event handlers for the same event on the same element.
        2. Provides more control over event propagation and options.
        disadvantages:
        1. Slightly more complex syntax.
        best for: complex applications and interactions.
        not best for: very simple tasks where inline handlers might suffice.

types of EVents:
1. Mouse Events: click, dblclick, mouseover, mouseout, mousemove
2. Keyboard Events: keydown, keyup, keypress
3. Form Events: submit, change, focus, blur
4. Window Events: load, resize, scroll, unload
5. clipboard Events: copy, cut, paste
6. touch Events: touchstart, touchmove, touchend(mobile)






*/


function showAlert(){
    alert("Button Clicked")
}


// document.getElementById("btn").onclick = function(){
//    console.log("Button Clicked from JS")
// }
// document.getElementById("btn").onclick = function(){
//     console.log("Button Double Clicked from JS")
// }


let btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    console.log("Button Clicked from JS")
})

btn.addEventListener("click",function(){
    console.log("Button Double Clicked from JS")
})

document.getElementById("dblCLick").addEventListener("dblclick", function(){
    console.log("Button Double Clicked")
})

btn.addEventListener("mouseover", function(){
    btn.style.backgroundColor = "yellow"
})

btn.addEventListener("mouseout", function(){
    btn.style.backgroundColor = ""
})

btn.addEventListener("mousemove", function(){
    console.log("Mouse is moving over the button")
})

document.getElementById("input").addEventListener("focus", function(){
    document.getElementById("input").style.backgroundColor = "lightblue"
})
document.getElementById("input").addEventListener("blur", function(){
    document.getElementById("input").style.backgroundColor = ""
})

document.getElementById("input").addEventListener("change", function(){
    console.log("Input value changed to: " + document.getElementById("input").value)
})

let value = document.getElementById("input").value
console.log(value);

//submit event
document.getElementById("myForm").addEventListener("submit", function(event){
    // event.preventDefault(); // Prevent form submission
    console.log("Form submitted")
})


//keybpard Events
// document.getElementById("input").addEventListener("keydown", function(event){
//     console.log("Key down: " + event.key)
// })
// document.getElementById("input").addEventListener("keyup", function(event){
//     console.log("Key up: " + event.key)
// })
document.getElementById("input").addEventListener("keypress", function(event){
    console.log("Key press: " + event.key)
})


//window events
window.addEventListener("load", function(){
    console.log("Window loaded")
})
window.addEventListener("resize", function(){
    console.log("Window resized to: " + window.innerWidth + "x" + window.innerHeight)
})
window.addEventListener("scroll", function(){
    console.log("Window scrolled to: " + window.scrollY)
}
)
// window.addEventListener("unload", function(){
//     console.log("Window unloaded")
// })

//clipboard events
document.getElementById("input").addEventListener("copy", function(){
    console.log("Content copied from input")
})
document.getElementById("input").addEventListener("cut", function(){
    console.log("Content cut from input")
})
document.getElementById("input").addEventListener("paste", function(){
    console.log("Content pasted into input")
})

//not allow user to copy,paste,cut from input
document.getElementById("noClipboard").addEventListener("copy", function(event){
   
    console.log("Copying is disabled")
})

///////////////////////////////////////////////////////////////////////////////////////////////////////

/*

1. Mouse Events:
      1. click: single click

      Real world Use cases:
            1. Submitting forms
            2. Navigating links
            3. Opening dropdown menus
            4. Playing/pausing media

    2. dblclick: double click
        Real world Use cases:
            1. Opening files or folders
            2. Zooming in on images or maps
            3. Selecting text or items quickly

2. keyboard Events:
        1. keydown: when a key is pressed down
        Real world Use cases:
            1. Game controls
            2. Form validation
            3. Keyboard shortcuts




*/

document.getElementById("img").addEventListener("dblclick", function(){
    img.style.transform = "scale(1.5)";
})

document.getElementById("img").addEventListener("mouseout", function(){
    img.style.transform = "scale(1)";
})

document.getElementById("file").addEventListener("dblclick", function(){
    openFile();
})

function openFile(){
    alert("File Opened")
}


document.getElementById("text").addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        alert("Form Submitted")
    }
})

document.getElementById("text").addEventListener("keydown", function(event){
    if(!isNaN(event.key)){
        alert("Numbers are not allowed")

    }
})

let count = document.getElementById("count");
let msg = document.getElementById("address");

msg.addEventListener("keyup", function(e){

count.innerText = msg.value.length + " / 100";
})

// let myForm = ;


// userName.addEventListener("keydown", function(){

// btn1.disabled = true
// })

document.getElementById("myForm").addEventListener("submit", function(e){

    e.preventDefault();//
let userName = document.getElementById("user").value;
let password = document.getElementById("password").value;
let msg2 = document.getElementById("msg2");


if(userName === "" || password === ""){
    msg2.innerText = "All fields are required";
    msg2.style.color = "red";
}else{
    msg2.innerText = "Form submitted successfully";
    msg2.style.color = "green";
}
    
})