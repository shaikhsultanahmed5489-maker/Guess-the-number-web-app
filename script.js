const inputNum = document.querySelector("#inputNum");
const span1 = document.querySelector("#random");
const BtnChecker = document.querySelector("#btnCheck");
const p1 = document.querySelector("#checker");

const newGameBtn = document.createElement("button");
newGameBtn.textContent = "New Game";
newGameBtn.style.display = "none";
document.querySelector("#div1").appendChild(newGameBtn);


let randomNum = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
const maxAttempts = 10;

function getUserNumber() {
    return parseInt(inputNum.value);
}

function checkGuess() {
    const userNumber = getUserNumber();

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
        alert("Please enter a number between 1 and 10");
        return;
    }

    attempts++;

    span1.textContent = `Attempt ${attempts}/${maxAttempts} , Your guess is ${userNumber}`;

    if (userNumber === randomNum) {
        p1.textContent = "🎉 You guessed it right! You win!";
        endGame();
        return;
    } 
    else if (userNumber < randomNum) {
        p1.textContent = "Number is too low ⬇️";
    } 
    else {
        p1.textContent = "Number is too high ⬆️";
    }

    if (attempts === maxAttempts) {
        p1.textContent = `😢 Game Over! The number was ${randomNum}`;
        endGame();
    }

    inputNum.value = "";
}

function endGame() {
    BtnChecker.disabled = true;
    newGameBtn.style.display = "inline-block";
}

function startNewGame() {
    randomNum = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    span1.textContent = "Number Guessed by computer:";
    p1.textContent = "";
    BtnChecker.disabled = false;
    newGameBtn.style.display = "none";
    inputNum.value = "";
}

// EVENTS
BtnChecker.addEventListener("click", checkGuess);
newGameBtn.addEventListener("click", startNewGame);
