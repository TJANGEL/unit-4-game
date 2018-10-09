var matchThisNumber;
var win = 0;
var loss = 0;
var startPoint = 0;

var startGame = function () {

    $(".btn").empty();

    matchThisNumber = Math.floor(Math.random() * 80) + 20;

    $(".matchThisNumber").html("Match This Number: " + matchThisNumber);

    for (var i = 0; i < 4; i++) {
        var randomValue = Math.floor(Math.random() * 9) + 1;
        var crystal = $(".btn");

        $(".btn").append(crystal);
    }

    $("#startPoint").html(startPoint);
}


startGame();

$(document).on("click", ".btn", function () {
    var crystalValue = parseInt($(this).attr('NEEDS VALUE'));

    startPoint += crystalValue;

    $("#startPoint").html(startPoint);

    if (startPoint > matchThisNumber) {
        
        loss++
        $("#loss").html("Losses: " + loss);

        startPoint = 0;

        startGame();

    } else if (startPoint === matchThisNumber) {
        
        win++;
        $("#win").html("Wins: " + win);

        startPoint = 0;

        startGame();
    }
});