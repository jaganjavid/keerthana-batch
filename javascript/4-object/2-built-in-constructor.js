// String

const name1 = "Jagan";
const name2 = new String("Jagan");



// if(name1 === name2){
//     console.log("Yes im correct");
// } else {
//     console.log("No")
// }

const num1 = 5;
const num2 = new Number(5);

// console.log(num1);
// console.log(num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// console.log(bool1, bool2);

// function

const getSum1 = function(x, y){
    return x + y;
}

// console.log(getSum1(6, 6));

const getSum2 = new Function("x", "y", "return x + y");

// console.log(getSum2(5, 5));

// Array 

const arr1 = [1,2,3,4,5]; //*** 
const arr2 = new Array(5,4,3,2,1);

// console.log(arr1);
// console.log(arr2);

// Object
const jagan = {name: "Jagan"}; // ***
const jagan2 = new Object({name: "Jagan2"});

console.log(jagan)
console.log(jagan2)
