const http = new OurHTTP();

// http.get("https://jsonplaceholder.typicode.com/users")
// .then(data => console.log(data))
// .catch(err => console.log(err))


  // User Data

const data = {
    name:"Jagan",
    username: "Jagajavid",
    email:"jaganjavid@gmail.com"
}

// http.post("https://jsonplaceholder.typicode.com/users", data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// http.put("https://jsonplaceholder.typicode.com/users/5", data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

http.delete("https://jsonplaceholder.typicode.com/users/7")
.then(data => console.log(data))
.catch(err => console.log(err))