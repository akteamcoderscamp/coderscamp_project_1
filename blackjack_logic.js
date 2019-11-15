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

//okienko z wynikiem?
let scoreWin = document.getElementById('win')
let scoreLoose = document.getElementById('loose')
let winWindow = document.getElementById('winWindow')
let looseWindow = document.getElementById('looseWindow')

//gra
createDeck();
settingCards();


function createDeck() {
    for (i = 0; i < suits.length; i++) {
        for (j = 2; j < 15; j++) {
            if (j < 11) {
                var value = j;
                var name = value.toString();
            } else if (j < 14) {
                value = 10;
                switch (j) {
                    case 11:
                        name = "J";
                        break;
                    case 12:
                        name = "Q";
                        break;
                    case 13:
                        name = "K";
                }
            } else {
                value = [1, 11];
                name = "A"
            }
            var cardImg = name + suits[i].charAt(0) + ".png";
            const newCard = new card(suits[i], name, value, cardImg);

            deck.push(newCard)
        }

    }

}

//we draw 2 cards for player and 1 for dealer(one that is hiden isn't draw yet - easier for showing score)
function settingCards() {
    cardDraw(player);
    cardDraw(player);
    player.blackJack = checkBlackJack(player);
    cardDraw(dealer);
    if (checkBlackJack(player)) {
        hold();
    }
}


function hold() {
    if (dealer.cards.length === 1) {
        cardDraw(dealer)
    } //draw 2nd dealer card - the dealers face-down card is turned up.
    dealer.blackJack = checkBlackJack(dealer)
    if (dealer.blackJack) checkScoreDealer();
    checkScoreDealer();
    while (dealer.points < 17) {
        cardDraw(dealer);
        checkScoreDealer();
    }
}


function add() {
    if (player.points < 21) {
        cardDraw(player);
        checkScorePlayer();
    }
}

function cardDraw(person) {
    if (dealer.win == false && player.win == false) {
        var num = Math.floor(Math.random() * deck.length);
        var drewCard = deck[num];
        if (drewCard.name === "A" && person.points > 10) {
            drewCard.value = 1;
        } else if (drewCard.name === "A" && person.points <= 10) {
            drewCard.value = 11;
        }
        person.cards.push(drewCard);
        person.points = person.points + drewCard.value;
        document.getElementById(person.name).innerHTML = person.points;
        document.getElementById(person.name + "Card" + person.cards.length).src = "deck/" + drewCard.cardImg;
        console.log()
    }
}


function checkScorePlayer() {
    if (player.points > 21) {
        dealer.win = true;
        scoreLoose.innerHTML = "BUST - You lost";
        looseWindow.style.display = 'initial';
    }
}

function checkScoreDealer() {
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