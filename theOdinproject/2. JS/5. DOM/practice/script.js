const button1 = document.querySelector("#btn1");
const para = document.querySelector(".text");
button1.addEventListener("click", function(){
    para.textContent = "Button clicked";
    console.log("button was clicked");
})