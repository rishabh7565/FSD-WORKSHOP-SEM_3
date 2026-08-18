function hello(n1, n2, callback) {
    console.log("hello world");
    callback();
    return "Done!"; // Add a return statement
}

let a = 10;
let b = 20;

console.log(hello(a, b, sayhi)); 

function sayhi() {
    console.log("Hi!");
}
