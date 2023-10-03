// Person contructor

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}

// Person.prototype.__proto__.fullName = function(){
//      return this.firstName + " " + this.lastName;
// }


const javid = new Person("Jagan", "Javid");
const arun = new Person("Arun", "Kumar");


console.log(javid)
console.log(arun);

console.log(javid.fullName());


const arr = ["Hello", "Hai", "Vanakam"];


arr.push("Hola");

console.log(arr)

const str = "Hello";

console.log(str.indexOf("H"))
