//Array of object



let products = [
    { id: 1, name: "Laptop", price: 20000, stock: true },
    { id: 2, name: "HeadPhones", price: 10000, stock: false },
    { id: 3, name: "KeyBoard", price: 1000, stock: true }
];


let cart = [];

function displyProducts(){
    let productList = document.getElementById("productList");
productList.innerHTML = "";

for(let i = 0; i<products.length;i++){
    let p = products[i];

    //added code

    let stockText = p.stock ? "Available" : "Out of Stock";
        let stockColor = p.stock ? "text-green-600" : "text-red-600";

    productList.innerHTML += `
    <div class="bg-gray-500 p-4 rounded">
        <h3 class="font-semibold text-lg">${p.name}</h3>
        <p >${p.price}</p>
        <!-- STOCK LABEL -->
            <p id="stock-${p.id}" class="${stockColor} font-bold">${stockText}</p>
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
    showCart();
}



function showCart(){
    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";
    let total = 0;
    for(let i =0; i<cart.length;i++){
        let item = cart[i];
        total += item.price;
        cartItems.innerHTML += `
            <div class="flex justify-between p-2 border">
            <span>${item.name}</span>
            <span>${item.price}</span>
            <!-- DELETE ICON -->
                <button onclick="removeItem(${i})" class="text-red-600 text-xl">🗑️</button>
            </div>
        `
    }
    // cartItems.innerText += total;
    document.getElementById("total").innerText = "Total:" +total;
}


function removeItem(index){
    cart.splice(index, 1);
    showCart();
}



function logout() {
      localStorage.removeItem("loggedInUser");
      window.location.href = "login.html";
    }




 // SIMPLE Two-Color Toggle
    const bodyEl = document.getElementById("pageBody");
    const toggleBtn = document.getElementById("themeToggle");

    toggleBtn.onclick = function () {
        bodyEl.classList.toggle("bg-white");  // Light
        bodyEl.classList.toggle("bg-black"); // Yellow / Secondary

        // Get all elements that are black
    const blackTextElements = document.querySelectorAll(".text-black, .text-white");

    // Loop through each element
    for (let i = 0; i < blackTextElements.length; i++) {
        let el = blackTextElements[i];

        // Toggle text color
        el.classList.toggle("text-black");
        el.classList.toggle("text-white");
    };
    }