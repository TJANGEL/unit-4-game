var matchThisNumber;
var win = 0;
var loss = 0;
var startPoint = 0;

var startGame = function () {

$(".btn").empty();

matchThisNumber = Math.floor(Math.random() * 100) + 20;

$("#matchThisNumber").html('Match This Number: ' + matchThisNumber);

for (var i = 0; i < 4; i++) {

    var randomValue = Math.floor(Math.random() * 10) + 2;
    var crystal = $(".btn");
        crystal.attr({
            "class": 'btn',
            "data-random": randomValue
        });
    
    $("btn").append(crystal);
}

$("#startPoint").html('Your Number: ' + startPoint);
};

startGame();

$(document).on("click", ".btn", function () {

    var crystalValue = parseInt($(this).attr('data-random'));

    startPoint += crystalValue;

    $("#startPoint").html('Your Number: ' + startPoint);

    if (startPoint > matchThisNumber) {

        loss++
        $("#loss").html("LOSSES: " + loss);

        startPoint = 0;

        startGame();

    } else if (startPoint === matchThisNumber) {

        win++;
        $("#win").html("WINS: " + win);

        startPoint = 0;

        startGame();
    }

    console.log(crystalValue);
});