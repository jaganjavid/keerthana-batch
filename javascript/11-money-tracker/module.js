// Module Js

const myModule1 = (function(){

    // Private
    const x = 5;

    // Public
    return {
        x:x
    };
})();


const myModule2 = (function(){
    // Private
    const x = 15;

    // Public
    return {
        x:x
    };
})
();
console.log(myModule1.x)
console.log(myModule2.x)

