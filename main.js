function renderApp() {
    var AppBox = document.getElementById("app");
    AppBox.innerHTML =
        AppBox.innerHTML +
        `
        <form name="Form" class="container" action="javascript:void(0);">
            <div class="button">name:<input class="inputname" value="" autocomplete="off" type="text" name="FirstName">
            </div>
            <button onclick="getName()" class="next">
                    <div class="fa fa-angle-double-right" style="font-size:4vw;color:coral"></div>
            </button>
        </form>`;
}

function getName() {
    var name = document.forms["Form"]["FirstName"].value;
    var AppBox = document.getElementById("app");
    var css_file = document.getElementById('css_file');

    if (name == null || name == "") {
        alert("Musisz podać imię !");
        return false;
    } else {
        var savedName = name;
        console.log(savedName);
        css_file.setAttribute('href', 'stylefabula.css');
        AppBox.innerHTML =
            `<div class="bigbox">
        <div class="story">
            <div class="circle">
                <div class="buttoncircle"></div>
                <button class="buttoncircle" onclick="goToFabula()"></button>
                <button class="buttoncircle"></button>
            </div>
            <p style="color: rgb(85, 76, 68); font-size: 3vw; margin-left: 25%; text-shadow: 0.1vw 0.1vw rgb(85, 76, 68);">What's going on?</p>
            <p style = "color: rgb(85, 76, 68); font-size:1.3vw" > The Madrid sun was breaking into the room through the curtains.A
            windmill was buzzing quietly in the background.In a moment you were supposed to finish your work and
            gather at home.There was no one
            else inthe office apart from you.You were finishing the last project
            concerning new electronic banking security features in the National Bank of Spain.Suddenly your
            computer screen went out, and a moment later you saw this message: </br> <b> Good Afternoon, ` +
            savedName +
            `</span>. Casino del Papel. Today, at 8:00 p.m. You have to show up. M&M </b> </br> We also know that you are the only person who is able to attach a new security system. But briefly, we can't allow it. We could remove ourselves silently, but we decided to give you a chance and have some fun at the same time. 
            We hope you like to play games. Whether you win or not will determine your life. Winning means that we will give you a suitcase of money and your task will be to disappear from Spain. If you lose, we will kill you. Now think carefully:
            </p>
        </div>
    </div>`;
    }
}

function goToFabula() {
    var AppBox = document.getElementById("app");
    var css_file = document.getElementById('css_file');
    css_file.setAttribute('href', 'fabula2.css');
    AppBox.innerHTML = ` <div class="bigbox">
        <div class="story">
            <div class="circle">
                <button class="buttoncircle"></button>
                <button class="buttoncircle"></button>
                <button class="buttoncircle" onclick="goToQuestion()"></button>
            </div>
            <p
                style="color: rgb(85, 76, 68); font-size: 3vw; margin-left: 25%; text-shadow: 0.1vw 0.1vw rgb(85, 76, 68);">
                What's going on?</p>
            <p style="color: rgb(85, 76, 68); font-size:1.7vw"> There were only two men sitting at the table in the
                middle. They took a finger at you. As soon as you sat next to them, one of them started talking.
                ,,Name”, we know what you do at work. We also know that you are the only person who is able to attach a
                new security system. But briefly, we can't allow it. We could remove ourselves silently, but we decided
                to give you a chance and have some fun at the same time.
                We hope you like to play games. Whether you win or not will determine your life. Winning means that we
                will give you a suitcase of money and your task will be to disappear from Spain. If you lose, we will
                kill you. Now think carefully:
            </p>
        </div>

    </div>`
}

function goToQuestion() {
    var AppBox = document.getElementById("app");
    var css_file = document.getElementById('css_file');
    css_file.setAttribute('href', 'izastyle.css');
    AppBox.innerHTML = `<img class="bg" src="img/machines.png">
    <div class="cover">
    <div class="textBox moralQuestion">
        <p>
        There is a train that, much to your horror, is about to run over your closest family members, who have been tied to its track. It just so happens that you have just enough time to flip a switch that will send the train down a different track, saving them. However, tied to the other track, are ten innocent people in danger of being run over. You can either choose saving you family members, but letting ten innocent people die or sacrificing the ones you love for the sake of saving more lives. What would you do?
        </p>
    </div>

    <div class="options">

    <div class="textBox op1" onclick="goToSaperRules()">
        <p>Save the family members</p>
    </div>
    <div class="textBox op2" onclick="goToBlackJackRules1()">
        <p>Save 10 innocent people</p>
    </div>

    </div>
    </div>


    <style>
     @media (max-width: 1380px){
        p{
            font-size: 0.9rem;
        }
    }
    @media (max-width: 1275px){
        p{
            font-size: 0.8rem;
        }
    }
    @media (max-width: 1170px){
        p{
            font-size: 0.7rem;
        }
    }</style>`

}


function goToBlackJackRules1() {
    var AppBox = document.getElementById("app");
    var css_file = document.getElementById('');
    AppBox.innerHTML = `<img class="bg" src="img/table.png">
    <div class="cover">
    <div class="textBox">
      <div class="heading">
          <div class="dots">
          <div class="dot redDot"></div>
          <div class="dot" onclick="goToBlackJackRules2()"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          </div>
          <header class="bigHeader">BlackJack</header>
          <div class="dots"></div>
      </div>
        <header class="mediumHeader">Rules - Card Values</header>
      <div class="content">
        <div class="picture">
          <img class="rulesImg" src="img/cardValues.png">
        </div>
        <div class="text">
        <p class="middle">
        You need to know the card values to know how to play 21. Cards 2-10 are worth the value of the number on the face of the card. Numbered cards are worth the corresponding number indicated on the card. Face cards (those with pictures on them) are worth 10, except for the Ace, which is worth 1 or 11. A picture combined with an Ace is Blackjack (a value of 21).
        </p>
        </div>
      </div>
    </div>
    </div>`
}

function goToBlackJackRules2() {
    var AppBox = document.getElementById("app");
    var css_file = document.getElementById('');
    AppBox.innerHTML = `<img class="bg" src="img/table.png">
    <div class="cover">
    <div class="textBox">
      <div class="heading">
          <div class="dots">
          <div class="dot"></div>
          <div class="dot redDot"></div>
          <div class="dot" onclick="goToBlackJackHistory()"></div>
          <div class="dot"></div>
          </div>
          <header class="bigHeader">BlackJack</header>
        <div class="dots"></div>
      </div>
        <header class="mediumHeader">Rules - Game end</header>
      <div class="content">
        <div class="picture">
        <img class="rulesImg" src="img/gameOver.jpg">
        </div>
        <div class="text">
            <p>The objective of the game is to beat the dealer in one of the following ways:
            <ul>
              <li>Get 21 points on the player's first two cards (called a "blackjack" or "natural"), without a dealer blackjack;</li>
              <li>Reach a final score higher than the dealer while exceeding 17 points and without going over 21;</li>
              <li>Let the dealer draw additional cards until their hand exceeds 21 ("busted").</li>
              </ul>
            </p>
        </div>
      </div>
    </div>
    </div>`
}

function goToBlackJackHistory() {
    var AppBox = document.getElementById("app");
    var css_file = document.getElementById('');
    AppBox.innerHTML = `<img class="bg" src="img/table.png">
    <div class="cover">
    <div class="textBox">
      <div class="heading">
          <div class="dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot redDot""></div>
          <div class="dot" onclick="goToBlackJack()"></div>
          </div>
          <header class="bigHeader">BlackJack</header>
          <div class="dots"></div>
        </div>
        <header class="mediumHeader">History</header>
          <p>
          Blackjack's precursor was twenty-one, a game of unknown origin. The first written reference is found in a book by the Spanish author Miguel de Cervantes, most famous for writing Don Quixote. Cervantes was a gambler, and the main characters of his tale "Rinconete y Cortadillo", are a couple of cheats working in Seville. They are proficient at cheating at veintiuna (Spanish for twenty-one), and state that the object of the game is to reach 21 points without going over and that the ace values 1 or 11. This short story was written between 1601 and 1602, implying that ventiuna was played in Castile since the beginning of the 17th century or earlier<br>
          When twenty-one was introduced in the United States, gambling houses offered bonus payouts to stimulate players' interest. One such bonus was a ten-to-one payout if the player's hand consisted of the ace of spades and a black jack. This hand was called a "blackjack", and the name stuck to the game even though the ten-to-one bonus was soon withdrawn. In the modern game, a blackjack refers to any hand of an ace plus a ten or face card regardless of suits or colors.
          
          </p>
      </div>
      </div>`
}


function goToSaperRules() {
    var AppBox = document.getElementById("app");
    var css_file = document.getElementById('css_file');
    css_file.setAttribute('href', 'saperrules.css');
    AppBox.innerHTML = `<div class="bigbox">
        <div class="story">
            <div class="circle">
                <div class="buttoncircle"></div>
                <div class="buttoncircle" onclick="goToSaperHistory()"></div>
                <div class="buttoncircle"></div>
            </div>

            <p
                style="color: rgb(85, 76, 68); font-size: 3vw; margin-left: 25%; text-shadow: 0.1vw 0.1vw rgb(85, 76, 68);">
                Rules</p>
            <p style="color: rgb(85, 76, 68); font-size: 1.8vw;"> The game consists in discovering individual fields on
                the board in such a way as to avoid hitting a mine. On each of the discovered fields there is a number
                of mines that directly touch the field (from one to eight; if the min is zero, there is no number
                entered in the field). Use these numbers to figure out where the mines are hidden. If you mark a given
                field with a flag, it is protected against exposing the mines.</p>
        </div>

    </div>
</body>`
}

function goToSaperHistory() {
    var AppBox = document.getElementById("app");
    var css_file = document.getElementById('css_file');
    css_file.setAttribute('href', 'saperhistory.css');
    AppBox.innerHTML = `<div class="bigbox">
        <div class="story">
            <div class="circle">
                <div class="buttoncircle"></div>
                <div class="buttoncircle"></div>
                <div class="buttoncircle" onclick="goToSaperGame()"></div>
            </div>

            <p style="color: rgb(85, 76, 68); font-size: 3vw; margin-left: 25%; text-shadow: 0.1vw 0.1vw rgb(85, 76, 68);">
                History</p>
            <p style="color: rgb(85, 76, 68); font-size: 1.8vw;">  In 1981 the history of one of the most famous and simplest computer games in history began. Added as an accessory to any Microsoft Windows system (up to version 7), it quickly became incredibly popular. This inconspicuous game was probably a nightmare for both office workers and their managers, who might have noticed a decrease in productivity of their employees.
Saper first appeared on Windows 3.1 in 1992. It's worth noting that the programmers didn't only want to make the players happy, as the title was supposed to make them used to using the right and left mouse button. Was it successful? This is probably a rhetorical question.</p>
        </div>

    </div>`
}


function goToSaperGame() {
    var AppBox = document.getElementById("app");
    var css_file = document.getElementById('css_file');
    css_file.setAttribute('href', 'STARYSAPER.css');
    AppBox.innerHTML = `  
    <div class="bigbox">
    <div class="story">
        <div class="circle">
            <a href="saperhistory.html" class="buttoncircle"></a>
            <a href="saperrules.html" class="buttoncircle"></a>
            <div class="buttoncircle"></div>
        </div>
        <p style="color: rgb(85, 76, 68); font-size: 3vw; margin-left: 25%; text-shadow: 0.1vw 0.1vw rgb(85, 76, 68);">
        Game</p>
        <div class="control">
        <section>

                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
                <v></v>
    
            </section>
    
    

            
        </div> 
        </div>
        </div>`
}


function goToBlackJack() {
    var AppBox = document.getElementById("app");
    var css_file = document.getElementById('css_file');
    css_file.setAttribute('href', 'styleBlackJack.css');
    AppBox.innerHTML = `<img class="bg" src="img/table.png">
    <div class="cover">
        <div class="textBox">
            <div class="heading">
                <div class="dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot redDot"></div>
                </div>
            </div>

            <div class="game">

                <div class="pointsArea">
                    <div class="points numDealerPoints">
                        <p id="Dealer">0</p>
                    </div>
                    <div class="points numPlayerPoints">
                        <p id="Player">0</p>
                    </div>
                </div>

                <div class="cardsArea">
                    <div id="DealerCards" class="dealerCardsArea"></div>
                    <div id="PlayerCards" class="playerCardsArea"></div>
                </div>

                <div class="buttons">
                    <div class="btnField">
                        <div onclick="playGame();" class="add btnRound"><img src="img/plus.png"></div>
                    </div>

                    <div class="btnField">
                        <div onclick="hold();" class="hold btnRound"><img src="img/hand.png"></div>
                    </div>
                </div>

                <a href="">
                    <div id="winWindow" class="scoreWindow">
                        <div class="covcov">
                        <p id="win">Put the score here</p>
                        </div>
                    </div>
                </a>

                <a href="tryAgain.html">
                    <div id="looseWindow" class="scoreWindow">
                    <div class="covcov">
                        <p id="loose">Put the score here</p>
                    </div>
                    </div>
                </a>

            </div>
        </div>
    </div> `
}
// ciekawe, czasem nie rozumiem jak komputer wie skad ma brać te rzeczy 
//kurcze no, nie działą
// tam, gdzie zmieniłam buttony na divy to nie tam, gdzie powinien działać ten js
// czekaj, choć...
//oki 