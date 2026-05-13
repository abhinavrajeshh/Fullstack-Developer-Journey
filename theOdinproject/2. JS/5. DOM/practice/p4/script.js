const para = document.querySelector(".text");
const button = document.querySelector("#btn");

button.addEventListener("click", ()=>{
    para.textContent = "More details";
    console.log("Button clicked");
})