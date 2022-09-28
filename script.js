// Collect user choice 
var game = confirm("Are you ready to play Rock Papper Scissors?")    
var win = 0; 
var lose = 0; 
var tie = 0;

if (game == true) {
    while (game == true) {
        main();
    }
} else {
    alert("bye, bye");
}

function main() {
    var choice = ["R", "P", "S"];

    // asking R, P, S. 
    var asking = prompt ("R, P, S ?");

    // lower and upper case not sensitive
    asking = asking.toUpperCase(); 
    
    // computer choice // random select possible choice 
    var computerAnswer = choice[Math.floor(Math.random() * choice.length)];
    alert("I choose " + computerAnswer)

    // compare choices 
    
    if (asking == "R") {
        answerR();
    } else if (asking == "P") {
        answerP();
    } else if (asking == "S") {
        answerS();
    } else {
        alert("invalid word");
    }

    // if User choice R 
    function answerR() {
        if (computerAnswer == "S") {
            alert("You win the game");
            win++;
        } else if (computerAnswer == "P") {
            alert("You lost the game");
            lose++;
        } else {
            alert("tie.tie");
            tie++;
        }
    }

    // if User choice P
    function answerP() {
        if (asking == "P" && computerAnswer == "R") {
            alert("You win the game");
            win++;
        } else if (asking == "P" && computerAnswer == "S") {
            alert("You lost the game");
            lose++;
        } else {
            alert("tie.tie");
            tie++;
        }
    }

    // if User choice S
    function answerS() {
        if (asking == "S" && computerAnswer == "P") {
            alert("You win the game");
            win++;
        } else if (asking == "S" && computerAnswer == "R") {
            alert("You lost the game");
            lose++;
        } else {
            alert("tie.tie");
            tie++;
        }
    }

    // Store the data
    // alert (`
    // win :  + win
    // Lost:  + lose 
    // tie :  + tie`)
    alert (`
    Win: `+ win + `
    Lose: ` + lose + `
    Tie: ` + tie)
    return (win, lose, tie);
}
