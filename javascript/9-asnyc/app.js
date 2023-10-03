// async function myFunc(){

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello")
//         }, 3000);
//     })

//     const error = true;

//     if(!error){
//         const res = await promise;
//         return res;
//     } else {
//         await Promise.reject(new Error("Something went worng"));
//     }

// }


// myFunc().then(res => console.log(res))
// .catch(err => console.log(err));

async function getUsers(){
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Only proceed once its resolved
    const data = await response.json();

    // Only proceed once second promise is resolve

    return data;

}

getUsers().then(data => console.log(data));