let userscore = 0;
let computerscore = 0;

const userScorePara = document.getElementById("userscore");
const computerScorePara = document.getElementById("computerscore");
const msg = document.getElementById("msg");

const choices = document.querySelectorAll(".choice");

// Computer Choice
function generateComputerChoice() {
    const arr = ["stone", "paper", "scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}

// Game Logic
function playGame(user, computer) {

    if (user === computer) {
        msg.innerText = "🤝 Match Draw!";
        return;
    }

    let userWin =
        (user === "stone" && computer === "scissors") ||
        (user === "paper" && computer === "stone") ||
        (user === "scissors" && computer === "paper");

    if (userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `🎉 You Win! ${user} beats ${computer}`;
    } else {
        computerscore++;
        computerScorePara.innerText = computerscore;
        msg.innerText = `😔 Computer Wins! ${computer} beats ${user}`;
    }
}

// Event Listeners
choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const user = choice.id;

        const computer = generateComputerChoice();

        playGame(user, computer);

        console.log("User :", user);
        console.log("Computer :", computer);

    });

});
