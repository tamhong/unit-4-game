//General Random Number Generator

function randomNumber (x, y) {
    return Math.floor(Math.random() * (x - y) + 1 + y)
}

var computerChoice = randomNumber (120, 19);

var userScore = [];

var crystalNum =[];

var crystals =[diamond, emerald, heart, five];

for (var i = 0; i < crystals.length; i++) {
    crystalNum.push(randomNumber(12, 1));
    console.log(crystalNum);
}

function game () {
    $(document).on("click", "#diamond", function() {
        userScore.push(crystalNum[0]);
    })
}

