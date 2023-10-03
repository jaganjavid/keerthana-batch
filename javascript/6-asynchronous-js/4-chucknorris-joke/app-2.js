
const buttonArr = ["animal","career","celebrity",
"dev","explicit","fashion","food","history","money",
"movie","music","political","religion","science",
"sport","travel"];

const ul = document.querySelector("ul");


const input = document.querySelector("#categories-input");
const btnWrapper = document.querySelector(".all-btn");


// 1st

document.addEventListener("DOMContentLoaded", function(){

    input.value = "animal";
    
    buttonArr.forEach(function(item){

      const btn = document.createElement("button");

      btn.className = "btn btn-primary categorie-btn";
      btn.innerText = item;

      btnWrapper.style.display = "flex";
      btnWrapper.style.gap = "10px";

      btnWrapper.appendChild(btn);

    })

})

// 2nd

btnWrapper.addEventListener("click", function(e){
    
    if(e.target.classList.contains("categorie-btn")){
        input.value = e.target.innerText;
    }
})



function getData(url){

    ul.innerHTML = "";

    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.onreadystatechange = function(){
        if(this.status === 200){

            const result = JSON.parse(this.responseText);

            const joke = result.value;

            const li = document.createElement("li");

            li.appendChild(document.createTextNode(joke));
  
            ul.appendChild(li);            

        }
    }

    xhr.send();
}

// 3rd

document.getElementById("joke-form").addEventListener("submit", formSubmit);

function formSubmit(e){
    e.preventDefault();
    
    
    const getInput = input.value;

    const getCategories = `https://api.chucknorris.io/jokes/random?category=${getInput}`;

    getData(getCategories);
    
}
