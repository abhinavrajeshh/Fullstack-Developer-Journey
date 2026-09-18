const container = document.querySelector(".container");
const button = document.querySelector(".btn");

button.addEventListener("click", ()=>{
   let value = prompt("Enter grid size : ");
    let n = value * value;
    for(let i=1; i<=n; i++){
        const box = document.createElement("div");
        box.style.height = "26px";
        box.style.width = "26px";
        box.style.border = "2px solid red";
        container.appendChild(box);
        box.addEventListener("mouseover", ()=>{
            box.style.backgroundColor = "red";
    })
}
})

container.innerHTML = "";