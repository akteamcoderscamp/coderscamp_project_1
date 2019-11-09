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
console.log(dealer, player)

//definiowanie kart
class card{
    constructor(suit, name, value){
    this.suit = suit;
    this.name = name;
    this.value = value;
    }
}
var cards= new Array();
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

for (i=0; i<suits.length; i++){
    for (j=2 ; j<15 ; j++){
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
    cards.push(newCard)
    }
    
}

console.log(cards);




