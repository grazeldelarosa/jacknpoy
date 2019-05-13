
var playerTwo;
var scoreOne = 0;
var scoreTwo = 0;
var oneMove = 0;
var game = 1;

function moveRps(oneMove){
        var playerOne = Math.floor(Math.random() * 3) + 1;
        game++;
    
        // check

        if (oneMove == playerOne) {
            document.getElementById("alert-text").innerHTML = "Its a Draw";
        }
        else if (oneMove == 1 && playerOne == 2) {
            scoreOne++;
            document.getElementById("alert-text").innerHTML = "You Lose!";
        }
        else if (oneMove == 1 && playerOne == 3) {
            scoreTwo++;
            document.getElementById("alert-text").innerHTML = "You won!";
        }
        else if (oneMove == 2 && playerOne == 1) {
            scoreTwo++;
            document.getElementById("alert-text").innerHTML = "You won!";
        }
        else if (oneMove == 2 && playerOne == 3) {
            scoreOne++;
            document.getElementById("alert-text").innerHTML = "You Lose!";
        }
        else if (oneMove == 3 && playerOne == 1) {
            scoreOne++;
            document.getElementById("alert-text").innerHTML = "You Lose!";
        }
        else if (oneMove == 3 && playerOne == 2) {
            scoreTwo++;
            document.getElementById("alert-text").innerHTML = "You won!";
        }
        

        function handrock(moverId) {
            document.getElementById(moverId).classList.remove('fa-hand-scissors');
            document.getElementById(moverId).classList.remove('fa-hand-paper');
            document.getElementById(moverId).classList.add('fa-hand-rock');

        }
        function handpaper(moverId) {
            document.getElementById(moverId).classList.remove('fa-hand-rock');
            document.getElementById(moverId).classList.remove('fa-hand-scissors');
            document.getElementById(moverId).classList.add('fa-hand-paper');
        }
        function handscissor(moverId) {
            document.getElementById(moverId).classList.remove('fa-hand-rock');
            document.getElementById(moverId).classList.remove('fa-hand-paper');
            document.getElementById(moverId).classList.add('fa-hand-scissors');
        }
        // check image
        if (playerOne == 1) {
            handrock("moveone");
            document.getElementById("moveone").classList.add('fa-rotate-270');
        }
        if (oneMove == 1) {
            handrock("movetwo");
            document.getElementById("movetwo").classList.remove('fa-flip-horizontal');
            document.getElementById("movetwo").classList.add('fa-rotate-90');
        }
        if (playerOne == 2) {
            handpaper("moveone");
            document.getElementById("moveone").classList.add('fa-rotate-270');
        }
        if (oneMove == 2) {
            handpaper("movetwo");
            document.getElementById("movetwo").classList.remove('fa-flip-horizontal');
            document.getElementById("movetwo").classList.add('fa-rotate-90');
        }
        if (playerOne == 3) {
            handscissor("moveone");
            document.getElementById("moveone").classList.remove('fa-rotate-270');
        }
        if (oneMove == 3) {
            handscissor("movetwo");
            document.getElementById("movetwo").classList.remove('fa-rotate-90');
            document.getElementById("movetwo").classList.add('fa-flip-horizontal');
        }
        
        if (scoreOne > 2) {
            scoreOne = 0;
            scoreTwo = 0;
            game = 1;
            $("#move-pop").modal();
            document.getElementById("alert-text").innerHTML = "Enemy is the champion!";
        }
        else if (scoreTwo > 2) {
            scoreOne = 0;
            scoreTwo = 0;
            game = 1;
            $("#move-pop").modal();
            document.getElementById("alert-text").innerHTML = "Your the champion!";
        }

    document.getElementById("round").innerHTML = "Round" + game;
    document.getElementById("score1").innerHTML = "Enemy Score: " + scoreOne;
    document.getElementById("score2").innerHTML = "Your Score: " + scoreTwo;


}
    


// function moveRock(){
//     var playerOne = '0';
//     if (playerOne == 1) {
//         alert("Draw!");
//     }
//     else if (playerOne == 2) {
//         scoreOne+1;
//         alert("Lose!");
//     }
//     else {
//         scoreTwo+1;
//         alert("Win!");
//     }
//     return playerOne;
// }

// function movePaper(){
//     if (playerOne == 1) {
//         scoreTwo+1;
//         alert("Win!");
//     }
//     else if (playerOne == 2) {
//         alert("Draw!");
//     }
//     else {
//         scoreOne+1;
//         alert("Lose!");
//     }
//     return scoreOne, scoreTwo;
// }

// function moveScissor(){
//     if (playerOne == 1) {
//         scoreOne+1;
//         alert("Lose!");
//     }
//     else if (playerOne == 2) {
//         scoreTwo+1;
//         alert("Win!");
//     }
//     else {
//         alert("Draw!");
//     }
//     return scoreOne, scoreTwo;
// }
