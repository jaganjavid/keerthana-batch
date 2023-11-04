
function greet(firstName, lastName, language){
    return firstName + " " + lastName + " " + language;
}

// const input = prompt();

// if(input){
//    if(input === "tamil"){
//      console.log("Vakanam")
//    }else if(input === "english"){
//      console.log("Hello")
//    }else{
//      console.log("I dont the language")
//    }
// }

function tamilGreet(language){
    return greet("Jagan", "Javid", language)
}

function englishGreet(language){
    return greet("Jagan", "Javid", language)
}

console.log(tamilGreet("TA"));
console.log(englishGreet("En"));

