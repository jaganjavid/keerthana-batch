// By Value (Primitive Value)

var a = 5;
var b;

b = a;

a = 2;

b = 5;

console.log(a);
console.log(b);

// Bt reference (all object)

var c = {
    greeting : "Hi"
}

var d;

d = c;

d.greeting = "Hello";


console.log(c)
console.log(d);

// var u = "u";

// u = "l";

// console.log(u);

// const z = "z";

// z = x;