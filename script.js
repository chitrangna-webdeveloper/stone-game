let userscore = 0;
let computerscore = 0;

let userScorePara = document.querySelector("#user-score");
let computerScorePara = document.querySelector("#computer-score");
let msg = document.getElementById("msg");

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", function () {

        let user = choice.id;

        let arr = ["stone", "paper", "scissors"];
        let computer = arr[Math.floor(Math.random() * 3)];

        if (user === computer) {
            console.log("draw");
            msg.innerText = "Match Draw!";
        }

        else if (user === "stone" && computer === "scissors") {
            userscore++;
            userScorePara.innerText = userscore;
            msg.innerText = "You Win!";
            console.log("userwin");
        }

        else if (user === "paper" && computer === "stone") {
            userscore++;
            userScorePara.innerText = userscore;
            msg.innerText = "You Win!";
            console.log("userwin");
        }

        else if (user === "scissors" && computer === "paper") {
            userscore++;
            userScorePara.innerText = userscore;
            msg.innerText = "You Win!";
            console.log("userwin");
        }

        else {
            computerscore++;
            computerScorePara.innerText = computerscore;
            msg.innerText = "Computer Wins!";
            console.log("computerwin");
        }

        console.log("User:", user);
        console.log("Computer:", computer);

    });
});