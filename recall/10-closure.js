function buildFucntion(){
    
    var arr = [];

    for(var i = 0; i < 3; i++){

        // let j = i;

        arr.push(function(){
            console.log(i);
        })

        // console.log(i);
    }

    return arr;

}


// var fs = buildFucntion();
// fs[0]();
// fs[1]();
// fs[2]();


function buildFucntion2(){
   var arr = [];

   for(var i = 0; i<3; i++){
     arr.push((function(j){
        console.log(j)
     }(i)))
   }

   return arr;
}

var fs = buildFucntion2();

fs[0];
fs[1];
fs[2];

// var arr2 = [1,2,3];

// var arr3 = arr2.map(function(num){
//     return num * 2;
// })

// console.log(arr2);
// console.log(arr3);

function customMap(array, callback) {
    // Check if the provided argument is an array
    if (!Array.isArray(array)) {
        throw new Error("The first argument must be an array");
    }

    // Check if the second argument is a function
    if (typeof callback !== "function") {
        throw new Error("The second argument must be a function");
    }

    // Create a new array to store the results
    var newArray = [];

    // Iterate over the elements of the original array
    for (var i = 0; i < array.length; i++) {
        // Call the callback function for each element and push the result to the new array
        newArray.push(callback(array[i], i, array));
    }

    // Return the new array
    return newArray;
}

// Example usage:
var numbers = [1, 2, 3, 4, 5];

var squaredNumbers = customMap(numbers, function (element) {
    return element * element;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]



function customForEach(array, callback) {
    // Check if the provided argument is an array
    if (!Array.isArray(array)) {
        throw new Error("The first argument must be an array");
    }

    // Check if the second argument is a function
    if (typeof callback !== "function") {
        throw new Error("The second argument must be a function");
    }

    // Iterate over the elements of the array
    for (var i = 0; i < array.length; i++) {
        // Call the callback function for each element
        callback(array[i], i, array);
    }
}

// Example usage:
var numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(element, index){
    console.log("Build In Element at index " + index + ": " + element);
})

customForEach(numbers, function (element, index) {
    console.log("Element at index " + index + ": " + element);
});

var arr4 = [];

arr4.push("Yes");

console.log(arr4);



function intToRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';

    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].symbol;
            num -= romanNumerals[i].value;
        }
    }

    return result;
}

// Example usage:
console.log(intToRoman(3));      // Output: "III"
console.log(intToRoman(58));     // Output: "LVIII"
console.log(intToRoman(1994));   // Output: "MCMXCIV"
