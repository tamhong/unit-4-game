//GeneralRandom Number Generator
function randomNumber (x, y) {
    return Math.floor(Math.random() * ((x-y)+1) +y);
}

//Specific Random Number Generators

var computerChoice = randomNumber(120, 19);

var crystal1 = randomNumber(12, 1);
var crystal2 = randomNumber(12, 1);
var crystal3 = randomNumber(12, 1);
var crystal4 = randomNumber(12, 1); 

var userScore = 0;
var wins =0;
var losses=0;

//Winning Number Initial Display:

$("#winning-number").text("Winning Number: " + computerChoice)

//Update Score

function scoreboard () {
    $("#winning-number").text("Winning Number: " + computerChoice)
    $("#user-number").text("Current Total: " + userScore);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " +losses);
}

//Resets game

function resetMsg () {
    $("#game-alert").html("&nbsp;");
}

function reset () {
    userScore = 0;
    computerChoice = randomNumber (120, 19);
    crystal1= randomNumber(12, 1);
    crystal2= randomNumber(12, 1);
    crystal3= randomNumber(12, 1);
    crystal4= randomNumber(12, 1);
    scoreboard();
}

//Win or lose

function winner () {
    wins++
    $("#game-alert").text("Yay you win! Play again!")
}

function loser () {
    losses++
    $("#game-alert").text("Boo you lost! Try again!")
}

//Here comes the actual game:

$("#diamond").on ("click", function() {
    resetMsg();
    userScore = userScore + crystal1;
    scoreboard();
    if (userScore === computerChoice) {
        winner();
        reset();
    }
    if (userScore > computerChoice) {
        loser();
        reset();
    }
})

$("#emerald").on ("click", function() {
    resetMsg();
    userScore = userScore + crystal2;
    scoreboard();
    if (userScore === computerChoice) {
        winner();
        reset();
    }
    if (userScore > computerChoice) {
        loser();
        reset();
    }
})

$("#heart").on ("click", function() {
    resetMsg();
    userScore = userScore + crystal3;
    scoreboard();
    if (userScore === computerChoice) {
        winner();
        reset();
    }
    if (userScore > computerChoice) {
        loser();
        reset();
    }
})

$("#five").on ("click", function() {
    resetMsg();
    userScore = userScore + crystal4;
    scoreboard();
    if (userScore === computerChoice) {
        winner();
        reset();
    }
    if (userScore > computerChoice) {
        loser();
        winner();
    }
})