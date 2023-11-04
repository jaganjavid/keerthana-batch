var b = 5;

function a(){
    const b = "Hola";

    console.log("Statement", this);

    console.log(b);

    this.newVariable = "Hello"; // its point to the window

}

a();

// Function Expression

var b = function(){
    console.log("Exp", this)
}

b();

var c = {
    name: "The C Object",
    log: function(){
        
        this.name = "Updated C Object";

        var self = this;

        let setName = function(newName){
            self.name = newName;
        }

        setName("Updated again , The c Object");
     
    }
}

c.log();

console.log(c.name);

