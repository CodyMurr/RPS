const start = {
    user: {
        wins: 0,
        losses: 0,
        ties: 0,
        choice: 'rock'
    },
    computer: {
        wins: 0,
        losses: 0, 
        ties: 0,
        choice: 'rock'
    },
    choices: ['rock', 'paper', 'scissors'],
};

let winner;
const choiceEls = [...document.querySelectorAll('#choices > div')];

choiceEls.forEach(choice => {
    choice.addEventListener("click", startRound);
});

function startRound(e) {
    
    let idx = choiceEls.indexOf(e.target);
    stIdx = start.choices[idx];
    start.user.choice = stIdx;
    let randIdx = Math.floor(Math.random() 
    * choices.length);
    start.computer.choice = choiceEls[randIdx];

    document.getElementById('round-mrkr').innerHTML+1;
    render();
};

function render() {
    let uChoice = start.user.choice;
    let comChoice = start.computer.choice;
   
        if (comChoice === (uChoice + 1) || comChoice === (uChoice - 2)) {
            winner = start.computer;
        } else if (uChoice === (comChoice + 1) || uChoice === (comChoice - 2)) {
            winner = start.user;
        } else if (uChoice === comChoice) {
            return "T";
        };
    
     if (winner) {
        document.querySelector(`#${winner} > .wins`).innerHTML += 1;
        document.querySelector(`#${!winner} > .losses`).innerHTML += 1;
     };
};