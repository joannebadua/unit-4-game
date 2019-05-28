$(document).ready(function () {
    var wins = 0;
    var loss = 0;
    var binTotalPressed = 0;


    // var firstBin = $("#1-paper");
    // var buttonValue =;
    // var userScore = "";

    // Computer creates a random number (19-120) as a goal for the player to match 
    // with accumulated points, then displays Random variable in text connected
    // to html id randomNumber
    var Random = Math.floor(Math.random() * 120);
    $('#randomNumber').text(Random);

    $("#binOne").on("click", function () {
        // need to add results when binOneTwoThreeFour clicked such as 
        // 1) adding Score inside and on the display.
        // 2) determining if this Score matches the Goal number
    });
    });