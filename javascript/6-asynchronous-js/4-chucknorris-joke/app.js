

const button = document.getElementById("btn");

button.addEventListener("click", function(e){
    
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.chucknorris.io/jokes/random");

    xhr.onreadystatechange = function(){
        if(this.status === 200){
            const response = this.response; // JSON

            const data = JSON.parse(response);

            document.querySelector("p").innerText = data.value;
        }
    }

    xhr.send();
})

