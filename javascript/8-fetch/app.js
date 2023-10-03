document.getElementById("btn-1").addEventListener("click", getText);
document.getElementById("btn-2").addEventListener("click", getJson);
document.getElementById("btn-3").addEventListener("click", externalAPI);


function getText(){
   fetch("text.txt").then(function(res){
     return res.text();
   }).then(function(data){
     console.log(data);
     document.getElementById("output").innerHTML = data;
   }).catch(function(err){
     console.log(err);
   })
}


function getJson(){
    fetch("posts.json").then(function(res){
        return res.json();
    }).then(function(data){
        let output = "";

        data.forEach(function(post){
            output += `<li>${post.title}</li>`;
        })

       document.getElementById("output").innerHTML = output;
    })
}


function externalAPI(){
    fetch("https://jsonplaceholder.typicode.com/users").then(function(res){
        return res.json();
    }).then(function(data){
        let output = "";

        data.forEach(function(post){
            output += `<li>${post.name}</li>`;
        })

       document.getElementById("output").innerHTML = output;
    })
}
