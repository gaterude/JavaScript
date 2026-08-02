const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Generate a random number between 1 and 100
const secret = Math.floor(Math.random() * 100) + 1;

let guessCount = 0;

function askGuess() {
  rl.question("Guess a number between 1 and 100: ", (answer) => {
    const guess = Number(answer);
    guessCount++;

    if (guess > secret) {
      console.log("Too high");
      askGuess();
    } else if (guess < secret) {
      console.log("Too low");
      askGuess();
    } else {
      console.log("Correct!");
      console.log(`You guessed the number in ${guessCount} guesses.`);
      rl.close();
    }
  });
}

askGuess();