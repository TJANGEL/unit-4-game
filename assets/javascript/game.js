var matchThisNumber;
var loss = 0;
var win = 0;
var startPoint = 0;

var resetAndStart = function () {

    $(".crystals").empty();

    matchThisNumber = Math.floor(Math.random() * 100) + 20;

    $("#matchThisNumber").html('Match This Number: ' + matchThisNumber);

    for (var i = 0; i < 4; i++) {

        var id = ["first", "second", "third", "fourth"];
        var random = Math.floor(Math.random() * 10) + 2;

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random,
            "id": id[i]
        });

        $(".crystals").append(crystal);
    }

    $("#startPoint").html("Total Score: " + startPoint);

}

resetAndStart();

$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    startPoint += num;

    $("#startPoint").html("Your Number: " + startPoint);

    if (startPoint > matchThisNumber) {

        loss++;

        $("#loss").html("LOSSES: " + loss);

        startPoint = 0;

        resetAndStart();

    } else if (startPoint === matchThisNumber) {

        win++;

        $("#win").html("WINS: " + win);

        startPoint = 0;

        resetAndStart();
    }
});