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



/* function game (crystalId, crystalNum) {
    $(document).on("click", crystalId,function() {
        userScore = userScore + crystalNum;
        if (userScore === computerChoice) {
            wins++
            reset ()
        }
        if (userScore > computerChoice) {
            losses++
            reset ()
        }

        scoreboard ()
    })

}

game ("#diamond", crystal1);
game ("#emerald", crystal2);
game ("#heart", crystal3);
game ("#five", crystal4);   */




/*$(document).on("click", ".crystal-images", function reset() {
    if (userScore >= computerChoice) {
        userScore = 0;
        computerChoice = randomNumber (120, 19);
        crystal1= randomNumber(12, 1);
        crystal2= randomNumber(12, 1);
        crystal3= randomNumber(12, 1);
        crystal4= randomNumber(12, 1);
        $("#user-number").text("Current Total:" +userScore);
        $("#winning-number").text("Winning Number: " +computerChoice);
        game ("#diamond", crystal1);
        game ("#emerald", crystal2);
        game ("#heart", crystal3);
        game ("#five", crystal4);
    }

    scoreboard ();

})



//PSEUDOCODE:
/*
-Display crystals
-5 random numbers generated: 4 assigned to each crystal, 1 for winning number
-variable for each crystal
-click listener $(document).on("click", "#crystal name", function () {
})
-$(this).attr("data-gem")
-check after each click if user number = to winning number
*/

//OLD LONG CODE:

/*var crystal1 = Math.floor(Math.random() * ((12-1)+1) +1);

var crystal2 = Math.floor(Math.random() * ((12-1)+1) +1);

var crystal3 = Math.floor(Math.random() * ((12-1)+1) +1);

var crystal4 = Math.floor(Math.random() * ((12-1)+1) +1);

$(document).on("click", "#diamond", function () {
    userScore = userScore + crystal1;
    if (userScore === computerChoice) {
        wins++
    }
    if (userScore > computerChoice) {
        losses++
    }
})

$(document).on("click", "#emerald",function() {
    userScore = userScore + crystal2;
    if (userScore === computerChoice) {
        wins++
    }
    if (userScore > computerChoice) {
        losses++
    }
})

$(document).on("click", "#heart",function() {
    userScore = userScore + crystal3;
    if (userScore === computerChoice) {
        wins++
    }
    if (userScore > computerChoice) {
        losses++
    }
})

$(document).on("click", "#five",function() {
    userScore = userScore + crystal4;
    if (userScore === computerChoice) {
        wins++
    }
    if (userScore > computerChoice) {
        losses++
    }
})

*/

