const button = document.querySelector(".btn");
button.addEventListener("click", ()=>{
    const para = document.createElement("p");
    para.textContent = "New paragraph created";
    document.body.appendChild(para);
})