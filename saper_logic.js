//umiejscowienie bomb na planszy
//ilość pól na planszy 9x9 => 81
var gameBoard = new Array();
var ifSquare = new Array();
var numOfBombs = 13;
const rows = 9;
const columns = 9;
const amountOfElements = rows * columns;
var squareDivs = document.querySelectorAll("v");
var amountOfShowedElements = 0;
var clickedElements = [];

class Square {
    constructor(ifBomb, value, checked) {
        this.ifBomb = ifBomb;
        this.value = value;
        this.checked = checked;
    }
}


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

function uncover(x, y) {

    gameBoard[x][y].checked = true;
    removeFlag(x * columns + y);
    squareDivs[x * columns + y].classList.add("showed");
    amountOfShowedElements++;
    clickedElements.push(x * columns + y);
    if (gameBoard[x][y].value != 0) {
        squareDivs[x * columns + y].innerHTML = gameBoard[x][y].value;
    }
    win();
    if (gameBoard[x][y].ifBomb != 1 && gameBoard[x][y].value == 0) {
        if (y > 0 && gameBoard[x][y].checked === false)
            uncover(x, y - 1);
        if (y < (columns - 1) && gameBoard[x][y + 1].checked === false)
            uncover(x, y + 1);
        if (x < (rows - 1) && gameBoard[x + 1][y].checked === false)
            uncover(x + 1, y);
        if (x > 0 && gameBoard[x - 1][y].checked === false)
            uncover(x - 1, y);
        if (y > 0 && x > 0 && gameBoard[x - 1][y - 1].checked === false)
            uncover(x - 1, y - 1);
        if (y > 0 && x < (rows - 1) && gameBoard[x + 1][y - 1].checked === false)
            uncover(x + 1, y - 1);
        if (y < (columns - 1) && x < (rows - 1) && gameBoard[x + 1][y + 1].checked === false)
            uncover(x + 1, y + 1);
        if (y < (columns - 1) && x > 0 && gameBoard[x - 1][y + 1].checked === false)
            uncover(x - 1, y + 1);
    }
}

function removeFlag(i) {
    if (squareDivs[i].classList.contains("flag")) {
        squareDivs[i].classList.remove("flag");
    }
}

function win() {
    let greenSquareTab = Array.from(squareDivs).filter(element => {
        return element.classList.contains("showed");
    });
    if (greenSquareTab.length === amountOfElements - ifSquare.length) {
        //alert("WYGRANA")
        window.location.href = "win.html";
    }
}



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

//wypisuje ładnie macierz z checked ;)
console.log("wypisuje ładnie macierz z checked  ;)")
for (let x = 0; x < rows; x++) {
    let tempRow = "";
    for (let y = 0; y < columns; y++) {
        tempRow += gameBoard[x][y].checked + "\t"
    }
    console.log(tempRow)
}

/////////////////////////////////////////
//showing on website
///////////////////////////////////////

console.log(squareDivs)

for (let i = 0; i < squareDivs.length; i++) {
    squareDivs[i].addEventListener("click", function () {
        // rowCurrent*columns+columnCurrent  <- określenie indeksu dla wiersza i kolumny
        if (clickedElements.includes(i) === false) {
            let columnCurrent = i % columns;
            let rowCurrent = (i - columnCurrent) / rows;
            if (gameBoard[rowCurrent][columnCurrent].ifBomb === 1) {
                for (let j = 0; j < ifSquare.length; j++) {
                    removeFlag(ifSquare[j]);
                    squareDivs[ifSquare[j]].classList.add("bomb");
                }
                setTimeout(func, 2000);
                    function func() {
                    alert('To koniec!');
                    window.location.href = "tryAgain.html"
                    }
            } else if (gameBoard[rowCurrent][columnCurrent].value != 0) {
                removeFlag(i);
                squareDivs[i].classList.add("showed");
                squareDivs[i].innerHTML = gameBoard[rowCurrent][columnCurrent].value;
                amountOfShowedElements++;
                clickedElements.push(i);
                win();
            } else {
                uncover(rowCurrent, columnCurrent);
            }
        }
    });
    squareDivs[i].addEventListener("contextmenu", function () {
        if (clickedElements.includes(i) === false) {
            console.log(clickedElements)
            squareDivs[i].classList.add("flag");
        }
    });
}

