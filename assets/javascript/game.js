var winCount = 0;
var currentWord = [];
var guessCounter = 9;
var guesses = [];
var compChoice;
var countries = [
	["A", "F", "G", "H", "A", "N", "I", "S", "T", "A", "N"],
	["A", "L", "B", "A", "N", "I", "A" ],
	["A", "L", "G", "E", "R", "I", "A"]
]

// random country computer has chosen that user has to guess
function genCompChoice () {
compChoice = countries[Math.floor(Math.random()*(countries.length))];
	return compChoice;
}

compChoice = genCompChoice();

document.onkeyup = function(event) {
	//get the letter the user presses on their keyboard
	var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
	guesses--;

	guesses.push(userChoice);

	if (userChoice == compChoice) {
		winCount++
	} else {
		if (guessCounter < 0) {
			gameOver ();
		}
	}

	document.querySelector(#winCount).innerHTML = winCount;
	document.querySelector(#guessCounter).innerHTML = lossCount;
	document.querySelector(#guesses).innerHTML = guesses.join(", ");
}
