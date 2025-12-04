function toggle(){
    let bodyEl = document.getElementById("body");
    bodyEl.classList.toggle("bg-white");
    bodyEl.classList.toggle("bg-black");
    bodyEl.classList.toggle("text-black");
    bodyEl.classList.toggle("text-white");
    bodyEl.classList.remove("active");
    bodyEl.classList.add("inactive");

}
// toggle()


let age = prompt("Enter your age:");
console.log(age);