function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
}


const javid = new Person("Jagan", "Javid"); // object
const arun = new Person("Arun", "Kumar"); 

console.log(javid.firstName);
console.log(javid.lastName);
console.log(javid.fullName());


