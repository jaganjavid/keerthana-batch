// IIFE
(function(global, name){
    var greeting = "Hey";
    global.greeting = "Vanakam";

    console.log("IIFE", greeting + " " + name);

})(window, "Javid")

// console.log(greeting);
// greeting = "Hola";
// console.log(greeting);
