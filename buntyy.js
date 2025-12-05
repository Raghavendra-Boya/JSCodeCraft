console.log(this);
var a = 10;
var addd = {
    a:20,
    b : function(){
        console.log(this.a);
    }
}

addd.b();
console.log(a);
console.log(this.a);

function add(){
    console.log("Hello");
}

add()
window.add();
this.add()


// let addd = 

let admit = 
    {
    name : "sai",
    age : 26,
    a : 30,
    greet : function(){
        console.log("Hello "+ this.name + " a value = " + this.a);
    }

}

let admit1 = 
    {
    name : "Kumar",
    age : 26,
    a : 40,
    greet : admit.greet

}
let admit2 = 
    {
    name : "Kumar",
    age : 26,
    a : 40,
    greet : admit.greet

}

admit.greet()
admit1.greet()