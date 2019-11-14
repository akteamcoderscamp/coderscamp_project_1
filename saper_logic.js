//umiejscowienie bomb na planszy
//ilość pól na planszy 9x9 => 81
var gameBoard = new Array();
var ifSquare = new Array();
var numOfBombs=13;
class square{
    constructor(ifBomb, value, checked){
    this.ifBomb=ifBomb;
    this.value=value;
    this.checked=checked;
}}
//generowanie obiektów w tablicy//
for (i=0; i<81; i++){
    gameBoard[i]=new square(0,0, false)
}
//losowanie bomb//
while(numOfBombs>0){
    var randomSquare=Math.floor(Math.random()*81); 
    if(ifSquare.includes(randomSquare)===false){ // sprawdza czy na polu jest juz bomba
        gameBoard[randomSquare].ifBomb=1; 
        ifSquare.push(randomSquare);
        numOfBombs --;
    }
}
//sprawdza czy na polu jest bomba
function checkBomb(squareNum){
if (gameBoard[squareNum].ifBomb===1) return true;
else return false;
}
