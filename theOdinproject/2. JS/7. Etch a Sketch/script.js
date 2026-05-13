const container = document.querySelector(".container");
for(let i = 1; i<=256; i++){
    const box = document.createElement("div");
    box.style.width = "12px";
    box.style.height = "12px";
    box.style.backgroundColor = "red";
    box.style.border = "1px solid black"
    container.appendChild(box);
}