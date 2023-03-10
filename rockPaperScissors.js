const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Enter a correct choice');
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else return 'scissors';
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'The game is a tie';
    } if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won'
      } else return 'You won'
    } if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won'
      } else return 'You won'
    } if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won'
      } else return 'You won'
    }
  }
  
  function playGame() {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  playGame('paper')
  
  