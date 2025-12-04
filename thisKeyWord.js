console.log(this);

var a = 20;

function add(){
    console.log(a);
}
add()

let admit = 
    {
    name : "sai",
    age : 26,
    a : 30,
    greet : function(){
        console.log("Hello "+ admit.name + " a value = " + admit.a);
    }
}
// let admit1 = {
//     name : "Kumar",
//     age : 26,
//     a : 40,
//     greet : admit.greet
// }

// let admit2 = {
//     name : "Saketh",
//     age : 26,
//     a : 50,
//     greet : admit.greet
// }


admit.greet();
// admit1.greet();
// admit2.greet()