const user = {
    name: "User",
    choice: 'null'
};
const computer = {
    name: "Computer",
    choice: 'null'
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
let choices = [images.rock, images.paper, images.scissors]

const choiceEls = [...document.querySelectorAll('#choices > img')];
const reset = document.querySelector('#reset-btn');
const message = document.getElementById('result');

choiceEls.forEach(choice => {
    choice.addEventListener("click", function(e) {
        const trgtIdx = choiceEls.indexOf(e.target);
        user.choice = choices[trgtIdx];
        let randIdx = Math.floor(Math.random() * choiceEls.length);
        computer.choice = choices[randIdx];
        if (winner) return;
        render();     
    });
});

reset.addEventListener("click", function() {
    reset.hidden = true;
    winner = null;
    message.innerHTML = "";
    document.querySelector('#user').style.borderColor = 'white';
    document.querySelector('#computer').style.borderColor = 'white';
});

function render() {
    if (user.choice === computer.choice) {
            message.innerHTML = "Tie Game!";
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
    if (winner) {
        message.innerHTML = `${winner.choice.alt.toUpperCase()} Beats ${loser.choice.alt.toUpperCase()}! ${winner.name} Wins!`;
        document.querySelector(`#${winner.name.toLowerCase()}`).style.borderColor = 'gray';
        reset.hidden = false;
    };
}    


