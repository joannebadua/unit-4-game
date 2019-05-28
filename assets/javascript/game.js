
  $(document).ready(function () {
    // var firstBin = $("#1-paper");
    // var buttonValue =;
    // var userScore = "";
    
    // Computer creates a random number (19-120) as a goal for the player to match 
    // with accumulated points
    // var Random = [];
    // for (var i = 19; i <= 120; i++){
    //   numbers.push(i)
    //   console.log(numbers[i])
    // }
    // $('#randomNumber').text(Random);


//     for(int i =0; i<3; i++){
//         int randomInt = (int)(10.0 * Math.random());
//         System.out.println("pseudo random int between 1 and 10 : " + randomInt );
// //   }
// w3 schools random integer
document.getElementById("randomNumber").innerHTML =
Math.floor(Math.random() * 120);

    // $(".bin").on("click", function () {

    // }