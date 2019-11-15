//umiejscowienie bomb na planszy
//ilość pól na planszy 9x9 => 81
var gameBoard = new Array();
var ifSquare = new Array();
var numOfBombs = 13;
const rows = 9;
const columns = 9;
const amountOfElements = rows * columns;
var leftUpperSquare = [];
var squareDivs = document.querySelectorAll("div");



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
                (isInBoard(x - 1, y - 1) | 0) +
                (isInBoard(x - 1, y) | 0) +
                (isInBoard(x - 1, y + 1) | 0) +
                (isInBoard(x, y - 1) | 0) +
                (isInBoard(x, y + 1) | 0) +
                (isInBoard(x + 1, y - 1) | 0) +
                (isInBoard(x + 1, y) | 0) +
                (isInBoard(x + 1, y + 1) | 0);
        }
    }
}

function isInBoard(x, y) {
    if (x >= 0 && y >= 0 && x < columns && y < rows) {
        return gameBoard[x][y].ifBomb;
    }
}

function isInBoardBoolean(x, y) {
    return (x >= 0 && y >= 0 && x < columns && y < rows) ? true : false;
}

//sprawdzamy gora dol prawo lewo
// jezeli w ktoryms bomba to zwraca true
function checkNeighbor(x, y, direction) {
    // rowCurrent*columns+columnCurrent  <- określenie indeksu dla wiersza i kolumny
    let indexUp = (x - 1) * columns + y;
    let indexDown = (x + 1) * columns + y;
    let indexRight = x * columns + y + 1;
    let indexLeft = x * columns + y - 1;
    switch (direction) {
        case "up":
            return (ifSquare.includes(indexUp) === true) ? true : false;
        case "right":
            return (ifSquare.includes(indexRight) === true) ? true : false;
        case "down":
            return (ifSquare.includes(indexDown) === true) ? true : false;
        case "left":
            return (ifSquare.includes(indexLeft) === true) ? true : false;

    }
}

// x y - kliknięty element na poczatku
function checkBorder(x, y) {

    gameBoard[x][y].checked = true;
    if (leftUpperSquare[0] > x && leftUpperSquare[1] > y) {
        leftUpperSquare[0] = x;
        leftUpperSquare[1] = y;
    }
    if (isInBoardBoolean(x - 1, y) === true) {
        if (checkNeighbor(x, y, "up") === false && gameBoard[x - 1][y].checked === false && gameBoard[x - 1][y].value == 0) {
            checkBorder(x - 1, y);
        }
    }
    if (isInBoardBoolean(x, y + 1) === true) {
        if (checkNeighbor(x, y, "right") === false && gameBoard[x][y + 1].checked === false && gameBoard[x][y + 1].value == 0) {
            checkBorder(x, y + 1);
        }
    }
    if (isInBoardBoolean(x + 1, y) === true) {
        if (checkNeighbor(x, y, "down") === false && gameBoard[x + 1][y].checked === false && gameBoard[x + 1][y].value == 0) {
            checkBorder(x + 1, y);
        }
    }
    if (isInBoardBoolean(x, y - 1) === true) {
        if (checkNeighbor(x, y, "left") === false && gameBoard[x][y - 1].checked === false && gameBoard[x][y - 1].value == 0) {
            checkBorder(x, y - 1);
        }
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

// 
console.log("*******************************")
// console.log(checkNeighbor(5,2))

//

leftUpperSquare.push(6, 6)
// console.log(checkBorder(6, 6))
// console.log("legtUppersquare" + leftUpperSquare[0] + "\t" + leftUpperSquare[1])

odkryj(6, 6)
//

//wypisuje ładnie macierz z checked ;)
console.log("wypisuje ładnie macierz z checked  ;)")
for (let x = 0; x < rows; x++) {
    let tempRow = "";
    for (let y = 0; y < columns; y++) {
        tempRow += gameBoard[x][y].checked + "\t"
    }
    console.log(tempRow)
}

function odkryj(x, y) {

    gameBoard[x][y].checked = true;
    squareDivs[x * columns + y].classList.add("showed");
    if (gameBoard[x][y].value != 0)
        squareDivs[x * columns + y].innerHTML = gameBoard[x][y].value;

    if (gameBoard[x][y].value == 0) {
        if (y > 0 && gameBoard[x][y].checked === false)
            odkryj(x, y - 1);
        if (y < (columns - 1) && gameBoard[x][y + 1].checked === false)
            odkryj(x, y + 1);
        if (x < (rows - 1) && gameBoard[x + 1][y].checked === false)
            odkryj(x + 1, y);
        if (x > 0 && gameBoard[x - 1][y].checked === false)
            odkryj(x - 1, y);
        if (y > 0 && x > 0 && gameBoard[x - 1][y - 1].checked === false)
            odkryj(x - 1, y - 1);
        if (y > 0 && x < (rows - 1) && gameBoard[x + 1][y - 1].checked === false)
            odkryj(x + 1, y - 1);
        if (y < (columns - 1) && x < (rows - 1) && gameBoard[x + 1][y + 1].checked === false)
            odkryj(x + 1, y + 1);
        if (y < (columns - 1) && x > 0 && gameBoard[x - 1][y + 1].checked === false)
            odkryj(x - 1, y + 1);

    }

}

/////////////////////////////////////////
//showing on website
///////////////////////////////////////

console.log(squareDivs)

for (let i = 0; i < squareDivs.length; i++) {
    squareDivs[i].addEventListener("click", function () {
        console.log(i);
        // rowCurrent*columns+columnCurrent  <- określenie indeksu dla wiersza i kolumny
        let columnCurrent = i % columns;
        let rowCurrent = (i - columnCurrent) / rows;
        console.log("bomba" + gameBoard[rowCurrent][columnCurrent].ifBomb);
        if (gameBoard[rowCurrent][columnCurrent].ifBomb === 1) {
            squareDivs[i].classList.add("bomb");
            alert('KONIEC');

        } else if (gameBoard[rowCurrent][columnCurrent].value != 0) {
            squareDivs[i].classList.add("showed");
            squareDivs[i].innerHTML = gameBoard[rowCurrent][columnCurrent].value;
        } else {
            odkryj(rowCurrent, columnCurrent);
        }
    });
    squareDivs[i].addEventListener("contextmenu", function () {
        squareDivs[i].classList.add("flag");
        // return false; //dislable default right click menu
    });
}

