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

//okienko z wynikiem?
let scoreWin = document.getElementById('win')
scoreWin.hidden = true;
let scoreLoose = document.getElementById('loose')
scoreLoose.hidden = true;
//gra

function hold(){
    if (player.points < 21 && dealer.points < 21 && dealer.points < player.points) {
        cardDraw(dealer);
        checkScore();
} else {console.log('both hold')}
}

function add(){
    if (player.points < 21 && dealer.points < 21) {
        cardDraw(player);
        cardDraw(dealer);
        checkScore();
}
}

function cardDraw(person){
    var num = Math.floor(Math.random()*deck.length);
    var drewCard = deck[num];
    if (drewCard.name === "A" && person.points > 10){
        drewCard.value = 1;
    } else if (drewCard.name === "A" && person.points <= 10) {
        drewCard.value = 11;}
    person.cards.push(drewCard);
    person.points = person.points + drewCard.value;
    if (person.cards.length === 2 && person.points === 21) {person.blackJack = true};
    document.getElementById(person.name).innerHTML = person.points;
}

// function checkScore(){
//     if ((player.points >= 17 && dealer.points >=17) || (player.points >=21 || dealer.points >=21)) { 
//         if (player.blackJack == true && dealer.blackJack == false) {scoreWindow.innerHTML = "Player\'s BlackJack"}
//         else if (dealer.blackJack == true && player.blackJack == false) {scoreWindow.innerHTML = "Dealer\'s BlackJack"}
//         else if (player.blackJack == true && dealer.blackJack == true)
//         {scoreWindow.innerHTML = "A tie"}
//         else if (player.points > 21 || dealer.points > 21) {
//             if (dealer.points > 21 && player.points > 21)
//             {scoreWindow.innerHTML = "Nobody wins tonight..."}
//             else if (dealer.points > 21 && player.points < 21)
//             {scoreWindow.innerHTML = "Player winns!"}
//             else if (dealer.points < 21 && player.points > 21)
//             {scoreWindow.innerHTML = "Dealer won..."}
//         }
//         else {
//             if (dealer.points == player.points)
//             {scoreWindow.innerHTML = "A tie"}
//             else if (dealer.points < player.points)
//             {scoreWindow.innerHTML = "Player winns!"}
//             else if (dealer.points > player.points)
//             {scoreWindow.innerHTML = "Dealer won..."}   
//             }
//         scoreWindow.hidden = false;
//     }    
//     }
function checkScore(){
    if ((player.points >= 17 && dealer.points >=17) || (player.points >=21 || dealer.points >=21)) {
        if (dealer.blackJack == true && player.blackJack == true) {player.win = true; dealer.win = true;
        console.log('1')}
        else if (dealer.blackJack == true) {dealer.win = true; console.log('2')}
        else if (player.blackJack == true) {player.win = true; console.log('3')}
        else if (player.points > 21 && dealer.points <= 21) {dealer.win = true; console.log('4')}
        else if (player.points <= 21 && dealer.points > 21) {player.win = true; console.log('5')}
        else if (player.points <=21 && dealer.points <=21) {
            if (player.points > dealer.points) {player.win = trueconsole.log('6')}
            else if (player.points < dealer.points) {dealer.win = true; console.log('7')}
        } else {console.log('both over 21')}

        if (player.win == true && dealer.win == true){
        scoreLoose.innerHTML = "A tie";
        scoreLoose.hidden = false;
        } else if (player.win == false && dealer.win == false) {
        scoreLoose.innerHTML = "Nobody wins tonight";
        scoreLoose.hidden = false;
        } else if (player.win == false && dealer.win == true)
        {scoreLoose.innerHTML = "Dealer won...";
        scoreLoose.hidden = false;}
        else if (player.win == true && dealer.win == false){
        scoreWin.innerHTML = "Player winns!";
        scoreWin.hidden = false;}
    }
    }  
