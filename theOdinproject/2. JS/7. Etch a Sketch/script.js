const container = document.querySelector(".container");
let n = 256;
for(let i=1; i<=n; i++){
    const box = document.createElement("div");
    box.style.height = "25px";
    box.style.width = "25px";
    box.style.border = "2px solid red";
    container.appendChild(box);
}