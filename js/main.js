const user = {
    name: "User",
    choice: 'null',
    score: 0
};
const computer = {
    name: "Computer",
    choice: 'null',
    score: 0
};
const images = {
    rock: {
        src: '../assets/rps-rock.png',
        alt: 'rock'
    },
    paper: {
        src: '../assets/rps-paper.png',
        alt: 'paper'
    },
    scissors: {
        src: '../assets/rps-scissors.png',
        alt: 'scissors'
    }
};

let winner;
let loser;
let ties = 0;
let reset = false;
let choices = [images.rock, images.paper, images.scissors]

const choiceEls = [...document.querySelectorAll('#choices > img')];
const message = document.getElementById('result');
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');
const numTies = document.getElementById('ties');

choiceEls.forEach(choice => {
    choice.addEventListener("click", function(e) {
        const trgtIdx = choiceEls.indexOf(e.target);
        user.choice = choices[trgtIdx];
        let randIdx = Math.floor(Math.random() * choiceEls.length);
        computer.choice = choices[randIdx];
        render();     
    });
});

document.querySelector('#reset-btn').addEventListener("click", function() {
    reset = true;
    renderMessage();
})
    

function render() {
    reset = false;
    if (user.choice === computer.choice) {
        winner = null;
    } else if (((user.choice === choices[0]) && (computer.choice === choices[1])) || 
    ((user.choice === choices[1]) && (computer.choice === choices[2])) || 
    ((user.choice === choices[2]) && (computer.choice === choices[0]))) {
        winner = computer;
        loser = user;
    } else if (((user.choice === choices[2]) && (computer.choice === choices[1])) || 
    ((user.choice === choices[0]) && (computer.choice === choices[2])) || 
    ((user.choice === choices[1]) && (computer.choice === choices[0]))) {
        winner = user;
        loser = computer;
    } 
    renderMessage();
};  

function renderMessage() {
    if (reset) {
        user.score = 0;
        computer.score = 0;
        ties = 0;
        message.innerHTML = "";
    } else if (winner) {
        message.innerHTML = `${winner.choice.alt.toUpperCase()} Beats ${loser.choice.alt.toUpperCase()}! ${winner.name} Wins!`;
        winner.score += 1;
    } else if (!winner) {
        message.innerHTML = "Tie Game!";
        ties += 1;
    }
    userScore.innerHTML = `${user.name}: ${user.score}`;
    computerScore.innerHTML = `${computer.name}: ${computer.score}`;
    numTies.innerHTML = `Ties: ${ties}`;
};
