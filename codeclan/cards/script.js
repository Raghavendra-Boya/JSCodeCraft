let products = [
    {
        image : "https://www.achieversit.com/assets/images/AIT-white.jpg",
        name : "laptop",
        price : 20000
    }
    ,
     {
        image : "https://www.achieversit.com/assets/images/AIT-white.jpg",
        name : "Mobile",
        price : 40000
    },
     {
        image : "https://www.achieversit.com/assets/images/AIT-white.jpg",
        name : "Keyboard",
        price : 1000
    }
]


let container = document.getElementById("container")
// container.innerHTML = `<h2>Hello</h2>`

for(let i = 0; i<products.length;i++){
    //Create element
   let card =  document.createElement("div");

   card.classList.add("items");

   card.innerHTML = 
   `
<img src = "${products[i].image}"> 
<h3>${products[i].name}</h3>
<p>${products[i].price}</p>
   
   `
container.appendChild(card)

}