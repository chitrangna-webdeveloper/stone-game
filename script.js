function playGame(user, computer) {

    if(user === computer){
        msg.innerText = "Match Draw!";
        return;
    }

    let userWin =
        (user === "stone" && computer === "scissors") ||
        (user === "paper" && computer === "stone") ||
        (user === "scissors" && computer === "paper");

    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = "You Win 🎉";
    }else{
        computerscore++;
        computerScorePara.innerText = computerscore;
        msg.innerText = "Computer Wins 😔";
    }

}
