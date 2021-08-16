//                        VARIABLES
//----------------------------------------------------------------

const rpc = ['rock', 'paper', 'scissors'];
let playerChoice;
let computerChoice;
let playerPoints = 0;
let computerPoints = 0;
let bool;
let x = 10;
let lower;

//----------------------------------------------------------
//                     COMPARATION 
//---------------------------------------------------------- 
const comparation = () => {
        switch (lower) {
            case 'rock':
                switch (computerChoice) {
                    case 'rock':
                        console.log(`Player: ${lower}  PC: ${computerChoice}`);
                        console.log('This match is a tie');
                        x++;
                        break;
                    case 'scissors':
                        console.log(`Player: ${lower}  PC: ${computerChoice}`);
                        console.log('You win this match');
                        playerPoints++;
                        break;
                    case 'paper':
                        console.log(`Player: ${lower}  PC: ${computerChoice}`);
                        console.log('You loose this match');
                        computerPoints++;
                        break;
                }
                break;
            case 'paper':
                switch (computerChoice) {
                    case 'rock':
                        console.log(`Player: ${lower}  PC: ${computerChoice}`);
                        console.log('You win this match');
                        playerPoints++;
                        break;
                    case 'scissors':
                        console.log(`Player: ${lower}  PC: ${computerChoice}`);
                        console.log('You loose this match');
                        computerPoints++;
                        break;
                    case 'paper':
                        console.log(`Player: ${lower}  PC: ${computerChoice}`);
                        console.log('This match is a tie');
                        x++;
                        break;
                }
                break;

            case 'scissors':
                switch (computerChoice) {
                    case 'rock':
                        console.log(`Player: ${lower}  PC: ${computerChoice}`);
                        console.log('You loose this match');
                        computerPoints++;
                        break;
                    case 'scissors':
                        console.log(`Player: ${lower}  PC: ${computerChoice}`);
                        console.log('This match is a tie');
                        x++;
                        break;
                    case 'paper':
                        console.log(`Player: ${lower}  PC: ${computerChoice}`);
                        console.log('You win this match');
                        playerPoints++;
                        break;
                }
                break;

            default:
                console.log("Select rock, paper or scissors.");
                return bool = false;


        }
    }
    //----------------------------------------------------------


//                 COMPARATION OF CHOICES
//---------------------------------------------------------
const GAME = () => {

    const computerPlay = () => {

        computerChoice = rpc[Math.floor(Math.random() * rpc.length)];

        return computerChoice;

    }

    for (let i = 0; i < x; i++) {

        if (bool == false) {
            location.reload();
            console.log('restarting the game');
            break;

        }

        if (playerPoints == 5) {

            break;

        } else if (computerPoints == 5) {

            break;

        }

        playerChoice = prompt('¿Rock, Paper or Scissors? : ');

        const lowerCase = () => {
                lower = playerChoice.toLowerCase();
                return lower;
            } //LOWERCASE the input

        computerPlay();
        lowerCase();
        comparation();


    }


}

GAME();
//---------------------------------------------------------

//                   WINNER DETERMINER
//---------------------------------------------------------
const dashboard = () => {

    if (bool != false) {
        if (playerPoints > computerPoints) {

            console.log('-------------------------------');
            console.log(`|YOU WIN THE GAME :) ${playerPoints} - ${computerPoints}|`);
            console.log('-------------------------------');

        } else if (playerPoints < computerPoints) {

            console.log('-------------------------------');
            console.log(`|THE PC WINS THE GAME :C ${computerPoints} - ${playerPoints}|`);
            console.log('-------------------------------');

        } else {
            console.log('--------------------');
            console.log(`|Its a tie :/ ${computerPoints} - ${playerPoints}|`);
            console.log('--------------------');
        }

    }
}

dashboard();
//----------------------------------------------------------