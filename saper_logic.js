//umiejscowienie bomb na planszy
//ilość pól na planszy 9x9 => 81
var gameBoard = new Array();
var ifSquare = new Array();
var numOfBombs = 13;
const rows = 9;
const columns = 9;
const amountOfElements = rows * columns;

class Square {
    constructor(ifBomb, value, checked) {
        this.ifBomb = ifBomb;
        this.value = value;
        this.checked = checked;
    }
}

/////////////////////////////////////////////////////////////////////////////////////
/* tu funkcje definiowane */ 
/////////////////////////////////////////////////////////////////////////////////////


//sprawdza czy na polu jest bomba
function checkBomb(squareNum) {
    return gameBoard[squareNum].ifBomb === 1 ? true : false;
}

//policz ile wokół jest bomb
function countNeighbor() {
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < columns; y++) {
            gameBoard[x][y].value =
                (checkNeighbor(x - 1, y - 1) | 0) +
                (checkNeighbor(x - 1, y) | 0) +
                (checkNeighbor(x - 1, y + 1) | 0) +
                (checkNeighbor(x, y - 1) | 0) +
                (checkNeighbor(x, y + 1) | 0) +
                (checkNeighbor(x + 1, y - 1) | 0) +
                (checkNeighbor(x + 1, y) | 0) +
                (checkNeighbor(x + 1, y + 1) | 0);
        }
    }
}

function checkNeighbor(x, y) {
    if (x >= 0 && y >= 0 && x < columns && y < rows) {
        return gameBoard[x][y].ifBomb;
    }
}

/////////////////////////////////////////////////////////////////////////////////////
/* tu już wywołanie kolejno funkcji */ 
/////////////////////////////////////////////////////////////////////////////////////


//tworzenie tablicy dwuwymiarowej
for (let x = 0; x < rows; x++) {
    gameBoard[x] = [];
    for (let y = 0; y < columns; y++) {
        gameBoard[x][y] = new Square(0, 0, false);
    }
}

//losowanie bomb//
while (numOfBombs > 0) {
    var randomSquare = Math.floor(Math.random() * amountOfElements);
    if (ifSquare.includes(randomSquare) === false) { // sprawdza czy na polu jest juz bomba
        // rowCurrent*columns+columnCurrent  <- określenie indeksu dla wiersza i kolumny
        let columnCurrent = randomSquare % columns;
        let rowCurrent = (randomSquare - columnCurrent) / rows;
        gameBoard[rowCurrent][columnCurrent].ifBomb = 1;
        ifSquare.push(randomSquare);
        numOfBombs--;
    }
}

//obliczanie ilosci bomb wokół
countNeighbor();

/////////////////////////////////////////////////////////////////////////////////////
/* tu sobie testuje, czemu nie działa */ 
/////////////////////////////////////////////////////////////////////////////////////


//wypisuje ładnie macierz z bombami ;)
console.log("wypisuje ładnie macierz z bombami ;)")
for (let x = 0; x < rows; x++) {
    let tempRow = "";
    for (let y = 0; y < columns; y++) {
        tempRow += gameBoard[x][y].ifBomb + "\t"
    }
    console.log(tempRow)
}

//wypisuje ładnie macierz z iloscia bomb ;)
console.log("wypisuje ładnie macierz z iloscia bomb ;)")
for (let x = 0; x < rows; x++) {
    let tempRow = "";
    for (let y = 0; y < columns; y++) {
        tempRow += gameBoard[x][y].value + "\t"
    }
    console.log(tempRow)
}