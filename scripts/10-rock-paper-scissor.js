let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
updateScoreElement();
/*
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}
*/
function playGame(playerMove) {
    const ComputerMove = pickComputerMove();

    console.log(ComputerMove);
    let result = '';
    if (playerMove === 'Scissors') {
        if (ComputerMove === 'Rock') {
            result = 'You lose :(';
        } else if (ComputerMove === 'Paper') {
            result = 'You win :)';
        } else if (ComputerMove === 'Scissors') {
            result = 'Tie -_-';
        }
    } else if (playerMove === 'Paper') {
        if (ComputerMove === 'Rock') {
            result = 'You win :)';
        } else if (ComputerMove === 'Paper') {
            result = 'Tie -_-';
        } else if (ComputerMove === 'Scissors') {
            result = 'You lose :(';
        }
    } else if (playerMove === 'Rock') {
        if (ComputerMove === 'Rock') {
            result = 'Tie -_-';
        } else if (ComputerMove === 'Paper') {
            result = 'You lose :(';
        } else if (ComputerMove === 'Scissors') {
            result = 'You win :)';
        }
    }
    
    if(result === 'You win :)') {
        score.wins += 1;
    } else if (result === 'You lose :(') {
        score.losses += 1;
    } else if (result === 'Tie -_-') {
        score.ties += 1;
    }
    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();
    
    document.querySelector('.js-result')
    .innerHTML = result;

    document.querySelector('.js-moves')
    .innerHTML = `You
    <img src="../images/${playerMove}-emoji.png"  class="move-icon">
     <img src="../images/${ComputerMove}-emoji.png" class="move-icon">
    Computer`;
}

function updateScoreElement() {
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;   
}

function pickComputerMove() {
    const randomNumber = Math.random();
    let ComputerMove = '';   
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        ComputerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        ComputerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        ComputerMove = 'Scissors';
    } 
    return ComputerMove;
}