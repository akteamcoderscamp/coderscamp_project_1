
function winner( playerScore, computerScore){
    if (computerScore>21){return 1}
    if (playerScore>21){return 0}
    if (playerScore>computerScore){
        return 1} else{
            return0;
        }
}

function blackjack(playerScore){
   if (playerScore===21){
       return 1}else{
           return 0}
}
