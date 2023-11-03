var obj = {
    x:5
}

obj.y = 6;

console.log(obj);
console.log(obj.y);


function greet(){
    console.log("Hai");
}

greet();

greet.language = "english";

console.log(greet.language);

var x = "Hello";

var z = function(){
    console.log("z")
}

// Pass them around

// function test(x){
//     x();
// }

// test(z);

function test2(x){
  x();
}

test2(function(){
    console.log("x");
})

function getName(first, sec){
  console.log(`${first} ${sec}`)
}

getName("Jagan", "Javid")


function a(){

    const b = "Im b"
    
    console.log(b)

    function c(){
        console.log(b + "Inside Function");
    }

    c();
}

a();