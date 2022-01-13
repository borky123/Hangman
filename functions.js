let lives = 6;
let choosedWord = null;
let wonCounter = 0;
words = [
    "MACBOOK",
    "TOYOTA",
    "FISH",
    "HAMBURGER",
    "SNOOPDOG",
    "QUARANTINE",
    "WELLCODE",
    "TESLA",
    "HEETS",
    "HELICOPTER",
    "POKEMON",
    "BITCOIN",
    "MERCEDES",
    "SAILOR",
    "WATERPROOF",
    "RADAR",
    "BARBEQUE",

]

function createButtons() {
    chooseWord();
    console.log(choosedWord);
    for (i = 65; i <= 90; ++i) {
        var letter = String.fromCharCode(i);
        var div = document.getElementById("lettersButtons");
        div.innerHTML += "<button class='keyboard' id='" + letter +  
        "' onClick= 'letterCheck(this.id)'>" + letter + "</button>" + " ";
    }
    document.getElementById("startButton").disabled = true;
    document.getElementById("livesLeft").style.visibility = "visible";
}

function chooseWord() {
    choosedWord = words[Math.floor(Math.random() * words.length)];
    //CREATE THE LETTER BOXES FOR SEARCHED WORD
    for (i = 1; i <= choosedWord.length; ++i) {
        var div = document.getElementById("searchedWord");
        div.innerHTML += "<div class='box' id='" + i + "'></div>";
    }
}

function letterCheck(btnValue) {
    var findedPos = false;
    for (i = 0; i < choosedWord.length; ++i) {
        if (choosedWord[i] === btnValue) {
            document.getElementById(i + 1).textContent = btnValue;
            findedPos = true;
            ++wonCounter;
            if (wonCounter == choosedWord.length) {
                gameWon();
            }           
        }
    }
    if (findedPos == false) {
        document.getElementById("lives").textContent = --lives;
        document.getElementById(btnValue).style.backgroundColor = "#e95f5a";
        if (lives == 0) {
            gameOver();
        }
    }
    document.getElementById(btnValue).disabled = true;
    console.log(choosedWord);
}

function gameOver() {
    document.getElementById("gameFinished").style.visibility = "visible";
    document.getElementById("gameFinished").textContent = "GAME OVER !!!";
    document.getElementById("correctAnswer").style.visibility = "visible";
    document.getElementById("correctAnswer").textContent += "Correct answer is: " + choosedWord;
    document.getElementById("searchedWord").style.visibility = "hidden";
    document.querySelectorAll('button.keyboard').forEach(elem => {
        elem.disabled = true;
    });
}

function gameWon() {
    document.getElementById("gameFinished").style.visibility = "visible";
    document.getElementById("gameFinished").textContent = "WOW!! You WON ";
    document.getElementById("correctAnswer").style.visibility = "visible";
    document.getElementById("correctAnswer").textContent += choosedWord;
    document.getElementById("searchedWord").style.visibility = "hidden";
    document.querySelectorAll('button.keyboard').forEach(elem => {
        elem.disabled = true;});
    }