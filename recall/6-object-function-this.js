var b = 5;

function a(){
    const b = "Hola";

    console.log("Statement", this);

    console.log(b);

    this.newVariable = "Hello"; // its point to the window
}

a();

console.log(window);

console.log(newVariable);