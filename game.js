
do {
    var userInput = prompt("Rock, paper, scissors?");

    var userInput = userInput.toLowerCase();
    
    while(!((userInput == "rock") || (userInput == "paper") || userInput == ("scissors"))){
        alert("Please input valid answer");
        var userInput = prompt("Rock, paper, scissors?");
        var userInput = userInput.toLowerCase();
    }


    var random = Math.floor(Math.random()*3);

    if (random == 0) {
        var computer = "rock";
    }

    if (random == 1) {
        var computer = "paper";
    }

    if (random == 2) {
        var computer = "scissors";
    }

    console.log(computer);

    if (userInput == computer){
        alert("Tie");
    }

    if (userInput == "rock" && computer == "paper"){
        alert("Computer chose paper, Computer wins");
    }

    if (userInput == "paper" && computer == "scissors"){
        alert("Computer chose scissors, Computer wins");
    }

    if (userInput == "scissors" && computer == "rock"){
        alert("Computer chose rock, Computer wins");
    }

    if (userInput == "rock" && computer == "scissors"){
        alert("Computer chose scissors, player wins");
    }

    if (userInput == "paper" && computer == "rock"){
        alert("Computer chose rock, player wins");
    }

    if (userInput == "scissors" && computer == "paper"){
        alert("Computer chose paper, player wins");
    }

    var yesno= prompt("Continue?");

    yesno= yesno.toLowerCase();

    if(yesno == "no"){
        var con = 0;
    }else{
        var con = 1;
    }
}
while(con==1);
