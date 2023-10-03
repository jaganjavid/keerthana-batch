function Person(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName
}

Person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}

Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person("Jagan", "Javid");

console.log(person1.greeting());

// Customer Object

function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

Customer.prototype = Object.create(Person.prototype);

Customer.prototype.constructor = Customer;

const customer1 = new Customer("Jagan", "Javid", "111-111-1111", "standard");

Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}


console.log(person1);
console.log(customer1);

