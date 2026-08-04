// Practice-------
//  console.log("Hello");

// function animal(name){
//     return name + " is good";
// }
// console.log(animal("goat"));

// ---------------------------------
//------------- LOGIC---------
// let num = Math.random()*3;
// console.log(num)
// console.log(Math.floor(num));
// ---------------------------------

function getComputerChoice(){
    let a = Math.random()*3;
    let value = Math.floor(a);
    console.log(value);
    
    if(value===0){
        return "rock";
    }else if(value===1){
        return "paper";
    }else{
        return "scissors";
    }
}
let computer = getComputerChoice();
console.log(computer);

function getHumanChoice(){
    let value = prompt("rock , paper or scissors? ");
    return value;
}
let human = getHumanChoice();
console.log(human);

function playround(human, computer){
    if(human==="rock" && computer ==="paper" || human === "paper" && computer === "scissors" || human === "scissors" && computer === "rock"){
        
    }   
    else if(human === "rock" && computer === "scissors" || human === "paper" && computer === "rock" || human === "scissors" && computer === "paper") 
        return "Human win"; 
    else{
        return "Draw"
    }
}
console.log(playround());