// console.log(this);

// var a = 20;

// function add(){
//     console.log(a);
// }
// add()

// let admit = 
//     {
//     name : "sai",
//     age : 26,
//     a : 30,
//     greet : function(){
//         console.log("Hello "+ admit.name + " a value = " + admit.a);
//     }
// }
// // let admit1 = {
// //     name : "Kumar",
// //     age : 26,
// //     a : 40,
// //     greet : admit.greet
// // }

// // let admit2 = {
// //     name : "Saketh",
// //     age : 26,
// //     a : 50,
// //     greet : admit.greet
// // }


// admit.greet();
// // admit1.greet();
// // admit2.greet()

let users = [
    {
        name: "Harshitha",
        role: "Developer"
    },
     {
        name: "Anu",
        role: "Developer-1"
    },
     {
        name: "Likitha",
        role: "Developer-2"
    },
     {
        name: "Buntyyy",
        role: "Developer-3"
    }
]

let container = document.getElementById("user");


for(let i =0;i<users.length;i++){
    let card = document.createElement("div");

    card.className = "rounded border p-4 bg-gray-400";

    card.innerHTML = `
    <h3>${users[i].name}</h3>
    <p>${users[i].role}</p>
    <button name = "${users[i].name}" class="btn">Greet</button>



    `

    card.querySelector(".btn").addEventListener("click", function(){
        console.log(this);
        let name = this.getAttribute("data-name");
        alert("Hello" + name)
    })
    container.appendChild(card)
}