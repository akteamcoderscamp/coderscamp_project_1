//definiowanie graczy
class playerClass{ 
    constructor(name){
        this.name = name;
        this.points = 0;
        this.cards = [];
        this.blackJack = false;
        this.win = false;  
    }  
} 
let dealer = new playerClass('Dealer');
let player = new playerClass('Player');


//definiowanie kart
class card{
    constructor(suit, name, value){
    this.suit = suit;
    this.name = name;
    this.value = value;
    }
}
var deck= new Array();
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

for (i=0; i<suits.length; i++){
    for (j=2; j<15 ; j++){
        if(j<11){
            var value=j;
            var name=value.toString();
        }else if (j<14){
            value=10;
            switch (i){
                case 11: name="J";
                break;
                case 12: name="Q";
                break;
                case 13: name="K";
            }
        }else {
            value=11;
            name="A"
        }
    const newCard = new card (suits[i], name, value);
    deck.push(newCard)
    }
    
}
//console.log(deck);
  
//losowanie kart dla graczy
function cardDraw(){
    var  number = Math.floor(Math.random()*deck.length);
    var figure = deck.slice(number,number+1)
    deck.splice(number,1);
    return figure;
}
//pierwsze rozdanie
for (i=0; i<2; i++){
    let drawedCard= cardDraw();
    dealer.cards.push(drawedCard);
}
for (i=0; i<2; i++){
    let drawedCard= cardDraw();
    player.cards.push(drawedCard);
}
//sprawdzenie, czy któryś z graczy ma blackjacka
var dealerScore=0;
var playerScore=0;
//sumowanie wartości kart graczy
for (const arrCard of dealer.cards){
    dealerScore+=arrCard[0].value;
}
for (const arrCard of player.cards){
    playerScore+=arrCard[0].value;
}

function ifBlackjack(score){
    if (score===21){return 1
    }else 
     {return 0}
}
//sprawdzenie, czy gracz wygrał
if (ifBlackjack(dealerScore)===1){
    if(ifBlackjack(playerScore)===1){
        player.win=draw;
    } else {
        dealer.win=true;
    }}
    else if (ifBlackjack(playerScore===1)){
        return 'win';
    }
if ( player.win!==false || dealer.win!==false ){
    console.log(player.win, dealerScore, playerScore);
}
