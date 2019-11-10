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
            switch (j){
                case 11: name="J";
                break;
                case 12: name="Q";
                break;
                case 13: name="K";
            }
        }else {
            value=[1, 11];
            name="A"
        }
    const newCard = new card (suits[i], name, value);
    deck.push(newCard)
    }
    
}


//losowanie kart dla graczy

function hold(){
    if (player.points < 21 && dealer.points < 21 && dealer.points < player.points) {
        dealerCardDraw();
        checkScore();
} else {console.log('both hold')}
}

function add(){
    if (player.points < 21 && dealer.points < 21) {
        playerCardDraw();
        console.log(player.points)
        dealerCardDraw();
        console.log(dealer.points)
        checkScore();
        console.log(player.win)
        console.log(dealer.win)
}
}

function playerCardDraw(){
    var numP = Math.floor(Math.random()*deck.length);
    var drewCardP = deck[numP];
    if (drewCardP.name === "A" && player.points > 10){
        drewCardP.value = 1;
    } else if (drewCardP.name === "A" && player.points <= 10) {
        drewCardP.value = 11;}
    player.cards.push(drewCardP);
    player.points = player.points + drewCardP.value;
    if (player.cards.length === 2 && player.points === 21) {player.blackJack = true};
    document.getElementById('PPoints').innerHTML = player.points;
}

function dealerCardDraw(){
    var numD = Math.floor(Math.random()*deck.length);
    let drewCardD = deck[numD];
    if (drewCardD.name === "A" && dealer.points > 10){
        drewCardD.value = 1;
    } else if (drewCardD.name === "A" && dealer.points <= 10) {
        drewCardD.value = 11;}
    dealer.cards.push(drewCardD);
    dealer.points = dealer.points + drewCardD.value;
    if (dealer.cards.length === 2 && dealer.points === 21) {dealer.blackJack = true};
    document.getElementById('DPoints').innerHTML = dealer.points;
}

function checkScore(){
    if (dealer.points >= 21 || player.points >= 21) {
        if (player.points === dealer.points) {console.log('a tie')} else {
                if (player.points < dealer.points) {player.win = true}
                else {dealer.win = true}
            }
        }
}
