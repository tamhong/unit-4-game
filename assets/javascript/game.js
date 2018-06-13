/*

-Display crystals
-5 random numbers generated: 4 assigned to each crystal, 1 for winning number
-variable for each crystal
-click listener $(document).on("click", "#crystal name", function () {
})
-$(this).attr("data-gem")
-check after each click if user number = to winning number

*/

function randomNumber (x, y) {
    return Math.floor(Math.random() * ((x-y)+1) +y);
}

var computerChoice = randomNumber(120, 19);

var winNumDisplay=$("#winning-number").text("Winning Number: " + computerChoice)

/*var crystal1 = Math.floor(Math.random() * ((12-1)+1) +1);

var crystal2 = Math.floor(Math.random() * ((12-1)+1) +1);

var crystal3 = Math.floor(Math.random() * ((12-1)+1) +1);

var crystal4 = Math.floor(Math.random() * ((12-1)+1) +1);*/

var crystal1 = randomNumber(12, 1);
var crystal2 = randomNumber(12, 1);
var crystal3 = randomNumber(12, 1);
var crystal4 = randomNumber(12, 1); 

var userScore = 0;
var wins =0;
var losses=0;

/* $(document).on("click", "#diamond", function () {
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


function game (crystalId, crystalNum) {
    $(document).on("click", crystalId,function() {
        userScore = userScore + crystalNum;
        if (userScore === computerChoice) {
            wins++
        }
        if (userScore > computerChoice) {
            losses++
        }
        $("#user-number").text("Current Total: " + userScore);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " +losses)
    })
}

game ("#diamond", crystal1);

game ("#emerald", crystal2);

game ("#heart", crystal3);

game ("#five", crystal4);

$(document).on("click", ".crystal-images", function() {
    if (userScore === computerChoice) {
        userScore = 0;
        computerChoice = randomNumber (120, 19);
        $("#user-number").text("Current Total:" +userScore);
        $("#winning-number").text("Winning Number: " +computerChoice);
    }
    if (userScore > computerChoice) {
        userScore = 0;
        computerChoice = randomNumber (120, 19);
        $("#user-number").text("Current Total:" +userScore);
        $("#winning-number").text("Winning Number: " +computerChoice);
    }

})


//var winNumDisplay=$("#winning-number").text("Winning Number: " + computerChoice)

