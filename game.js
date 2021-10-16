
do {
    var userInput = prompt("Rock, paper, scissors?");

    var player = userInput.toLowerCase();
    
    while(!((userInput == "rock") || (userInput == "paper") || userInput == ("scissors"))){
        alert("Please input valid answer");
        var userInput = prompt("Rock, paper, scissors?");
        var player = userInput.toLowerCase();
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
        alert("Compuer wins");
    }

    if (userInput == "paper" && computer == "scissors"){
        alert("Compuer wins");
    }

    if (userInput == "scissors" && computer == "rock"){
        alert("Compuer wins");
    }

    if (userInput == "rock" && computer == "scissors"){
        alert("player wins");
    }

    if (userInput == "paper" && computer == "rock"){
        alert("player wins");
    }

    if (userInput == "scissors" && computer == "paper"){
        alert("player wins");
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
