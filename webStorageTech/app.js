/*


Key Points:

1.web storage stores everything in the form of Strings
2. for Arrays & objects --->JSON.stringify and JSON.parse
3. works only inside the browser

local Storage: is a permanent Storage
1.SetItem(key,value)----->save data
2. getItem(key)----->read data
3. remove(key)---->deletion
4. clear()------>delete all stored items
5. legth----->


*/

localStorage.setItem("userName","Sai");

localStorage.setItem("ID",100);
let userName = localStorage.getItem("ID")

console.log(typeof userName);

localStorage.setItem("userName","Kumar");



let fruits = ["Apple","Banana","Mango"]
localStorage.setItem("Froots",JSON.stringify(fruits))
console.log(localStorage.getItem("Froots"));

let array = localStorage.getItem("Froots");

console.log(JSON.parse(array));

// let array1 = JSON.stringify(array)
// let array2 = JSON.parse(array1)
// console.log(array2);
console.log("Hello");

localStorage.removeItem("user")

function saveName(){
    let userName1 = document.getElementById("name").value;
    localStorage.setItem("name",userName1)
    alert("name saved in LocalStorage")
}