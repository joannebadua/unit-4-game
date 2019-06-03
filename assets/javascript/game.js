$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var binPoints = 0;
    var total = 0;
    var random = randNum()

    $('#numWins').text(wins);
    $('#numLosses').text(losses);
    $('#binPoints').text(total); 
    // $('#numWins').text(wins);
    // $('#numLosses').text(losses);
    // var firstBin = $("#1-paper");
    // var buttonValue =;
    // var userScore = "";
    // Computer creates a random number (19-120) as a goal for the player to match 
    // with accumulated points, then displays Random variable in text connected
    // to html id randomNumber

    function randNum(){
        var random = Math.floor(Math.random() * 101 + 19);
        return random
    }
    
    $('#randomNumber').text(random);
    var recycleRandom = Math.floor(Math.random() * 12 + 1);
    console.log(recycleRandom);
    // even without the adding, build by brick the attr. for each bin
    $("#binOne").attr("num", recycleNum());
    $("#binTwo").attr("num", recycleNum());
    $("#binThree").attr("num", recycleNum());
    $("#binFour").attr("num", recycleNum());
    // But it's the same numbr. use function to spit back the random number (return).
    // Then replace recycleRandom with recylceNum which invokes the Return function
    function recycleNum () {
        return Math.floor(Math.random() * 12 + 1);
    }
        // console.log("dope", recycleNum()) - comment out to get cosole.log meow

    $(".binPic").on("click", function () {
        // *tip: console.log to see if it works.
        // console.log("wow", $(this).attr("num")); - comment out to get cosole.log meow
        total = total + parseInt ($(this).attr("num"));
        console.log("meow", total)
        $('#binPoints').text(total); 
        if (random === total) {
            alert ("you win!")
            wins++; 
            binPoints = 0;
            total = 0; 
            $('#numWins').text(wins);
            initializeGame()
          

        } else if (random < total) {
            alert ("you've gone too far!");
            losses++;
            binPoints = 0;
            total = 0; 
            $('#numLosses').text(losses);
            initializeGame()
            
        }
        // *tip: now console.log the attr. number
        // need to add results/whats going to happen when binOneTwoThreeFour clicked such as 
        // 1) adding Score inside and on the display.
        // 2) determining if this Score matches the Goal number
        // *break this down even smaller*
        // 1) each recycle bin needs a random number (sneak number inside HTML) a) can we make a 
        // random number ---CHECK
        // 2) can we click every picture --check
        // 3) running total - parseInt to turn string into a number (flip into a number).
        // directionsText.textContent = "Guess what letter Psyduck is thinking of";        
    });
    // reset

    function initializeGame() {
        binPoints = "";
        total = 0;
        
        $('#binPoints').text(total);

        var random = randNum()
        $('#randomNumber').text(random);
    }
});