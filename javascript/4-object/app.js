const person = {
    firstName: "Jagan",
    lastName: "Javid",
    age: 27,
    email:"jaganjavid@gmail.com",
    hasGuns: false,
    hobbies:["Sports", "Music"],
    adderess:{
        city: "Chennai",
        state: "TN"
    },
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(person);
console.log(person.firstName);
console.log(person["hasGuns"]);
console.log(person.getFullName());


const str = "Jagan";


console.log(str);

console.log(str.length);