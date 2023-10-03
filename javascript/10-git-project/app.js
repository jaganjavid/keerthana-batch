const github = new Github();
const ui = new UI();

const user = document.getElementById("submit-btn");


user.addEventListener("click", (e) => {
    // Get the input value
    let userText = document.querySelector("#search-user").value;

    if(userText !== ""){
        github.getUser(userText)
        .then(data => {
           ui.showProfile(data);
        }).catch(error => console.log(error));
    }

})