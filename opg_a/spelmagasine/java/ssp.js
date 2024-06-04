const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;


    const playGame = () => {
        const steinBtn = document.querySelector('.stein');
        const papirBtn = document.querySelector('.papir');
        const saksBtn = document.querySelector('.saks');
        const playerOptions = [steinBtn, papirBtn, saksBtn];
        // Different options for player
        const computerOptions = ['stein', 'papir', 'saks']
        // Different options for computer. Different since player has buttons.

        playerOptions.forEach(option => {
            // Loops the SSP.
            option.addEventListener('click', function () {

                const valigjen = document.querySelector('.valigjen');
                moves++;
                // Updates valigjen and increases moves'es value by one.
                valigjen.innerText = `Vel igjen: ${10 - moves}`;
                // Sets choices left to reduce each time you play. Weird way to do it.

                const choiceNumber = Math.floor(Math.random() * 3);
                // Makes the computer take a random choice.
                const computerChoice = computerOptions[choiceNumber];
                // Sets what the computer's choise with what it got.

                winner(this.innerText, computerChoice)

                if (moves == 10) {
                    spelOver(playerOptions, valigjen);
                    // Game ends when moves reaches 10.
                }
            })
        })

    }

    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.d-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        // converts to lowercase
        if (player === computer) {
            result.textContent = 'Uavgjort'
        }
        else if (player == 'stein') {
            if (computer == 'papir') {
                result.textContent = 'RNG vant';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
                // updates computer score

            } else {
                result.textContent = 'Du vant'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                // updates your score
            }
        }
        else if (player == 'saks') {
            if (computer == 'stein') {
                result.textContent = 'RNG vant';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Du vant';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'papir') {
            if (computer == 'saks') {
                result.textContent = 'RNG vant';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Du vant';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    const spelOver = (playerOptions, valigjen) => {

        const chooseMove = document.querySelector('.move');
        // first element in move get chosen and set in chooseMove.
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
            // hides option
        })


        chooseMove.innerText = 'Ferdig!!'
        valigjen.style.display = 'none';
        // hides valigjen

        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'Du vant'
            result.style.color = 'white';
            result.style.background = '#04aa6d';
            result.style.padding = '10px';
            result.style.borderRadius = '10px';
        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'Du tapte';
            result.style.color = 'red';
            result.style.background = '#04aa6d';
            result.style.padding = '10px';
            result.style.borderRadius = '10px';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Uavgjort';
            result.style.color = 'orange'
            result.style.background = 'grey';
            result.style.padding = '10px';
            result.style.borderRadius = '10px';
        }
        reloadBtn.innerText = 'Prøv igjen?';
        reloadBtn.style.display = 'flex';
        reloadBtn.style.border = '0px';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
        // Restarts the game.
    }


    playGame();

}

game();