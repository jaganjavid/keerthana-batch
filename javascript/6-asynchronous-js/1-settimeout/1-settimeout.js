

function changeText() {
    document.querySelector("h1").textContent = "Hello from callback";
}

const timerId = setTimeout(changeText, 3000);

document.querySelector("#cancle").addEventListener("click", function(){
    console.log(timerId);
    clearTimeout(timerId);
    console.log("Timer cancelled");
})

