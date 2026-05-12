const button = document.querySelector("#btn");

button.addEventListener("click",()=> {
    const para = document.createElement("p");
    para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa quo illo laborum facilis, harum vitae iure recusandae maiores.";
    document.body.appendChild(para);
    para.style.color = "red";
    para.style.backgroundColor = "yellow";
})
