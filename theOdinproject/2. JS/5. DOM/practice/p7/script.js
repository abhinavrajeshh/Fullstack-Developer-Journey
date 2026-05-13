const button = document.querySelector(".btn");
const container = document.querySelector(".container");

button.addEventListener("click", ()=>{
    for(let i = 1; i<=5 ; i++){
        const box = document.createElement("div");
        box.style.height = "20px";
        box.style.width = "20px";
        box.style.border = "1px solid red";
        container.appendChild(box);
    }
   
})