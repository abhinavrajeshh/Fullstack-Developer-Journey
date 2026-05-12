
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
rock.addEventListener("click",()=>{
    result.textContent = "You selected ROCK"
    console.log("User selected ROCK");
})

paper.addEventListener("click",()=>{
    result.textContent = "You selected PAPER"
    console.log("User selected PAPER");
})
scissors.addEventListener("click",()=>{
    result.textContent = "You selected SCISSORS"
    console.log("User selected SCISSORS");
})
