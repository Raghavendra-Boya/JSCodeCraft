/*
WHat is DOM:



1. DOM Selectors:
    1. getElementByID("ID name"):
    2. getElementsByClassNames("ClassName")
    3. getElemetByTagName("TagName")
    4. querySelecotor("name with notatuion")

2. DOM manipulation:
    1. createElement("tagName")

*/

// let title = document.getElementById("title");

// title.style.color = "red"

let title = document.getElementsByClassName("title");

// title.style.color = "red"

// title[1].style.color = "red"

// let title = document.getElementsByTagName("h1");
// title[0].style.color = "red"


// let para = document.querySelector(".title");
// para.style.textDecoration = "underline"

let para = document.querySelectorAll(".title");
para[1].style.textDecoration = "underline"

let newDiv = document.createElement("div");

newDiv.innerText = "Hello i am from JS";
// document.body.appendChild(newDiv)

title[0].replaceWith(newDiv)

// newDiv.remove();

let img = document.getElementById("img");

console.log(img.getAttribute("src"));


img.setAttribute("src","http://www.pixelstalk.net/wp-content/uploads/2016/07/Download-Free-Pictures-3840x2160.jpg")
console.log(img.hasAttribute("src"));


//CLass Mnipulations with ClassList

img.classList.add("active")
img.classList.remove("active")
img.classList.toggle("toggle")

function toggle(){
    let body = document.getElementById("body")

body.classList.toggle("bg-white")
body.classList.toggle("text-black")
body.classList.toggle("bg-black")
body.classList.toggle("text-white")
}
