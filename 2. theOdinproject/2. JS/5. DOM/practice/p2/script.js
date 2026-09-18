// const button = document.querySelector("#btn");

// button.addEventListener("click",()=> {
//     const para = document.createElement("p");
//     para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa quo illo laborum facilis, harum vitae iure recusandae maiores.";
//     document.body.appendChild(para);
//     para.style.color = "red";
//     para.style.backgroundColor = "yellow";
// })
// ------------------
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click",()=>{
    const para = document.createElement("p");
    para.innerHTML = "You selected ROCK";
    document.body.appendChild(para);
    console.log("User selected ROCK");
})

paper.addEventListener("click",()=>{
    const para = document.createElement('p');
    para.innerHTML = "You selected PAPER";
    document.body.appendChild(para);
    console.log("User selected PAPER");
})
scissors.addEventListener("click",()=>{
    const para = document.createElement('p');
    para.innerHTML = "You selected SCISSORS";
    document.body.appendChild(para);
    console.log("User selected SCISSORS");
})
