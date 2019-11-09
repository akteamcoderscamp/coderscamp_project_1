//TODO: move into some general file
function Player(name){  //dealer is also a player with the name deale
    this.name = name;
    this.points = 0;
    this.cards = [];
    this.blackJack = false;
    this.win = false;   // draw will be when both playes losts so for both win=false
} 

const dealer = new Player("Dealer");

// "blackjack" is the highest hand, consisting of an ace and any 10-point card, and it outranks all other 21-point hands
const checkBlackJack = (player) => player.cards.length == 2 && player.points == 21 ? true: false; 

/*
logic for dealer play with already 2 cards on the table, but one faced-down
Dealer rules:  the dealers face-down card is turned up. If the total is 17 or more, it must stand. 
If the total is 16 or under, they must take a card. 
The dealer must continue to take cards until the total is 17 or more, at which point the dealer must stand.
*/

const playDealer = (points) =>{
    //TODO: reveal Hidden card on frontend 
    dealer.points = addPoints(dealer.cards[0]); //Justyna's funtion ??
    if(checkBlackJack(dealer)) return dealer.blackJack = true;
    while (points < 17) takeCard();  //takeCard is an algorithm for picing a card and then sum up the points
}
