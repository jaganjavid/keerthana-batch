


const xhr = new XMLHttpRequest();


xhr.open("GET", "https://jsonplaceholder.typicode.com/users");



xhr.onreadystatechange = function(){

    if(this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.response);
        
        data.forEach(function(user){
            
            const li = document.createElement("li");

            li.innerHTML = `<strong> ${user.name}
            </strong> : <em> ${user.email} </em>`;

            document.querySelector("#output").appendChild(li);
        })

        
    }
}

xhr.send();