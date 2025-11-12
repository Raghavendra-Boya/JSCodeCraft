//Array of object

let products = [
    {
        id : 1,
        name : "Laptop",
        price: 20000

    },
      {
        id : 2,
        name : "HeadPhones",
        price: 10000

    },
      {
        id : 3,
        name : "KeyBoard",
        price: 1000

    }
]

let cart = [];

function displyProducts(){
    let productList = document.getElementById("productList");
productList.innerHTML = "";

for(let i = 0; i<products.length;i++){
    let p = products[i];

    productList.innerHTML += `
    <div class="bg-gray-500 p-4 rounded">
        <h3 class="font-semibold text-lg">${p.name}</h3>
        <p >${p.price}</p>
        <button onclick = "addToCart(${p.id})" class="bg-blue-500 px-3 text-white rounded py-1 ">Add to cart</button>
    </div>
    `
}
}

displyProducts()
function addToCart(id){
    for(let i = 0;i<products.length;i++){
        if(products[i].id===id){
            cart.push(products[i])
        }
        // alert("Done")
    }
}

console.log(cart);



