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

    <div class="textBox op1" onclick="goToSaper()">
        <p>Save the family members</p>
    </div>
    <div class="textBox op2" onclick="goToBlacjJack()">
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
    }
    </style>`

}

function goToSaper() {
    var AppBox = document.getElementById("app");
    var css_file = document.getElementById('css_file');
    css_file.setAttribute('href', 'saper.css');
    AppBox.innerHTML = ` saper HTML `
}

function goToBlacjJack() {
    var AppBox = document.getElementById("app");
    var css_file = document.getElementById('css_file');
    css_file.setAttribute('href', 'styleBlackJack.css');
    AppBox.innerHTML = ` <img class="bg" src="img/table.png">
    <div class="cover">
        <div class="textBox">
            <div class="heading">
                <div class="dots">
                    <a href="BJ_rules.html">
                        <div class="dot"></div>
                    </a>
                    <a href="BJ_rules2.html">
                        <div class="dot"></div>
                    </a>
                    <a href="BJ_history.html">
                        <div class="dot"></div>
                    </a>
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

                    <div class="dealerCardsArea">
                        <div class="card dealerCard1"><img id="DealerCard1"></div>
                        <div class="card dealerCard2"><img src="deck/green_back.png" id="DealerCard2"></div>
                        <div class="card dealerCard3"><img id="DealerCard3"></div>
                        <div class="card dealerCard4"><img id="DealerCard4"></div>
                        <div class="card dealerCard5"><img id="DealerCard5"></div>
                        <div class="card dealerCard6"><img id="DealerCard6"></div>
                    </div>

                    <div class="playerCardsArea">
                        <div class="card playerCard1"><img id="PlayerCard1"></div>
                        <div class="card playerCard2"><img id="PlayerCard2"></div>
                        <div class="card playerCard3"><img id="PlayerCard3"></div>
                        <div class="card playerCard4"><img id="PlayerCard4"></div>
                        <div class="card playerCard5"><img id="PlayerCard5"></div>
                        <div class="card playerCard6"><img id="PlayerCard6"></div>
                    </div>

                </div>

                <div class="buttons">
                    <div class="btnField">
                        <div onclick="add();" class="add btnRound"><img src="img/plus.png"></div>
                    </div>

                    <div class="btnField">
                        <div onclick="hold();" class="hold btnRound"><img src="img/hand.png"></div>
                    </div>
                </div>

                <a href="">
                    <div id="winWindow" class="scoreWindow">
                        <p id="win">Put the score here</p>
                    </div>
                </a>

                <a href="tryAgain.html">
                    <div id="looseWindow" class="scoreWindow">
                        <p id="loose">Put the score here</p>
                    </div>
                </a>

            </div>
        </div>
    </div> `

    // poczekaj, pobiorę sobie to :)
}
// ciekawe, czasem nie rozumiem jak komputer wie skad ma brać te rzeczy 
//kurcze no, nie działą
// tam, gdzie zmieniłam buttony na divy to nie tam, gdzie powinien działać ten js
// czekaj, choć...
//oki 