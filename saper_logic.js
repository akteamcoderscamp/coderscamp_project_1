//umiejscowienie bomb na planszy
//ilość pól na planszy 9x9 => 81
var gameBoard = new Array();
var ifSquare = new Array();
var numOfBombs=13;
class square{
    constructor(ifBomb, value){
    this.ifBomb=ifBomb;
    this.value=value;
}}
//generowanie obiektów w tablicy//
for (i=0; i<81; i++){
    gameBoard[i]=new square(0,0)
}
//losowanie bomb//
while(numOfBombs>0){
    var randomSquare=Math.floor(Math.random()*81); 
    if(ifSquare.includes(randomSquare)===false){ // sprawdza czy na polu jest bomba
        let arrBoard= gameBoard[randomSquare]; //wyciąga obiekt z tablicy
        arrBoard.ifBomb=1;
        ifSquare.push(randomSquare);
        numOfBombs --;
    }
}
//sprawdzenie sąsiadów
function checkBomb(squareNum){
    let arrBoard= gameBoard[squareNum]; //wyciąga obiekt z tablicy 
if (arrBoard.ifBomb===1) return true;
else return false;
}

console.log(checkBomb(7),ifSquare)