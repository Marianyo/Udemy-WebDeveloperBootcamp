//create secretNumber
var secretNumber=8;

//ask user for guess
var userGuess = Number(prompt("What is your guess?"));

/*
Other clearer way of making userGuess into number and not string.
var stringUserGuess = prompt("What is your guess?");
var userGuess = Number(stringUserGuess);
*/

//check if guess is right

if (userGuess===secretNumber) {
    alert("You Won!!!! The Secret Number is " + secretNumber +".");
}

// otherwise

/*else {
    alert("WRONGGGG");
}
*/


//Number(guess) === secretNumber;

else if (userGuess<secretNumber) {
    alert("Try higher");
}

else {
    alert("Try lower");
}