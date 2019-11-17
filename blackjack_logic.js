class playerClass {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.cards = [];
        this.blackJack = false;
        this.win = false;
    }
}
let dealer = new playerClass('Dealer');
let player = new playerClass('Player');

const checkBlackJack = (person) => person.cards.length == 2 && person.points == 21 ? true : false;

//definiowanie kart
class card {
    constructor(suit, name, value, cardImg) {
        this.suit = suit;
        this.name = name;
        this.value = value;
        this.cardImg = cardImg;
    }
}

var deck = new Array();
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];



function createDeck(){
    for (i = 0; i < suits.length; i++){
        for (j = 2; j < 15 ; j++){
            if(j < 11){
                var value = j;
                var name = value.toString();
            }else if (j < 14){
                value = 10;
                switch (j){
                    case 11: name="J";
                    break;
                    case 12: name="Q";
                    break;
                    case 13: name="K";
                }
            }else {
                value = 11; //Default for Ace will be 11, decreased later in a game to 1 if needed
                name = "A"
            }
        var cardImg = name + suits[i].charAt(0) + ".png";
        const newCard = new card (suits[i], name, value, cardImg);

        deck.push(newCard)
        }
        
    }

}


function playGame(){
    if (player.cards.length == 0 && dealer.cards.length == 0){
        createDeck();
        settingCards();
    } else {
        add();
    }
}

//we draw 2 cards for player and 1 for dealer(one that is hiden isn't draw yet - easier for showing score)
function settingCards(){
        cardDraw(player);
        cardDraw(player);
        player.blackJack = checkBlackJack(player);
        changePointsForAces(player);  //the case where player gets 2 Aces in firs round
        cardDraw(dealer);
        //adding green card to the flexbox container
        const newDiv = document.createElement('div');
        const newImg = document.createElement('img');
        newImg.src = "deck/green_back.png";
        newImg.id = "hiddenCard";
        newDiv.className = "card";
        newDiv.id = "hiddenCardDiv";
        newDiv.appendChild(newImg);
        document.getElementById("DealerCards").appendChild(newDiv);
        
    if (checkBlackJack(player)){
        hold();
    } 
}


function hold(){
    //remove hidden(green) card
    document.getElementById("hiddenCard").remove();
    document.getElementById("hiddenCardDiv").remove();
    //draw 2nd dealer card - the dealers face-down card is turned up.
    if (dealer.cards.length === 1) {
        cardDraw(dealer)
    }  
    dealer.blackJack = checkBlackJack(dealer)
    checkScoreDealer();
    while (dealer.points < 17){
        //TODO: make wait here around 0,5s so dealer cards will be noticed I tried setTimeout(cardDraw(dealer),500);     
        cardDraw(dealer);      
        checkScoreDealer();
    }
    }

function add(){
    if (player.points < 21) {
       cardDraw(player);
       checkScorePlayer();
    }
}

function cardDraw(person){
    if (dealer.win == false && player.win == false){
        var num = Math.floor(Math.random()*deck.length);
        var drewCard = deck[num];
        deck.splice(num,1);  //remove the card from the deck
        person.cards.push(drewCard);
        person.points = person.points + drewCard.value;
        document.getElementById(person.name).innerHTML = person.points;
        const newDiv = document.createElement('div');
        const newImg = document.createElement('img');
        newImg.src = "deck/" + drewCard.cardImg;
        newDiv.className = "card"
        newDiv.appendChild(newImg);
        document.getElementById(person.name + "Cards").appendChild(newDiv);

}
}


function changePointsForAces(person){
    if(person.points > 21){
        let ace = person.cards.find(ace => ace.value == 11); //find the Ace
        if (typeof ace !== 'undefined'){  //if Ace was find
            ace.value = 1;      //change it's value so it won't be found next time
            person.points -= 10;
            document.getElementById(person.name).innerHTML = person.points;
        }
    }
}

function checkScorePlayer(){
    var scoreLoose = document.getElementById('loose');
    var looseWindow = document.getElementById('looseWindow');
    changePointsForAces(player);
    if (player.points > 21) {
        dealer.win = true;
        scoreLoose.innerHTML = "BUST - You lost";
        looseWindow.style.display = 'initial';
    } 
}

function checkScoreDealer(){
    changePointsForAces(dealer);
    var scoreWin = document.getElementById('win');
    var scoreLoose = document.getElementById('loose');
    var winWindow = document.getElementById('winWindow');
    var looseWindow = document.getElementById('looseWindow');
    
    if (dealer.points > 21) {
        player.win = true;
        scoreWin.innerHTML = "You win! This time...";
        scoreWin.hidden = false;
        winWindow.style.display = 'initial';
    } else if (player.blackJack == true && dealer.blackJack == false) {
        player.win = true;
        scoreWin.innerHTML = "BlackJack! You win... this time";
        winWindow.style.display = 'initial';
    } else if (player.blackJack == false && dealer.blackJack == true) {
        dealer.win = true;
        scoreLoose.innerHTML = "Dealer's BlackJack! You loose more than just a game...";
        looseWindow.style.display = 'initial';
    } else if (player.blackJack == true && dealer.blackjack == true) {
        dealer.win = true;
        player.win = true;
        scoreLoose.innerHTML = "A tie.";
        looseWindow.style.display = 'initial';
    } else if (dealer.points > 16) {
        if (player.points > dealer.points) {
            player.win = true;
            scoreWin.innerHTML = "You win! This time...";
            winWindow.style.display = 'initial';
        } else if (player.points < dealer.points) {
            dealer.win = true;
            scoreLoose.innerHTML = "The dealer won. You loose more than just a game...";
            looseWindow.style.display = 'initial';
        } else {
            dealer.win = true;
            player.win = true;
            scoreLoose.innerHTML = "A tie.";
            looseWindow.style.display = 'initial';
        }
    }
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }