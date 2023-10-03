const http = new OurHttp();

// GET POST

http.get("https://jsonplaceholder.typicode.com/users", function(err, posts){
 if(err){
    console.log(err)
 } else{
    console.log(posts);
 }
})

// POST

const data = {
    name:"Jagan",
    email:"jagan@gmail.com"
}


// http.post("https://jsonplaceholder.typicode.com/users", data, function(err, posts){
//  if(err){
//     console.log(err)
//  } else{
//     console.log(posts);
//  }
// })

// PUT 

// http.put("https://jsonplaceholder.typicode.com/users/6", data, function(err, posts){
//  if(err){
//     console.log(err)
//  } else{
//     console.log(posts);
//  }
// })

// DELETE

// http.delete("https://jsonplaceholder.typicode.com/users/7",function(err, posts){
//  if(err){
//     console.log(err)
//  } else{
//     console.log(posts);
//  }
// })
