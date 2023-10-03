


const xhr = new XMLHttpRequest();


xhr.open("GET", "./mytext.tx");

// 0 - Request not initialized
// 1 - Server connection established
// 2 - Request recieved
// 3 - Processing Request
// 4 - Request finished and reponse is ready



xhr.onreadystatechange = function(){
    if(this.status === 200){
        const data = this.response;
        document.querySelector("p").innerText = data;
    } else{
        if(this.status === 404){
            console.log("Not Found");
        }
    }
}

xhr.send();