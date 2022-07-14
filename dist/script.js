let userScore = 0;
let computerScore = 0;
const whoWins = document.querySelector("#whowins");
const score = document.querySelector("#score");
function startGame(e) {
	let userChoice = e;
	let computerChoices = ["rock", "paper", "scissors"];
	let computerChoice = computerChoices[Math.floor(Math.random() * 3)];
	let winner = compare(userChoice, computerChoice);
	whoWins.classList = "";

	if (winner == "User") {
		whoWins.innerHTML = winner + " wins";
		whoWins.classList.add("win");
	} else if (winner == "Computer") {
		whoWins.innerHTML = winner + " wins";
		whoWins.classList.add("lose");
	} else {
		whoWins.innerHTML = winner;
		whoWins.classList.add("tie");
	}

	score.innerHTML = `<span class = "sides">User: ${userScore}</span>
    <span class = "sides">Computer: ${computerScore}</span>`;
}

function compare(choice1, choice2) {
	if (choice1 === choice2) {
		return "It's a tie!";
	} else if (choice1 === "rock") {
		if (choice2 === "scissors") {
			userScore++;
			return "User";
		} else if (choice2 === "paper") {
			computerScore++;
			return "Computer";
		}
	} else if (choice1 === "paper") {
		if (choice2 === "scissors") {
			computerScore++;
			return "Computer";
		} else if (choice2 === "rock") {
			userScore++;
			return "User";
		}
	} else if (choice1 === "scissors") {
		if (choice2 === "paper") {
			userScore++;
			return "User";
		} else if (choice2 === "rock") {
			computerScore++;
			return "Computer";
		}
	}
}