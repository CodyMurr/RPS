const user = {
    choice: 'null'
};
const computer = {
    choice: 'null'
};

let winner = null;
let choices = ['rock', 'paper', 'scissors']

const choiceEls = [...document.querySelectorAll('#choices > button')];
const message = document.getElementById('result');

choiceEls.forEach(choice => {
    choice.addEventListener("click", function(e) {
        const trgtIdx = choiceEls.indexOf(e.target);
        user.choice = choices[trgtIdx];
        let randIdx = Math.floor(Math.random() * choiceEls.length);
        computer.choice = choices[randIdx];
        render();
    });
});



function render() {
    if (user.choice === computer.choice) {
            message.innerHTML = "Tie Game!";
    } else if (((user.choice === 'rock') && (computer.choice === 'paper')) || 
        ((user.choice === 'paper') && (computer.choice === 'scissors')) || 
        ((user.choice === 'scissors') && (computer.choice === 'rock'))) {
            winner = computer;
            message.innerHTML = `${computer.choice.toUpperCase()} Beats ${user.choice.toUpperCase()}! COMPUTER Wins!`;
    } else if (((user.choice === 'scissors') && (computer.choice === 'paper')) || 
        ((user.choice === 'rock') && (computer.choice === 'scissors')) || 
        ((user.choice === 'paper') && (computer.choice === 'rock'))) {
            winner = user;
            message.innerHTML = `${user.choice.toUpperCase()} Beats ${computer.choice.toUpperCase()}! USER Wins!`;
    } 
};
