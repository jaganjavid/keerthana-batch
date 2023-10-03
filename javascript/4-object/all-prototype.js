// Imagine we have a prototype for a car
const carPrototype = {
    wheels: 4,
    doors: 4,
    engine: "V6",
    start: function() {
      return "Vroom Vroom!";
    }
};


// function SmallCar(color){
//     this.color = color
// }

// SmallCar.prototype.wheels = 4;
// SmallCar.prototype.doors = 4;
// SmallCar.prototype.engine = 4;
// SmallCar.prototype.start = function() {
//     return "Vroom Vroom!";
// }

// const newCar = new SmallCar("Black");
// const javidCar = new SmallCar("Blue")


// console.log(newCar);
// console.log(javidCar);

// function LargeCar(color){
//     this.color = color
// }

// LargeCar.prototype = Object.create(SmallCar.prototype);

// const javidLargeCar = new LargeCar("Red");

// console.log(javidLargeCar.wheels);


function BMWCar(color){
    this.color = color
}

function Bence(color){
    this.color = color
}

BMWCar.prototype = Object.create(carPrototype);
Bence.prototype = Object.create(carPrototype);

const myBwm = new BMWCar("Blue");
const myBence = new Bence("Green");


console.log(myBwm)
console.log(myBence)

