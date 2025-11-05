/*
Math()
math.PI()
math.round()---> nearest integer
math.floor()--> lower integer
math.ceil()--> upper integer
math.trunc()--> removes decimal part
math.random()--> generates random number between 0 to 1
math.pow(x,y)--> x raise to power y
math.sqrt(x)--> square root of x

Date():
let date = new Date();
date.getDate()--> returns day of month
date.getDay()--> returns day of week
date.getMonth()--> returns month
date.getFullYear()--> returns year
date.getHours()--> returns hours
date.getMinutes()--> returns minutes
date.getSeconds()--> returns seconds
date.getMilliseconds()--> returns milliseconds
date.now()--> returns milliseconds since Jan 1, 1970


*/
console.log(Math.PI);
console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.trunc(4.9));
console.log(Math.random());
console.log(Math.pow(2,3));
console.log(Math.sqrt(16));

console.log(Math.floor(Math.random() * 10)); // random number between 0-9


let date = new Date();
console.log(date);

console.log(date.getDate()+3);
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear()+5);
console.log(date.getHours());
//set methods
date.setDate(15);
date.setMonth(11);
date.setFullYear(2050);
console.log(date);
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());


function rate(value){
    for(let i=1; i<=5; i++){
        document.getElementById("s"+i).style.color = "gray";
    }
    for(let i=1; i<=value; i++){
        document.getElementById("s"+i).style.color = "gold";
}

document.getElementById("result").innerText = value+"/5";
alert("You rated "+value+" out of 5 stars");
}

//setInterval(function, milliseconds)
setInterval(function(){
    let time = new Date();
    document.getElementById("time").innerText = time.toLocaleTimeString();
}, 1000);