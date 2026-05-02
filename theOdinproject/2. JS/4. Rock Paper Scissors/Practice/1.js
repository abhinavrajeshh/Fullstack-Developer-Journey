// Task 1
// -----------
// takes 2 inputs:
// playerChoice, computerChoice
// return:
// "win" / "lose" / "draw"


// ---------------------------------
// function playRound(player, computer) {
//   if (player === computer) {
//     return "Draw";
//   } 
//   else if (
//     (player === "rock" && computer === "scissors") ||
//     (player === "paper" && computer === "rock") ||
//     (player === "scissors" && computer === "paper")
//   ) {
//     return "Player win";
//   } 
//   else {
//     return "Computer win";
//   }
// }+

// console.log(playRound("paper", "rock"));


// ----------
function game(player, computer){
  if(player===computer){
    return "draw";
  }else if(player==="stone" && computer ==="scissors" ||
    player ==="paper" && computer ==="stone" ||
    player === "scissors" && computer === "paper"
  ){return "Player win" ;
  }
  else{
    return "Computer win"
  }
}
console.log(game("scissors","paper"));
