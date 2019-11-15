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

    if (name == null || name == "") {
        alert("Musisz podać imię !");
        return false;
    } else {
        var savedName = name;
        console.log(savedName);
        AppBox.innerHTML = null;
        AppBox.innerHTML =
            AppBox.innerHTML +
            `<div class="bigbox">
        <div class="story">
            <div class="circle">
                <a href="fabuła.html" class="buttoncircle"></a>
                <div class="buttoncircle"></div>
                <a href="question.html" class="buttoncircle"></a>
            </div>
            <p style="color: rgb(85, 76, 68); font-size: 3vw; margin-left: 25%; text-shadow: 0.1vw 0.1vw rgb(85, 76, 68);">What's going on?</p>
            <p style="color: rgb(85, 76, 68); font-size:1.7vw"> There were only two men sitting at the table in the middle. They took a finger at you. As soon as you sat next to them, one of them started talking. <span style="color:red;">` +
            savedName +
            `</span>, we know what you do at work. We also know that you are the only person who is able to attach a new security system. But briefly, we can't allow it. We could remove ourselves silently, but we decided to give you a chance and have some fun at the same time. 
            We hope you like to play games. Whether you win or not will determine your life. Winning means that we will give you a suitcase of money and your task will be to disappear from Spain. If you lose, we will kill you. Now think carefully:
            </p>
        </div>
    </div>`;
    }
}