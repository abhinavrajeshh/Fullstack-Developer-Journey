// Task 1
// -----------
// takes 2 inputs:
// playerChoice, computerChoice
// return:
// "win" / "lose" / "draw"

function playRound(player, computer){
    let result ;
   if(player === computer){
    result = "Draw";
   }else if(player === "rock"  && computer === "scissors"){
    result = "Player win"
   }else{
    result = "Computer win"
   }
    return result;
}
console.log(playRound("paper","rock"));
// ---------------------------------
function playRound(player, computer) {
  if (player === computer) {
    return "Draw";
  } 
  else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "Player win";
  } 
  else {
    return "Computer win";
  }
}

console.log(playRound("paper", "rock"));

function sayName(){
    
}