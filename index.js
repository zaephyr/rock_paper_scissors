const rps = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let compScore = 0;

function reply_click() {
    playRound(event.srcElement.id);

    if (playerScore >= 5 || compScore >= 5) {
        if (playerScore == 5) {
            alert('Human WINs : ' + playerScore + ' vs ' + compScore);
        } else if (compScore == 5) {
            alert('Computer WINs : ' + compScore + ' vs ' + playerScore);
        }

        playerScore = 0;
        compScore = 0;
        document.getElementById('hu_score').innerHTML = playerScore;
        document.getElementById('comp_score').innerHTML = compScore;
    }
}

function playRound(ps) {
    computerSelection = rps[Math.floor(Math.random() * rps.length)];
    document.getElementById('pick').innerHTML = computerSelection.toUpperCase();

    ps = ps.toLowerCase();
    if (ps == computerSelection) {
        document.getElementById('commentary').innerHTML = "It's a tie! ";
    } else if (
        (ps == 'rock' && computerSelection == 'scissors') ||
        (ps == 'paper' && computerSelection == 'rock') ||
        (ps == 'scissors' && computerSelection == 'paper')
    ) {
        playerScore++;
        document.getElementById('commentary').innerHTML = 'Human wins! ';
        document.getElementById('hu_score').innerHTML = playerScore;
    } else {
        compScore++;
        document.getElementById('commentary').innerHTML = 'Computer wins! ';
        document.getElementById('comp_score').innerHTML = compScore;
    }
}
