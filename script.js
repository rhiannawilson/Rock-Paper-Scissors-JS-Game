
const gameStats = {
    userPicks:{
        rock: 0,
        paper: 0,
        scissors: 0,
    },
    pcPicks: {
        rock: 0,
        paper: 0,
        scissors: 0
    },
    gameResults: {
        wins: 0,     
        losses: 0, 
        ties: 0,
    },
    timesPlayed :0,
    };
    
// Function to get player name
function getPlayerName() {
    return prompt("Awesome! What's your name?");
  }
    
    // Function to end the game 
    function endGame (name) {
        if (gameStats.timesPlayed === 0) {
            alert("Hope you had fun! Goodbye!");
      } else{
            alert(`Lets have a look at the results, ${name}:\r
                Wins: ${gameStats.gameResults.wins}\r
                Losses: ${gameStats.gameResults.losses}\r
                Ties: ${gameStats.gameResults.ties}\r
                    You played:\r
                Rock: ${gameStats.userPicks.rock}\r
                Paper: ${gameStats.userPicks.paper}\r
                Scissors: ${gameStats.userPicks.scissors}\r
        We hope to see you again`);
            console.log(gameStats);
        }
    }
    
    // Function to get users picks
    function getPcPicks (name) {
        let choice = prompt (
            `Your Turn ${name}, Pick R if you want to play Rock, P for Paper or S for Scissors`
            );
        choice = choice.toUpperCase();
        if (choice === "R" || choice === "P" || choice === "S") {
            if (choice === "R") {
              gameStats.userPicks.rock++;
              return "Rock";
            } else if (choice === "P") {
              gameStats.userPicks.paper++;
              return "Paper";
            } else {
              gameStats.userPicks.scissors++;
              return "Scissors";
            }
          } else {
            alert("Poor choice. Please try again.");
            return getUserPicks(name);
          }
        }
    
    // Function to get computer choice
    function getPcPicks() {
      const randomNumber = Math.floor(Math.random() * 3);
      if (randomNumber === 0) {
        gameStats.pcPicks.rock++;
        return "Rock";
      } else if (randomNumber === 1) {
        gameStats.pcPicks.paper++;
        return "Paper";
      } else {
        gameStats.pcPicks.scissors++;
        return "Scissors";
      }
    }
    
    // Function to determine winner
    function theWinner(user, pc) {
        if (user === pc) {
          gameStats.gameResults.ties++;
          alert(`Its a tie! \u{1F926}`);
          return;
        } else if (
          (user === "Rock" && pc === "Scissors") ||
          (user === "Paper" && pc === "Rock") ||
          (user === "Scissors" && pc === "Paper")
        ) {
          gameStats.gameResults.wins++;
          alert(`${user} beats ${pc} - You win! \u{1F64C}`);
          return;
        } else {
          gameStats.gameResults.losses++;
          alert(`${pc} beats ${user} - You lose! \u{1F92C}`);
          return;
        }
    }
    
    // Function to ask to play again
    function playAgain (name){
        const playAgain = confirm("Do you want to play again?");
        if (playAgain) {
          playGame (name) ;
        } else {
          endGame (name);
        }
      }
      
      // Function play the game
      function playGame (name) {
        // get users choice
        const userPicks = getUserPicks;
        console.log(`User Picks: ${userPicks}`);
        alert(`You chose ${userPicks} lets see what the pc chose!`);
      }
      
        // get pc's choice
        const pcPicks = getPcPicks();
        console.log(`pc choice: ${pcPicks}`);
        alert(`The pc chose ${pcPicks}, which means`);
      
        // determine winner
        theWinner(userPicks, pcPicks);
        gameStats.timesPlayed++;
        

          // ask to play again
  playAgain(name);

      // Confirm user wants to play RPS
      
      const gameOn = confirm("Let's play Rock, Paper, Scissors?");
      console.log(gameOn);
      if (!gameOn) {
        endGame();
      } else {
        const playerName = getPlayerName ();
        console.log(playerName);
        playGame(playerName);
      }

// the dialogue asking for your confirmation - yes or no, ok or cancel etc.
// let areYouSureInput = confirm("are you sure?");
// console.log(`looks like you said ${areYouSureInput}`);

// the dialogue asking for your input
// let questionGame = prompt("Do you want to play?");
//     console.log(`Yes`);

// the dialogue that displays information ONLY and presents no options for the end user
// alert("You can't play");


// Question: who do these methods belong to: alert(), confirm() and prompt()
// Answer: the main browser, window object. 

// Question: pseudo code - what does this mean
// Answer: it's like fake code, or it's like building without a plan or structure, or it's the architecture for the build, 
// Answer: it's the wireframe for JavaScript